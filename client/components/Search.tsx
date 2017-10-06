import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {search} from '../actions/actions';
import {IGlobalState, actions} from '../models';
import Input from './Input';

interface IProps {
	searchValue: string;
	search: (value: string) => void;
}

interface IState {
	searchValue: string;
	findedItems: string[];
	list: string[];
}

class Search extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			findedItems: [],
			searchValue: this.props.searchValue || ''
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			findedItems: newProps.findedItems,
			searchValue: newProps.searchValue
		});
	}

	render() {
		return (
			<form className='search'>
				<Input />
			</form>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        searchValue: state.searchValue
    };
}
const mapDispatchToProps = (dispatch: Dispatch<actions>) => {
    return {
        search: (value: string) => {
            dispatch(search(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);