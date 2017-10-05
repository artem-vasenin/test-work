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

		fetch('http://cyties.test:8080/', {
			method: 'post',  
			headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
		})
		.then(function(responce: any){
			return responce.json(); 
		})  
		.then(function (data) {
			dispatch({type: 'getList_SUCCESS', value: value, isLoading: false, isError: false, list: data}); 
		})  
		.catch(function (error) {   
			dispatch({type: 'getList_ERROR', value: error, isError: true});
		});
	}
}