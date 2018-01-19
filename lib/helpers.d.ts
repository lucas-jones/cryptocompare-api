import { QueryParamsObject } from './interfaces';
/**
 * Gets data from the CryptoCompare api.
 */
export declare const request: (path: string, options?: QueryParamsObject) => Promise<any>;
/**
 * Takes an object and returns a query string
 */
export declare const convertObjectToQueryString: (obj: QueryParamsObject) => string;
/**
 * Stringifies value for query strings
 * Will return a date in epoch unix time
 */
export declare const stringifyQueryParamValue: (value: any) => any;
