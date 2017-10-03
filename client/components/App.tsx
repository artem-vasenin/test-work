import * as React from 'react';
import { IGlobalState } from '../models';

interface IProps {

}

interface IState {

}

export default class App extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			searchValue: ''
		}
	}

	render() {
		return (
			<div>
				<h1>Проверка</h1>
			</div>
		);
	}
}