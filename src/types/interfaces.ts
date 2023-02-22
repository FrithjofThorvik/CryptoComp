import { CryptoCompFSym, CryptoCompTSym } from "./enums";

export interface ICryptoCompDataData {
	low: number; // The lowest price of the requested pair during this period of time.
	high: number; // The highest price of the requested pair during this period of time.
	time: number; // The unix timestamp for the start of this data point.
	open: number; // The price of the requested pair at the start of this period of time.
	close: number; // The price of the requested pair at the end of this period of time.
	volumeto: number; // The total amount of the quote currency traded into the base currency during this period of time (in units of the quote currency).
	volumefrom: number; // The total amount of the base currency traded into the quote currency during this period of time (in units of the base currency).
	conversionType: string; // Whether a conversion had to be used where a direct market wasn’t available and which type of conversion was used. You can learn more about conversion types here: https://blog.cryptocompare.com/historical-data-api-update-4ee44c549a8f
	conversionSymbol: string; // Which currency was used for the conversion path (BTC or ETH).
}

export interface ICryptoCompRes {
	Response: string; // This indicates whether the call succeeded or resulted in an error.
	Message: string; // This returns details about any errors that may have occurred.
	HasWarning: boolean; // This tells the user about any unusual issues that did not cause a full error.
	Type: number; // Message type 100 indicates success, anything else indicates an error.
	Data: {
		Aggregated: boolean; // Whether or not each data point represents an aggregation of multiple days.
		TimeFrom: number; // The unix timestamp for the start of this data set.
		TimeTo: number; // The unix timestamp for the end of this data set.
		Data: ICryptoCompDataData[];
	};
}

export interface ICryptoCompHistoryTodayReq {
	fsym: CryptoCompFSym; // Crypto currency (BTC)
	tsym: CryptoCompTSym; // Currency type (USD)
	limit?: number; // Day limit
	toTs?: number; // Returns historical data before that timestamp
}
