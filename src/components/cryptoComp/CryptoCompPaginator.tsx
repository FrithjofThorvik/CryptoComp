import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "./CryptoCompPaginator.scss";

interface ICryptoCompPaginatorProps {
	page: number;
	prevPage: () => void;
	nextPage: () => void;
	setPage: (p: number) => void;
}

const CryptoCompPaginator: React.FC<ICryptoCompPaginatorProps> = ({
	page,
	prevPage,
	nextPage,
	setPage,
}): JSX.Element => {
	return (
		<div className="paginator">
			<KeyboardArrowLeftIcon onClick={() => prevPage()} />
			<div className="paginator-page">{page}</div>
			<ChevronRightIcon onClick={() => nextPage()} />
		</div>
	);
};

export default CryptoCompPaginator;
