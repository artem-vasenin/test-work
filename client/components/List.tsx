import * as React from 'react';
import {connect} from 'react-redux';
import {IGlobalState} from '../models';
import Item from './Item';

interface IProps {
	searchValue: string;
	findedItems: string[];
	isLoading: boolean;
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
		this.setState({
			searchValue: newProps.searchValue,
			findedItems: newProps.findedItems
		});
	}

	render() {
		return (
			<div className={`block-items${!this.props.findedItems.length && !this.props.isLoading ? ' block-items--empty' : ''}`}>
				{this.props.isLoading && <div className='load'>загрузка...</div>}
					<ul className='list'>
						{
						!this.props.isLoading && this.props.findedItems.map((item: string, index: number) => (

							<Item key={index} item={item} />
						))}
					</ul>
			</div>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
    return {
		findedItems: state.findedItems,
		isLoading: state.isLoading
    };
}

export default connect(mapStateToProps)(List);