import {Dispatch} from 'redux';

export function input(value: string) {
	return {
		type: 'INPUT',
		value: value
	};
}

export function search(value: string) {
	return {
		type: 'SEARCH',
		value: value
	};
}

export function getList(value: string) {
	return dispatch => {
		dispatch({type: 'GETLIST_BEGIN', value: value, isLoading: true, isError: false});

		fetch('http://cyties.test:8080/', {
			method: 'post',  
			headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
		})
		.then(function(responce: any){
			return responce.json(); 
		})  
		.then(function (data) {
			setTimeout(() => {
				dispatch({type: 'GETLIST_SUCCESS', value: value, isLoading: false, isError: false, list: data}); 
			}, 250);
		})  
		.catch(function (error) {   
			dispatch({type: 'GETLIST_ERROR', value: error, isError: true, isLoading: false});
		});
	}
}

export function getListAsyncAwait(value: string) {
	return async (dispatch: any) => {
		try {
			const responce = await fetch('http://cyties.test:8080/', {
				method: 'post',  
				headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
			});

			const data = await responce.json();
			
			dispatch({
				type: 'GETLIST_SUCCESS', 
				value: value, 
				isLoading: false, 
				isError: false, 
				list: data,
				searchValue: value
			}); 

		} catch(e) {
			dispatch({
				type: 'GETLIST_ERROR', 
				value: e, 
				isError: true, 
				isLoading: false
			});
		}
	}
}