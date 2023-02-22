import axios from "axios";
import { defaultHistoryTodayParams } from "data/cryptoComptDefaults";
import { ICryptoCompHistoryTodayReq, ICryptoCompRes } from "types/interfaces";

class ApiCryptoComp {
	private apiKey: string | undefined =
		process.env.REACT_APP_CRYPTO_COMPARE_API_KEY;
	private baseUrl: string = "https://min-api.cryptocompare.com";
	private historyEndPoint: string = "/data/v2/histoday";
	private defaultHistoryTodayParams: ICryptoCompHistoryTodayReq =
		defaultHistoryTodayParams;

	// Generates url for specified API endpoint, and optional param string
	private generateUrl = (endpoint: string, params?: string): string => {
		if (!this.apiKey)
			throw new Error("CryptoCompare API key missing in .env file");
		return `${this.baseUrl}${endpoint}${params ? params : ""}`;
	};

	// Generates param string from an object's key and value pairs
	private generateParamStringFromObject = (obj: Object): string => {
		let paramString: string = "";
		Object.entries(obj).forEach(([key, val], index) => {
			if (val && index === 0) paramString += `?${key}=${val}`;
			else if (val && index > 0) paramString += `&${key}=${val}`;
		});
		return paramString;
	};

	// Fetches history today from API with default param values if not provided
	public getHistoryToday = async (
		paramObj?: ICryptoCompHistoryTodayReq
	): Promise<ICryptoCompRes | null> => {
		const params: ICryptoCompHistoryTodayReq = paramObj
			? paramObj
			: this.defaultHistoryTodayParams;
		const paramsString: string = this.generateParamStringFromObject(params);

		const url: string = this.generateUrl(this.historyEndPoint, paramsString);

		try {
			let cryptoCompRes: ICryptoCompRes | null = null;
			const res = await axios.get(url);
			if (res.data) cryptoCompRes = res.data;
			return cryptoCompRes;
		} catch (err: any) {
			throw new Error(err.message);
		}
	};
}

export const apiCryptoComp = new ApiCryptoComp();
