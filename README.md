# cryptocompare-api

JavaScript library for the [CryptoCompare](https://www.cryptocompare.com/api) api.

**Warning**: the CryptoCompare documentation page has some inaccuracies. 
Reference this [page](https://min-api.cryptocompare.com/) for the most accurate documentation. 

## Dependencies

The cryptocompare-api library requires [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) to be available in the global namespace. If needed, a polyfill can be found [here](https://github.com/github/fetch).

For usage in Node.js, install [node-fetch](https://github.com/bitinn/node-fetch) and set it on `global`.

**Example:**
```javascript
global.fetch = require('node-fetch');
```

## Install

With yarn:

```
yarn add cryptocompare-api
```

With npm:

```
npm install cryptocompare-api
```
