"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
/**
 * Returns all the coins that CryptoCompare has added to the website.
 *
 * Cache duration: 60 seconds
 */
exports.getCoinList = function () {
    return helpers_1.request('data/all/coinlist');
};
/**
 * Get the current price of any cryptocurrency in any other currency that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * If the opposite pair trades, it is inverted. (eg.: BTC-XMR)
 *
 * Cache duration: 10 seconds
 */
exports.getPrice = function (options) {
    return helpers_1.request('data/price', options);
};
/**
 * Get the current price of any cryptocurrency in a matrix with any other currencies that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * If the opposite pair trades, it is inverted. (eg.: BTC-XMR)
 *
 * Cache duration: 10 seconds
 */
exports.getPriceMulti = function (options) {
    return helpers_1.request('data/pricemulti', options);
};
/**
 * Get all the current trading info (price, vol, open, high, low etc)
 * of any list of cryptocurrencies in any other currency that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * This API also returns Display values for all the fields.
 * If the opposite pair trades, it is inverted (eg.: BTC-XMR).
 *
 * Cache duration: 10 seconds
 */
exports.getPriceMultiFull = function (options) {
    return helpers_1.request('data/pricemultifull', options);
};
/**
 * Get all the current trading info (price, vol, open, high, low etc) averaged across markets.
 * of any list of cryptocurrencies in any other currency that you need.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * This API also returns Display values for all the fields.
 * If the opposite pair trades, it is inverted (eg.: BTC-XMR).
 *
 * Cache duration: 10 seconds
 */
exports.generateAverage = function (options) {
    return helpers_1.request('data/generateAvg', options);
};
/**
 * Get the price of any cryptocurrency in any other currency that you need at a given timestamp.
 * The price comes from the daily info, so it would be the price at the end of the day GMT based on the requested TS.
 * If the crypto does not trade directly into the toSymbol requested, BTC will be used for conversion.
 * Tries to get direct trading pair data.
 * If there is none or it is more than 30 days before the ts requested, it uses BTC conversion.
 * If the opposite pair trades, it is inverted (eg.: BTC-XMR).
 *
 * Cache duration: 24 hours
 */
exports.getPriceHistorical = function (options) {
    return helpers_1.request('data/pricehistorical', options);
};
/**
 * Get day average price. The values are based on hourly vwap data and the average can be calculated in different ways.
 * It uses BTC conversion if data is not available because the coin is not trading in the specified currency.
 * If tryConversion is set to false it will give you the direct data.
 * If no toTS is given it will automatically do the current day.
 * Also for different timezones use the UTCHourDiff param.
 * The calculation types are:
 *  - VWAP: a VWAP of the hourly close price
 *  - MidHighLow: the average between the 24 H high and low
 *  - VolFVolT - the total volume from / the total volume to (only available with tryConversion set to false)
 *
 * Cache duration: ~10 minutes (610 seconds)
 */
exports.getDayAverage = function (options) {
    return helpers_1.request('data/dayAvg', options);
};
/**
 * Get top exchanges by volume for a currency pair.
 * The number of exchanges you get is the minimum of the limit you set and the total number of exchanges available.
 *
 * Cache duration: 2 minutes
 */
exports.getTopExchangesByVolume = function (options) {
    return helpers_1.request('data/top/exchanges', options);
};
/**
 * Get top coins by volume for the to currency.
 * It returns volume24hto and total supply (where available).
 * The number of coins you get is the minimum of the limit you set (default 50) and the total number of coins available.
 *
 * Cache duration: 2 minutes
 */
exports.getTopCoinsByVolume = function (options) {
    return helpers_1.request('data/top/volumes', options);
};
/**
 * Get open, high, low, close, volumefrom and volumeto from the daily historical data.
 * The values are based on 00:00 GMT time.
 * It uses BTC conversion if data is not available because the coin is not trading in the specified currency.
 *
 * Cache duration: ~10 minutes (610 seconds)
 */
exports.getHistoricalDays = function (options) {
    return helpers_1.request('data/histoday', options);
};
/**
 * Get open, high, low, close, volumefrom and volumeto from the hourly historical data.
 * It uses BTC conversion if data is not available because the coin is not trading in the specified currency.
 *
 * Cache duration: ~10 minutes (610 seconds)
 */
exports.getHistoricalHours = function (options) {
    return helpers_1.request('data/histohour', options);
};
/**
 * Get open, high, low, close, volumefrom and volumeto from the each minute historical data.
 * This data is only stored for 7 days, if you need more, use the hourly or daily path.
 * It uses BTC conversion if data is not available because the coin is not trading in the specified currency.
 *
 * Cache duration: 40 seconds
 */
exports.getHistoricalMinutes = function (options) {
    return helpers_1.request('data/histominute', options);
};
/**
 * Get the rate limits left for you on the histo, price and news paths in the current hour.
 *
 * Cache duration: No cache
 */
exports.getHourRateLimit = function () {
    return helpers_1.request('stats/rate/hour/limit');
};
/**
 * Get the rate limits left for you on the histo, price and news paths in the current minute.
 *
 * Cache duration: No cache
 */
exports.getMinuteRateLimit = function () {
    return helpers_1.request('stats/rate/minute/limit');
};
/**
 * Get the rate limits left for you on the histo, price and news paths in the current minute.
 *
 * Cache duration: No cache
 */
exports.getSecondRateLimit = function () {
    return helpers_1.request('stats/rate/second/limit');
};
//# sourceMappingURL=index.js.map