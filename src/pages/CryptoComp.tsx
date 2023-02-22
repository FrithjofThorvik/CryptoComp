import { useState } from "react";

import Button from "components/Button";
import CryptoCompTable from "components/cryptoComp/CryptoCompTable";
import CryptoCompError from "components/cryptoComp/CryptoCompError";
import { apiCryptoComp } from "services/apiCryptoComp";
import { ICryptoCompDataData } from "types/interfaces";
import { defaultHistoryTodayParams } from "data/cryptoComptDefaults";

import "./CryptoComp.scss";

interface ICryptoCompProps {}

const CryptoComp: React.FC<ICryptoCompProps> = (): JSX.Element => {
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [cryptoCompDataError, setCryptoCompDataError] = useState<string>("");
	const [cryptoCompData, setCryptoCompData] = useState<ICryptoCompDataData[]>(
		[]
	);

	// Fetches crypto compare history with the default day limit
	// History days can be extended with the extendHistory flag
	const fetchCryptoCompHistory = async (extendHistory?: boolean) => {
		setIsFetching(true);
		try {
			const data =
				extendHistory && cryptoCompData.length > 0
					? await apiCryptoComp.getHistoryToday({
							...defaultHistoryTodayParams,
							toTs: cryptoCompData[cryptoCompData.length - 1].time,
					  })
					: await apiCryptoComp.getHistoryToday();

			if (data) {
				if (data.Message) setCryptoCompDataError(data.Message);
				else {
					extendHistory
						? setCryptoCompData((old) => old.concat(data.Data.Data))
						: setCryptoCompData(data.Data.Data);
					setCryptoCompDataError("");
				}
			}
		} catch (err: any) {
			setCryptoCompDataError(
				err.message ? err.message : "Something went wrong..."
			);
		}
		setIsFetching(false);
	};

	return (
		<div className="cryptoComp">
			<h1>CryptoComp</h1>

			{cryptoCompData.length > 0 ? (
				<CryptoCompTable data={cryptoCompData} />
			) : (
				<Button
					text="Fetch BTC History"
					onClick={fetchCryptoCompHistory}
					isLoading={isFetching}
				/>
			)}
			{cryptoCompDataError && <CryptoCompError message={cryptoCompDataError} />}
		</div>
	);
};

export default CryptoComp;
