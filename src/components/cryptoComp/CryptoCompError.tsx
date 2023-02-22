import "./CryptoCompError.scss";

interface ICryptoCompErrorProps {
	message: string;
}

const CryptoCompError: React.FC<ICryptoCompErrorProps> = ({
	message,
}): JSX.Element => {
	return (
		<div className="cryptoCompError">
			<h2>Error</h2>
			<p>{message}</p>
		</div>
	);
};

export default CryptoCompError;
