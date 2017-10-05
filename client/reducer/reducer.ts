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
		case 'input': newState.searchValue = action.value; break;
		case 'search': 
			newState.findedItems = newState.list.filter((element) => {
				return action.value !== '' && element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
			});
    break;
    case 'getList_BEGIN':
      newState.isLoading = true;
      newState.isError = false;
    break;
    case 'getList_ERROR':
      newState.isError = true;
      newState.isLoading = false;
    break;
    case 'getList_SUCCESS': 
			newState.findedItems = action.list.filter((element) => {
				return action.value !== '' && element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
      });
      if(newState.list.length == 0) {
        newState.list = action.list;
      }
      newState.isLoading = false;
		break;
		default: return state;
	}

	return newState;
}