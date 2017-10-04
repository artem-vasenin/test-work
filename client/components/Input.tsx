import * as React from 'react';
import {connect} from 'react-redux';
import {input} from '../actions/actions';
import {IGlobalState} from '../models';

interface IProps {
	searchValue: string;
	input: (text: string) => void;
}

interface IState {
	searchValue: string;
}

class Input extends React.Component<IProps, IState> {
	constructor(props){
		super(props);
		this.state = {
			searchValue: ''
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			searchValue: newProps.searchValue
		});
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		
		this.props.input(value);
		
		this.setState({
			searchValue: value
		});
	}

	render() {
		return (
			<input 
				type='text'
				value={this.state.searchValue ? this.state.searchValue : ''}
				placeholder='Введите искомое имя'
				onChange={this.handleInputChange}
			/>
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
        input: (text: string) => {
            dispatch(input(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);