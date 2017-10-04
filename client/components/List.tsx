import * as React from 'react';
import {connect} from 'react-redux';
import {IGlobalState} from '../models';
import Item from './Item';

interface IProps {
	searchValue: string;
}

interface IState {
	findedItems: string[];
	searchValue: string;
}

class List extends React.Component<IProps, IState> {
	constructor(props) {
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

const mapStateToProps = (state: IGlobalState) => {
    return {
		searchValue: state.searchValue
    };
}

export default connect(mapStateToProps)(List);