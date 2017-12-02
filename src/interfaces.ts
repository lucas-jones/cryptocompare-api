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
