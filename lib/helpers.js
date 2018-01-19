"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets data from the CryptoCompare api.
 */
exports.request = function (path, options) {
    if (options === void 0) { options = {}; }
    var queryString = exports.convertObjectToQueryString(options);
    var url = "https://min-api.cryptocompare.com/" + path + queryString;
    return fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (body) {
        if (body.Response === 'Error') {
            throw new Error(body.Message || body.ErrorsSummary);
        }
        return body;
    });
};
/**
 * Takes an object and returns a query string
 */
exports.convertObjectToQueryString = function (obj) {
    var queryParamPairs = [];
    Object.keys(obj).forEach(function (key) {
        var value = exports.stringifyQueryParamValue(obj[key]);
        if (value !== undefined) {
            queryParamPairs.push(key + "=" + value);
        }
    });
    var queryString = queryParamPairs.join('&');
    return queryString.length ? "?" + queryString : queryString;
};
/**
 * Stringifies value for query strings
 * Will return a date in epoch unix time
 */
exports.stringifyQueryParamValue = function (value) {
    // Converts to unix timestamp
    if (value instanceof Date) {
        return Math.floor(value.getTime() / 1000);
    }
    return value.toString();
};
//# sourceMappingURL=helpers.js.map