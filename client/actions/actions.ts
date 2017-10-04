export function input(value: string) {
	return {
		type: input,
		value: value
	};
}

export function search(listItems: string[]) {
	return {
		type: search,
		listItems: listItems
	};
}