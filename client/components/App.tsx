import * as React from 'react';
import {connect} from 'react-redux';
import { IGlobalState } from '../models';
import Search from './Search';
import List from './List';

export default class App extends React.Component<void, void> {
	render() {
		return (
			<div className='app'>
				<h1 className='heading'>Поиск города</h1>
				<Search />
				<List />
			</div>
		);
	}
}