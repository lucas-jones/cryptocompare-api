import { request } from '../helpers';
import { getPrice } from '../';

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
});
