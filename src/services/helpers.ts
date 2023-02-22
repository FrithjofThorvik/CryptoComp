export const fromUnixToDateTime = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);
	return date.toLocaleDateString();
};

export const formatCurrency = (
	value: number,
	currency: string = "USD"
): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	});
	return formatter.format(value);
};

export const paginateArray = (
	arr: any[],
	pageSize: number,
	pageNum: number
) => {
	return arr.slice((pageNum - 1) * pageSize, pageNum * pageSize);
};
