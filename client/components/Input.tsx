import * as React from 'react';
import {connect} from 'react-redux';
import {input, search, getList} from '../actions/actions';
import {IGlobalState} from '../models';

interface IProps {
	searchValue: string;
	onChange: (text: string) => void;
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
		console.log(newProps);
		this.setState({
			searchValue: newProps.searchValue
		});
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		this.setState({searchValue: value});
		this.props.onChange(value);
	}

	render() {
		return (
			<input 
				className='search__field'
				type='text'
				value={this.state.searchValue ? this.state.searchValue : ''}
				placeholder='Введите искомое имя'
				onChange={this.handleInputChange}
				autoFocus
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
        onChange: (value: string) => {
            dispatch(getList(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);