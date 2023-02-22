import React from "react";

import "./Button.scss";

interface IButtonProps {
	text: string;
	isLoading?: boolean;
	onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
	text,
	isLoading,
	onClick,
}): JSX.Element => {
	return (
		<button className="button" onClick={() => onClick()}>
			{isLoading ? <p>Fetching data...</p> : <p>{text}</p>}
		</button>
	);
};

export default Button;
