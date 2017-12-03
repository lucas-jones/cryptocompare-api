import {
    QueryParamsObject,
} from './interfaces';

/**
 * Gets data from the CryptoCompare api.
 */
export const request = (path: string, options: QueryParamsObject = {}): Promise<any> => { // tslint:disable-line:no-any
    const queryString = convertObjectToQueryString(options);
    const url = `https://min-api.cryptocompare.com/${path}${queryString}`;

    return fetch(url)
        .then(res => res.json())
        .then(body => {
            if (body.Response === 'Error') {
                throw new Error(body.Message || body.ErrorsSummary);
            }

            return body;
        });
};

/**
 * Takes an object and returns a query string
 */
export const convertObjectToQueryString = (obj: QueryParamsObject) => {
    const queryParamPairs: string[] = [];

    Object.keys(obj).forEach(key => {
        const value = obj[key];

        if (value !== undefined) {
            queryParamPairs.push(`${key}=${value}`);
        }
    });

    const queryString = queryParamPairs.join('&');

    return queryString.length ? `?${queryString}` : queryString;
};
