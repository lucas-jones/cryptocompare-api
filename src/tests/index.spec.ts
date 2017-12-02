import { request } from '../helpers';
import {
    getPrice,
    getPriceMulti,
} from '../';

jest.mock('helpers');

describe('cryptocompare-api', () => {
    describe('getPrice', () => {
        it('passes all options as is to request if tsyms is a string', () => {
            getPrice({
                fsym: 'BTC',
                tsyms: 'ETH',
                sign: true,
            });

            expect(request).toBeCalledWith('price', {
                fsym: 'BTC',
                tsyms: 'ETH',
                sign: true,
            });
        });

        it('combines all of the tsyms if it is an array before passing it to request', () => {
            getPrice({
                fsym: 'BTC',
                tsyms: ['ETH', 'LTC', 'BTC'],
                sign: false,
            });

            expect(request).toBeCalledWith('price', {
                fsym: 'BTC',
                tsyms: 'ETH,LTC,BTC',
                sign: false,
            });
        });
    });

    describe('getPriceMulti', () => {
        it('passes options as is when tsyms and fsyms are strings', () => {
            getPriceMulti({
                fsyms: 'BTC',
                tsyms: 'ETH',
                sign: true,
            });

            expect(request).toBeCalledWith('pricemulti', {
                fsyms: 'BTC',
                tsyms: 'ETH',
                sign: true,
            });
        });

        it('joins the fsyms string if it is an array', () => {
            getPriceMulti({
                fsyms: ['BTC', 'LTC'],
                tsyms: 'ETH',
                sign: false,
            });

            expect(request).toBeCalledWith('pricemulti', {
                fsyms: 'BTC,LTC',
                tsyms: 'ETH',
                sign: false,
            });
        });

        it('joins the tsyms string if it is an array', () => {
            getPriceMulti({
                fsyms: 'BTC',
                tsyms: ['ETH', 'LTC', 'BTC'],
                sign: false,
            });

            expect(request).toBeCalledWith('pricemulti', {
                fsyms: 'BTC',
                tsyms: 'ETH,LTC,BTC',
                sign: false,
            });
        });
    });
});
