import * as React from 'react';
import { IGlobalState } from '../models';

interface IProps {

}

interface IState {
	searchValue: string;
}

export default class Item extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			searchValue: ''
		}
	}

	render() {
		return (
			<div>Item</div>
		);
	}
}