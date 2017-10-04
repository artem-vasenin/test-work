import * as React from 'react';
import {connect} from 'react-redux';
import { IGlobalState } from '../models';
import Search from './Search';
import List from './List';

interface IProps { 
	list: string[];
	searchValue: string;
	findedItems: string[];
}
interface IState { }

class App extends React.Component<IProps, IState> {
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

const mapStateToProps = (state: IGlobalState) => {
    return {
		list: state.list,
		searchValue: state.searchValue,
		findedItems: state.findedItems
    };
}

export default connect(mapStateToProps)(App);