import { request } from './helpers';

import {
    CoinListResponse,
    PriceOptions,
    PriceResponse,
    QueryParamsObject,
} from './interfaces';

/**
 * Get general info for all the coins available on the website.
 */
export const getCoinList = (): Promise<CoinListResponse> => {
    return request('all/coinlist');
};

/**
 * Get the latest price for a list of one or more currencies.
 * Really fast, 20-60 ms. Cached each 10 seconds.
 */
export const getPrice = (options: PriceOptions): Promise<PriceResponse> => {
    const { tsyms, ...opts } = options;
    const toSymbols = Array.isArray(tsyms) ? tsyms.join(',') : tsyms;

    return request('price', {
        ...opts,
        tsyms: toSymbols,
    });
};
