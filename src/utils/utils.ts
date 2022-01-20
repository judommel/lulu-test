export const getFromLocalStorage = (item: string) => {
	const storedItem = localStorage.getItem(item);

	return storedItem ? JSON.parse(storedItem) : undefined;
};
