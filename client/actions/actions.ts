export function search(text: string) {
	return {
		type: search,
		text: text
	};
}