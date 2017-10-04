export function input(value: string) {
	return {
		type: 'input',
		value: value
	};
}

export function search(value: string) {
	return {
		type: 'search',
		value: value
	};
}