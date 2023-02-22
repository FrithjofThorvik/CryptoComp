import "./CryptoCompEntries.scss";

interface ICryptoCompEntriesProps {
	entries: number;
	setEntries: (val: number) => void;
}

const CryptoCompEntries: React.FC<ICryptoCompEntriesProps> = ({
	entries,
	setEntries,
}): JSX.Element => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (Number.isNaN(Number(e.target.value))) return;
		setEntries(Number(e.target.value));
	};

	return (
		<div className="cryptoCompEntries">
			<select
				name="cryptoCompEntriesSel"
				id="cryptoCompEntriesSel"
				value={entries}
				onChange={(e) => handleChange(e)}
			>
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={30}>30</option>
			</select>
		</div>
	);
};

export default CryptoCompEntries;
