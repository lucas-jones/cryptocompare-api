export type fromSymbol = string;
export type toSymbol = string;
export type market = string;

export interface QueryParamsObject {
    [key: string]: any; // tslint:disable-line:no-any
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
    Algorithm: string;

    /** The proof type of the cryptocurrency */
    ProofType: string;

    /** The order that the coin is ranked compared to other coins */
    SortOrder: number;
}

export interface BaseOptions {
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
}

export interface ConversionOptions extends BaseOptions {
    /**
     * If set to false, it will try to get values without using any conversion at all.
     * Default: true
     */
    tryConversion?: boolean;
}

export interface PriceOptions extends ConversionOptions {
    /** From symbol */
    fsym: fromSymbol;

    /** To Symbols, include multiple symbols */
    tsyms: toSymbol[];

    /**
     * Name of exchange.
     * Default: CCCAGG (CryptoCompare Current Aggregate)
     */
    e?: market;
}

export interface PriceMultiOptions extends ConversionOptions {
    fsyms: fromSymbol[];

    tsyms: toSymbol[];

    /**
     * Name of exchange.
     * Default: CCCAGG (CryptoCompare Current Aggregate)
     */
    e?: market;
}

export interface GenerateAverageOptions extends ConversionOptions {
    /** From symbol */
    fsym: fromSymbol;

    /** To Symbol */
    tsym: toSymbol;

    /** Names of exchanges. */
    e: market[];
}

export interface PriceHistoricalOptions extends ConversionOptions {
    /** From symbol */
    fsym: fromSymbol;

    /** To Symbols */
    tsyms: toSymbol[];

    /**
     * Name of exchanges, include multiple
     * Default: CCCAGG (CryptoCompare Current Aggregate)
     */
    e?: market | market[];

    /** Epoch unix timestamp for day to retrieve price from */
    ts?: number;

    /** Default: Close */
    calculationType?: string;
}

export interface DayAverageOptions extends ConversionOptions {
    /** From symbol */
    fsym: fromSymbol;

    /** To symbol */
    tsym: toSymbol;

    /** Default: HourVWAP */
    avgType?: string;

    /**
     * By default, timestamp is based on UTC.
     * For different timezones, use +/- hours on UTC.
     */
    UTCHourDiff?: number;

    /** Epoch unix timestamp for day to average */
    toTs?: number;
}

export interface TopExchangesOptions extends BaseOptions {
    /** From symbol */
    fsym: fromSymbol;

    /** To symbol */
    tsym: toSymbol;

    /* Max number of top exchanges */
    limit?: number;
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

    /** Object containing all currencies and their associated data */
    Data: {
        [currencySymbol: string]: Coin;
    };
}

export interface PriceResponse {
    /** Currency to value mapping */
    [currencySymbol: string]: number;
}

export interface PriceMultiResponse {
    /** Currency to currency mapping */
    [currencySymbol: string]: PriceResponse;
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

export type PriceHistoricalResponse = PriceMultiResponse;

export interface ConversionType {
    type: string; // tslint:disable-line:no-reserved-keywords
    conversionSymbol: string;
}

export interface DayAverageResponse {
    ConversionType: ConversionType;
    [currencySymbol: string]: string | ConversionType;
}

export interface RateLimitStats {
    Histo: number;
    News: number;
    Price: number;
}

export interface RateLimitStatsResponse {
    Message: string;
    CallsMade: RateLimitStats;
    CallsLeft: RateLimitStats;
}

export interface TopExchangesResponse {
    exchange: string;
    fromSymbol: string;
    toSymbol: string;
    volume24h: number;
    volume24hTo: number;
}
