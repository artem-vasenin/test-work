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

export function getList(value: string) {
	return dispatch => {
		dispatch({type: 'getList_BEGIN', value: value, isLoading: true});
		setTimeout(() => {
			console.log('tracks!!!');
			dispatch({type: 'getList_SUCCESS', value: value, isLoading: false});
		}, 2000);
	}
}