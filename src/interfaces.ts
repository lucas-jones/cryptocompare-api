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
     * Default: CCCAGG (CryptoCompare Current Aggregate)
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
     * Default: CCCAGG (CryptoCompare Current Aggregate)
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

export interface GenerateAverageOptions {
    /** From symbol */
    fsym: string;

    /** To Symbol */
    tsym: string;

    /** Names of exchanges. */
    e: string[];

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

export interface FullRawResponse {
    CHANGE24HOUR: number;
    CHANGEDAY: number;
    CHANGEPCT24HOUR: number;
    CHANGEPCTDAY: number;
    FLAGS: string;
    FROMSYMBOL: string;
    HIGH24HOUR: number;
    HIGHDAY: number;
    LASTMARKET: string;
    LASTTRADEID: string;
    LASTUPDATE: number;
    LASTVOLUME: number;
    LASTVOLUMETO: number;
    LOW24HOUR: number;
    LOWDAY: number;
    MARKET: string;
    MKTCAP: number;
    OPEN24HOUR: number;
    OPENDAY: number;
    PRICE: number;
    SUPPLY: number;
    TOSYMBOL: string;
    TOTALVOLUME24H: number;
    TOTALVOLUME24HTO: number;
    TYPE: string;
    VOLUME24HOUR: number;
    VOLUME24HOURTO: number;
    VOLUMEDAY: number;
    VOLUMEDAYTO: number;
}

export interface FullDisplayResponse {
    CHANGE24HOUR: string;
    CHANGEDAY: string;
    CHANGEPCT24HOUR: string;
    CHANGEPCTDAY: string;
    FROMSYMBOL: string;
    HIGH24HOUR: string;
    HIGHDAY: string;
    LASTMARKET: string;
    LASTTRADEID: string;
    LASTUPDATE: string;
    LASTVOLUME: string;
    LASTVOLUMETO: string;
    LOW24HOUR: string;
    LOWDAY: string;
    MARKET: string;
    MKTCAP: string;
    OPEN24HOUR: string;
    OPENDAY: string;
    PRICE: string;
    SUPPLY: string;
    TOSYMBOL: string;
    TOTALVOLUME24H: string;
    TOTALVOLUME24HTO: string;
    VOLUME24HOUR: string;
    VOLUME24HOURTO: string;
    VOLUMEDAY: string;
    VOLUMEDAYTO: string;
}

export interface PriceMultiFullResponse {
    RAW: {
        [fromSymbol: string]: {
            [toSymbol: string]: FullRawResponse;
        };
    };

    DISPLAY: {
        [fromSymbol: string]: {
            [toSymbol: string]: FullDisplayResponse;
        };
    };
}

export interface GenerateAverageResponse {
    RAW: FullRawResponse;
    DISPLAY: FullDisplayResponse;
}
