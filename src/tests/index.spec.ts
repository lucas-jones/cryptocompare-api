import { request } from '../helpers';

import {
    generateAverage,
    getDayAverage,
    getHistoricalDays,
    getHistoricalHours,
    getHistoricalMinutes,
    getPrice,
    getPriceHistorical,
    getPriceMulti,
    getPriceMultiFull,
    getTopCoinsByVolume,
    getTopExchangesByVolume,
} from '../';

jest.mock('helpers');

describe('cryptocompare-api', () => {
    describe('getPrice', () => {
        it('requests for the price', () => {
            getPrice({
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'BTC',
                sign: true,
                tryConversion: false,
                tsyms: ['ETH', 'USD'],
            });

            expect(request).toBeCalledWith('data/price', {
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'BTC',
                sign: true,
                tryConversion: false,
                tsyms: ['ETH', 'USD'],
            });
        });
    });

    describe('getPriceMulti', () => {
        it('requests for a matrix of prices', () => {
            getPriceMulti({
                e: 'Coinbase',
                extraParams: 'app',
                fsyms: ['BTC', 'USD'],
                sign: false,
                tryConversion: true,
                tsyms: ['ETH', 'LTC'],
            });

            expect(request).toBeCalledWith('data/pricemulti', {
                e: 'Coinbase',
                extraParams: 'app',
                fsyms: ['BTC', 'USD'],
                sign: false,
                tryConversion: true,
                tsyms: ['ETH', 'LTC'],
            });
        });
    });

    describe('getPriceMultiFull', () => {
        it('requests for a matrix of prices with full details', () => {
            getPriceMultiFull({
                fsyms: ['BTC', 'LTC'],
                tsyms: ['ETH', 'LTC', 'BTC'],
            });

            expect(request).toBeCalledWith('data/pricemultifull', {
                fsyms: ['BTC', 'LTC'],
                tsyms: ['ETH', 'LTC', 'BTC'],
            });
        });
    });

    describe('generateAverage', () => {
        it('requests the generate average', () => {
            generateAverage({
                fsym: 'ETH',
                tsym: 'USD',
                e: [
                    'Coinbase',
                    'Kraken',
                ],
            });

            expect(request).toBeCalledWith('data/generateAvg', {
                fsym: 'ETH',
                tsym: 'USD',
                e: [
                    'Coinbase',
                    'Kraken',
                ],
            });
        });
    });

    describe('getPriceHistorical', () => {
        it('requests the historical price', () => {
            getPriceHistorical({
                calculationType: 'HourVWAP',
                e: ['Coinbase', 'Kraken'],
                extraParams: 'app',
                fsym: 'ETH',
                sign: true,
                tryConversion: false,
                ts: 123456789,
                tsyms: ['USD', 'LTC'],
            });

            expect(request).toBeCalledWith('data/pricehistorical', {
                calculationType: 'HourVWAP',
                e: ['Coinbase', 'Kraken'],
                extraParams: 'app',
                fsym: 'ETH',
                sign: true,
                tryConversion: false,
                ts: 123456789,
                tsyms: ['USD', 'LTC'],
            });
        });
    });

    describe('getDayAverage', () => {
        it('requests the day average', () => {
            getDayAverage({
                avgType: 'HourVWAP',
                e: ['Coinbase', 'Kraken'],
                extraParams: 'app',
                fsym: 'ETH',
                sign: false,
                toTs: 1512279137525,
                tryConversion: true,
                tsym: 'USD',
                UTCHourDiff: 10,
            });

            expect(request).toBeCalledWith('data/dayAvg', {
                avgType: 'HourVWAP',
                e: ['Coinbase', 'Kraken'],
                extraParams: 'app',
                fsym: 'ETH',
                sign: false,
                toTs: 1512279137525,
                tryConversion: true,
                tsym: 'USD',
                UTCHourDiff: 10,
            });
        });
    });

    describe('getTopExchangesByVolume', () => {
        it('requests the top exchanges', () => {
            getTopExchangesByVolume({
                extraParams: 'app',
                fsym: 'USD',
                limit: 10,
                sign: false,
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/top/exchanges', {
                extraParams: 'app',
                fsym: 'USD',
                limit: 10,
                sign: false,
                tsym: 'ETH',
            });
        });
    });

    describe('getTopCoinsByVolume', () => {
        it('requests the top exchanges', () => {
            getTopCoinsByVolume({
                extraParams: 'app',
                limit: 20,
                sign: false,
                tsym: 'USD',
            });

            expect(request).toBeCalledWith('data/top/volumes', {
                extraParams: 'app',
                limit: 20,
                sign: false,
                tsym: 'USD',
            });
        });
    });

    describe('getHistoricalDays', () => {
        it('requests history data for days', () => {
            getHistoricalDays({
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histoday', {
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });
        });
    });

    describe('getHistoricalHours', () => {
        it('requests history data for hours', () => {
            getHistoricalHours({
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histohour', {
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });
        });
    });

    describe('getHistoricalMinutes', () => {
        it('requests history data for minutes', () => {
            getHistoricalMinutes({
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histominute', {
                aggregate: 10,
                allData: false,
                e: 'Coinbase',
                extraParams: 'app',
                fsym: 'USD',
                limit: 5,
                sign: false,
                toTs: 123456789,
                tryConversion: false,
                tsym: 'ETH',
            });
        });
    });
});
