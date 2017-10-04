import * as React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions/actions';
import {IGlobalState} from '../models';
import Input from './Input';

interface IProps {
	searchValue: string;
	search: (text: string) => void;
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
			searchValue: ''
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
			<form>
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
const mapDispatchToProps = (dispatch: any) => {
    return {
        search: (text: string) => {
            dispatch(search(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);