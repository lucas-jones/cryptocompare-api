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
                fsym: 'BTC',
                tsyms: ['ETH', 'USD'],
            });

            expect(request).toBeCalledWith('data/price', {
                fsym: 'BTC',
                tsyms: ['ETH', 'USD'],
            });
        });
    });

    describe('getPriceMulti', () => {
        it('requests for a matrix of prices', () => {
            getPriceMulti({
                fsyms: ['BTC', 'USD'],
                tsyms: ['ETH', 'LTC'],
            });

            expect(request).toBeCalledWith('data/pricemulti', {
                fsyms: ['BTC', 'USD'],
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
                fsym: 'ETH',
                tsyms: ['USD', 'LTC'],
                e: [
                    'Coinbase',
                    'Kraken',
                ],
            });

            expect(request).toBeCalledWith('data/pricehistorical', {
                fsym: 'ETH',
                tsyms: ['USD', 'LTC'],
                e: [
                    'Coinbase',
                    'Kraken',
                ],
            });
        });
    });

    describe('getDayAverage', () => {
        it('requests the day average', () => {
            getDayAverage({
                fsym: 'ETH',
                tsym: 'USD',
                avgType: 'HOURVWAP',
                toTs: 1512279137525,
            });

            expect(request).toBeCalledWith('data/dayAvg', {
                fsym: 'ETH',
                tsym: 'USD',
                avgType: 'HOURVWAP',
                toTs: 1512279137525,
            });
        });
    });

    describe('getTopExchangesByVolume', () => {
        it('requests the top exchanges', () => {
            getTopExchangesByVolume({
                fsym: 'USD',
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/top/exchanges', {
                fsym: 'USD',
                tsym: 'ETH',
            });
        });
    });

    describe('getTopCoinsByVolume', () => {
        it('requests the top exchanges', () => {
            getTopCoinsByVolume({
                tsym: 'USD'
            });

            expect(request).toBeCalledWith('data/top/volumes', {
                tsym: 'USD',
            });
        });
    });

    describe('getHistoricalDays', () => {
        it('requests history data for days', () => {
            getHistoricalDays({
                fsym: 'USD',
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histoday', {
                fsym: 'USD',
                tsym: 'ETH',
            });
        });
    });

    describe('getHistoricalHours', () => {
        it('requests history data for hours', () => {
            getHistoricalHours({
                fsym: 'USD',
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histohour', {
                fsym: 'USD',
                tsym: 'ETH',
            });
        });
    });

    describe('getHistoricalMinutes', () => {
        it('requests history data for minutes', () => {
            getHistoricalMinutes({
                fsym: 'USD',
                tsym: 'ETH',
            });

            expect(request).toBeCalledWith('data/histominute', {
                fsym: 'USD',
                tsym: 'ETH',
            });
        });
    });
});
