import { ICryptoCompHistoryTodayReq } from "types/interfaces";
import { CryptoCompFSym, CryptoCompTSym } from "types/enums";

export const defaultHistoryTodayParams: ICryptoCompHistoryTodayReq = {
	fsym: CryptoCompFSym.BTC,
	tsym: CryptoCompTSym.USD,
	limit: 100,
};
