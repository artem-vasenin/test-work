import * as React from 'react';
import { IGlobalState } from '../models';
import Item from './Item';

interface IProps {

}

interface IState {
	findedItems: string[];
	searchValue: string;
}

export default class List extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			findedItems: [],
			searchValue: ''
		}
	}

	render() {
		return (
			<Item />
		);
	}
}