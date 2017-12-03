import { request } from '../helpers';

import {
    generateAverage,
    getPrice,
    getPriceMulti,
    getPriceMultiFull,
} from '../';

jest.mock('helpers');

describe('cryptocompare-api', () => {
    describe('getPrice', () => {
        it('requests for the price', () => {
            const options = {
                fsym: 'BTC',
                tsyms: ['ETH', 'USD'],
            };
            getPrice(options);

            expect(request).toBeCalledWith('data/price', options);
        });
    });

    describe('getPriceMulti', () => {
        it('requests for a matrix of prices', () => {
            const options = {
                fsyms: ['BTC', 'USD'],
                tsyms: ['ETH', 'LTC'],
            };
            getPriceMulti(options);

            expect(request).toBeCalledWith('data/pricemulti', options);
        });
    });

    describe('getPriceMultiFull', () => {
        it('requests for a matrix of prices with full details', () => {
            const options = {
                fsyms: ['BTC', 'LTC'],
                tsyms: ['ETH', 'LTC', 'BTC'],
            };
            getPriceMultiFull(options);

            expect(request).toBeCalledWith('data/pricemultifull', options);
        });
    });

    describe('generateAverage', () => {
        it('requests the generate average', () => {
            const options = {
                fsym: 'ETH',
                tsym: 'USD',
                e: [
                    'Coinbase',
                    'Kraken',
                ],
            };
            generateAverage(options);

            expect(request).toBeCalledWith('data/generateAvg', options);
        });
    });
});
