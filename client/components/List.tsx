import * as React from 'react';
import {connect} from 'react-redux';
import {IGlobalState} from '../models';
import Item from './Item';

interface IProps {
	searchValue: string;
	findedItems: string[];
	isLoading: boolean;
	isError: boolean;
	list: string[];
}

interface IState {
	searchValue: string;
	findedItems: string[];
	list: string[];
	isError: boolean;
	isLoading: boolean;
}

class List extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: this.props.searchValue,
			findedItems: this.props.findedItems,
			list: this.props.list,
			isError: this.props.isError,
			isLoading: this.props.isLoading
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			searchValue: newProps.searchValue,
			findedItems: newProps.findedItems,
			list: newProps.list,
			isError: newProps.isError,
			isLoading: newProps.isLoading
		});
	}

	render() {
		return (
			<div className={`block-items${
					!this.props.findedItems.length && 
					!this.props.isLoading && 
					!this.props.isError ? 
					' block-items--empty' : 
					''
				}`}>
				{this.props.isLoading && <div className='load'>загрузка...</div>}
				{this.props.isError && <div className='error'>Ошибка!</div>}
					<ul className='list'>
						{
							!this.props.isLoading && this.props.findedItems.map((item: string, index: number) => (
								<Item key={index} item={item} /> 
							))
						}
					</ul>
			</div>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
    return {
		findedItems: state.findedItems,
		isLoading: state.isLoading,
		isError: state.isError,
		list: state.list
    };
}

export default connect(mapStateToProps)(List);