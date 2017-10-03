import * as React from 'react';
import { IGlobalState } from '../models';

interface IProps {

}

interface IState {
	searchValue: string;
}

export default class Input extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			searchValue: ''
		}
	}

	render() {
		return (
			<input type='text'/>
		);
	}
}