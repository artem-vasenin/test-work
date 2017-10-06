export interface IGlobalState {
	list: string[];
	findedItems: string[];
	searchValue: string;
	isLoading: boolean;
	isError: boolean;
}

export interface actions {
	type: string;
	payload: any;
}