import * as React from 'react';
import {connect} from 'react-redux';
import {IGlobalState} from '../models';
import Item from './Item';

interface IProps {
	searchValue: string;
	findedItems: string[];
}

interface IState {
	searchValue: string;
	findedItems: string[];
}

class List extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: this.props.searchValue,
			findedItems: this.props.findedItems
		}
	}

	componentWillReceiveProps(newProps) {
		// const newState: IGlobalState = {...this.props.state};
		this.setState({
			searchValue: newProps.searchValue,
			findedItems: newProps.findedItems
		});
	}

	render() {
		return (
			<div>
			{this.props.findedItems.map((item: string, index: number) => (
				<Item key={index} item={item} />
			))}
			</div>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
    return {
		findedItems: state.findedItems
    };
}

export default connect(mapStateToProps)(List);