import { useState } from "react";

import CryptoCompEntries from "./CryptoCompEntries";
import CryptoCompPaginator from "./CryptoCompPaginator";
import { ICryptoCompDataData } from "types/interfaces";
import {
	formatCurrency,
	fromUnixToDateTime,
	paginateArray,
} from "services/helpers";

import "./CryptoCompTable.scss";

interface ICryptoCompTableProps {
	data: ICryptoCompDataData[];
}

const CryptoCompTable: React.FC<ICryptoCompTableProps> = ({
	data,
}): JSX.Element => {
	const [pageSize, setPageSize] = useState<number>(20);
	const [pageNum, setPageNum] = useState<number>(1);

	const nextPage = (): void => {
		if (pageNum + 1 > Math.ceil(data.length / pageSize)) setPageNum(1);
		else setPageNum(pageNum + 1);
	};

	const prevPage = (): void => {
		if (pageNum - 1 < 1) setPageNum(Math.ceil(data.length / pageSize));
		else setPageNum(pageNum - 1);
	};

	const setPage = (page: number): void => {
		if (page < 1 || page > Math.ceil(data.length / pageSize)) return;
		setPageNum(page);
	};

	const sortData = (data: ICryptoCompDataData[]): ICryptoCompDataData[] => {
		return data.sort((a, b) => b.time - a.time);
	};

	return (
		<div className="cryptoCompTable">
			<table>
				<thead>
					<tr>
						<th>Time</th>
						<th>High</th>
						<th>Low</th>
						<th>Open</th>
						<th>Close</th>
						<th>Volume from</th>
						<th>Volume to</th>
					</tr>
				</thead>
				<tbody>
					{paginateArray(sortData(data), pageSize, pageNum).map((d, i) => (
						<tr key={i}>
							<td>{fromUnixToDateTime(d.time)}</td>
							<td>{formatCurrency(d.high)}</td>
							<td>{formatCurrency(d.low)}</td>
							<td>{formatCurrency(d.open)}</td>
							<td>{formatCurrency(d.close)}</td>
							<td>{formatCurrency(d.volumefrom)}</td>
							<td>{formatCurrency(d.volumeto)}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="cryptoCompTable-footer">
				<div className="cryptoCompTable-footer-left">
					<CryptoCompEntries
						entries={pageSize}
						setEntries={(val: number) => {
							setPageSize(val);
							setPageNum(1);
						}}
					/>
				</div>
				<div className="cryptoCompTable-footer-center">
					<CryptoCompPaginator
						page={pageNum}
						nextPage={nextPage}
						prevPage={prevPage}
						setPage={setPage}
					/>
				</div>
				<div className="cryptoCompTable-footer-right">
					{Math.ceil(data.length / pageSize)} pages
				</div>
			</div>
		</div>
	);
};

export default CryptoCompTable;
