import { request } from './helpers';

import {
    CoinListResponse,
    GenerateAverageOptions,
    GenerateAverageResponse,
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
    return request('price', options);
};

/**
 * Same as single getPrice but with multiple from symbols.
 * Returns a matrix.
 */
export const getPriceMulti = (options: PriceMultiOptions): Promise<PriceMultiResponse> => {
    return request('pricemulti', options);
};

/**
 * Get all the current trading info (price, vol, open, high, low etc) of any list of cryptocurrencies in any other currency that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * This API also returns Display values for all the fields.
 * If the oposite pair trades, it is inverted (eg.: BTC-XMR).
 */
export const getPriceMultiFull = (options: PriceMultiOptions): Promise<PriceMultiFullResponse> => {
    return request('pricemultifull', options);
};

/**
 * Same as getPriceMultiFull, but values are averaged based on markets
 */
export const generateAverage = (options: GenerateAverageOptions): Promise<GenerateAverageResponse> => {
    return request('generateAvg', options);
};
