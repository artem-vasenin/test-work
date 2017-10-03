import * as React from 'react';
import { IGlobalState } from '../models';
import Search from './Search';
import List from './List';

interface IProps {

}

interface IState {

}

export default class App extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			findedItems: [],
			searchValue: ''
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