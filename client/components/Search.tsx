import * as React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions/actions';
import {IGlobalState} from '../models';
import Input from './Input';

interface IProps {

}

interface IState {
	list: string[];
	findedItems: string[];
	searchValue: string;
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