import {Dispatch} from 'redux';
import {actions} from '../models';

export function input(value: string) {
	return {
		type: 'INPUT',
		payload: value
	};
}

export function search(value: string) {
	return {
		type: 'SEARCH',
		payload: value
	};
}

export function getList(value: string) {
	return (dispatch: Dispatch<actions>) => {
		dispatch({type: 'GETLIST_BEGIN', payload: value});

		fetch('http://cyties.test:8080/', {
			method: 'post',  
			headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
		})
		.then(function(responce: any){
			return responce.json(); 
		})  
		.then(function (data) {
			setTimeout(() => {
				dispatch({type: 'GETLIST_SUCCESS', value: value, list: data}); 
			}, 250);
		})  
		.catch(function (error) {   
			dispatch({type: 'GETLIST_ERROR', payload: error});
		});
	}
}

export function getListAsyncAwait(value: string) {
	return async (dispatch: Dispatch<actions>) => {
		try {
			const responce = await fetch('http://cyties.test:8080/', {
				method: 'post',  
				headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
			});

			const data = await responce.json();
			
			dispatch({
				type: 'GETLIST_SUCCESS', 
				value: value,
				list: data,
				searchValue: value
			}); 

		} catch(e) {
			dispatch({
				type: 'GETLIST_ERROR', 
				payload: e
			});
		}
	}
}