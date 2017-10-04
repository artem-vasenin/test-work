export function input(text: string) {
	return {
		type: input,
		text: text
	};
}

export function search(text: string) {
	return {
		type: search,
		text: text
	};
}