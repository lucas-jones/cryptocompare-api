export interface QueryParamsObject {
    [key: string]: any;
}

export interface Coin {
    /** The internal id, this is used in other calls */
    id: number;

    /** The url of the coin on cryptocompare */
    Url: string;

    /** The logo image of the coin */
    ImageUrl: string;

    /** The symbol */
    Name: string;

    /** The name */
    CoinName: string;

    /** A combination of the name and the symbol */
    FullName: string;

    /** The algorithm of the cryptocurrency */
    Algorithm: String;

    /** The proof type of the cryptocurrency */
    ProofType: string;

    /** The order that the coin is ranked compared to other coins */
    SortOrder: number;
}

export interface PriceOptions {
    /** From symbol */
    fsym: string;

    /** To Symbols, include multiple symbols */
    tsyms: string | string[];

    /** Name of exchange.
     * Default: CCCAGG
     */
    e?: string;

    /**
     * Name of your application.
     * Default: NotAvailable
     */
    extraParams?: string;

    /**
     * If set to true, the server will sign the requests.
     * Default: false
     */
    sign?: boolean;

    /**
     * If set to false, it will try to get values without using any conversion at all.
     * Default: true
     */
    tryConversion?: boolean;
}

export interface PriceMultiOptions {
    /** From symbol, include multiple symbols */
    fsyms: string | string[];

    /** To Symbols, include multiple symbols */
    tsyms: string | string[];

    /** Name of exchange.
     * Default: CCCAGG
     */
    e?: string;

    /**
     * Name of your application.
     * Default: NotAvailable
     */
    extraParams?: string;

    /**
     * If set to true, the server will sign the requests.
     * Default: false
     */
    sign?: boolean;

    /**
     * If set to false, it will try to get values without using any conversion at all.
     * Default: true
     */
    tryConversion?: boolean;
}

export interface CoinListResponse {
    /** The type of the response */
    Response: 'Success' | 'Error';

    /** The message for the response */
    Message: string;

    /** The base url for all the images from the ImageUrl field */
    BaseImageUrl: string;

    /** The base url for all the links from the Url field */
    BaseLinkUrl: string;

    /** Integer representing the type of response */
    Type: number;

    // TODO: fill out;
    Data: {
        [symbol: string]: Coin;
    };
}

export interface PriceResponse {
    [symbol: string]: number;
}

export interface PriceMultiResponse {
    [symbol: string]: PriceResponse;
}
