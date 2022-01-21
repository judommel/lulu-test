export const getFromLocalStorage = (item: string, shouldParse = true) => {
	const storedItem = localStorage.getItem(item);

	return storedItem
		? shouldParse
			? JSON.parse(storedItem)
			: storedItem
		: undefined;
};
