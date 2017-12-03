global.fetch = require('node-fetch');
import { request } from './helpers';

import {
    CoinListResponse,
    PriceMultiFullResponse,
    PriceMultiOptions,
    PriceMultiResponse,
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

/**
 * Same as single getPrice but with multiple from symbols.
 * Returns a matrix.
 */
export const getPriceMulti = (options: PriceMultiOptions): Promise<PriceMultiResponse> => {
    const { fsyms, tsyms, ...opts } = options;
    const toSymbols = Array.isArray(tsyms) ? tsyms.join(',') : tsyms;
    const fromSymbols = Array.isArray(fsyms) ? fsyms.join(',') : fsyms;

    return request('pricemulti', {
        ...opts,
        tsyms: toSymbols,
        fsyms: fromSymbols,
    });
};

/**
 * Get all the current trading info (price, vol, open, high, low etc) of any list of cryptocurrencies in any other currency that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * This API also returns Display values for all the fields.
 * If the oposite pair trades, it is inverted (eg.: BTC-XMR).
 */
export const getPriceMultiFull = (options: PriceMultiOptions): Promise<PriceMultiFullResponse> => {
    const { fsyms, tsyms, ...opts } = options;
    const toSymbols = Array.isArray(tsyms) ? tsyms.join(',') : tsyms;
    const fromSymbols = Array.isArray(fsyms) ? fsyms.join(',') : fsyms;

    return request('pricemultifull', {
        ...opts,
        tsyms: toSymbols,
        fsyms: fromSymbols,
    });
};
