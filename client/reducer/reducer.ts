import { IGlobalState } from '../models';

export default function reducer(state: IGlobalState, action: any) {
	let newState = {...state};

	switch (action.type) {
		case 'input': newState.searchValue = action.value; break;
		case 'search': newState.findedItems = action.listItems; break;
		default: return state;
	}
	
	return newState;
}