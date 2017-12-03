// tslint:disable-next-line:no-reference
/// <reference path="../typings/global.d.ts" />

import {
    convertObjectToQueryString,
    request,
} from '../helpers';

const getResolvedFetch = (json: object) => {
    return Promise.resolve({
        json: () => json,
    });
};

describe('helpers', () => {
    describe('convertObjectToQueryString', () => {
        it('returns an empty string if the object is empty', () => {
            expect(convertObjectToQueryString({})).toEqual('');
        });

        it('returns a key-value pair with a question mark prefix', () => {
            expect(convertObjectToQueryString({
                foo: 'bar',
            })).toEqual('?foo=bar');
        });

        it('combine values that are arrays', () => {
            expect(convertObjectToQueryString({
                symbols: ['USD', 'LTC', 'BTC'],
            })).toEqual('?symbols=USD,LTC,BTC');
        });

        it('returns multiple key-value pairs', () => {
            expect(convertObjectToQueryString({
                foo: 'bar',
                bar: 'baz',
            })).toEqual('?foo=bar&bar=baz');
        });

        it('converts date objects into epoch unix time', () => {
            expect(convertObjectToQueryString({
                ts: new Date(1512279698326),
            })).toEqual('?ts=1512279698326');
        });
    });

    describe('request', () => {
        it('calls fetch with full url', () => {
            global.fetch = jest.fn().mockReturnValue(getResolvedFetch({}));
            request('some-crypto-prices');

            expect(global.fetch).toBeCalledWith(`https://min-api.cryptocompare.com/some-crypto-prices`);
        });

        it('calls fetch with the full url and query parameters', () => {
            global.fetch = jest.fn().mockReturnValue(getResolvedFetch({}));
            request('some-crypto-prices', {
                fsym: 'BTC',
                tsyms: 'ETH',
                app_name: 'test_app'
            });

            expect(global.fetch).toBeCalledWith(
                `https://min-api.cryptocompare.com/some-crypto-prices?fsym=BTC&tsyms=ETH&app_name=test_app`
            );
        });

        it('returns the json body', async () => {
            const jsonBody = { foo: 'bar' };
            global.fetch = () => getResolvedFetch(jsonBody);

            expect(await request('some-crypto-prices')).toEqual(jsonBody);
        });

        it('throws an error if the response is unsuccessful', async () => {
            const jsonBody = {
                Response: 'Error',
                Message: 'Service is unavailable',
                ErrorsSummary: 'Not implemented',
            };
            global.fetch = () => getResolvedFetch(jsonBody);

            await expect(request('some-crypto-prices')).rejects.toEqual(
                expect.objectContaining({ message: 'Service is unavailable' })
            );
        });

        it('throws an error using the errors summary if the message is empty', async () => {
            const jsonBody = {
                Response: 'Error',
                Message: '',
                ErrorsSummary: 'Not implemented',
            };
            global.fetch = () => getResolvedFetch(jsonBody);

            await expect(request('some-crypto-prices')).rejects.toEqual(
                expect.objectContaining({ message: 'Not implemented' })
            );
        });
    });
});
