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

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://cyties.test:8080/', false);
		xhr.send();
		if (xhr.status != 200) {
			dispatch({type: 'getList_ERROR', value: 'нет доступа к серверу', isError: true});	
		} else {
			const remoteValue = JSON.parse(xhr.responseText);
			setTimeout(() => {
				dispatch({type: 'getList_SUCCESS', value: value, isLoading: false, isError: false, list: remoteValue});
			}, 500);
		}
	}
}