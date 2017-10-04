import * as React from 'react';
import {connect} from 'react-redux';
import { IGlobalState } from '../models';
import Search from './Search';
import List from './List';

interface IProps { 
}
interface IState {
	list: string[];
	searchValue: string;
	findedItems: string[];
}

export default class App extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			searchValue: '',
			findedItems: []
		}
	}

	render() {
		return (
			<div>
				<h1>Поиск пользователей</h1>
				<Search />
				<List />
			</div>
		);
	}
}