import {IGlobalState} from '../models';

const initialState = {
    list: [],
    findedItems: [],
    searchValue: '',
    isLoading: false,
    isError: false
  };

export default function reducer(state: IGlobalState = initialState, action: any) {
	let newState = {...state};

	switch (action.type) {
		case 'INPUT': newState.searchValue = action.value; break;
		case 'SEARCH': 
			newState.findedItems = newState.list.filter((element) => {
				return action.value !== '' && element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
			});
    break;
    case 'GETLIST_BEGIN':
      newState.isLoading = true;
      newState.isError = false;
    break;
    case 'GETLIST_ERROR':
      newState.isError = true;
      newState.isLoading = false;
      break;
      case 'GETLIST_SUCCESS': 
			newState.findedItems = action.list.filter((element) => {
        return action.payload !== '' && element.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0;
      });
      if(newState.list.length === 0) {
        newState.list = action.list;
      }
      newState.isLoading = false;
      newState.isError = false;
      newState.searchValue = action.searchValue;
		break;
		default: return state;
	}

	return newState;
}