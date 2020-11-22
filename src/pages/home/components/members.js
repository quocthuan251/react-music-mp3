import React from 'react';
import PropTypes from 'prop-types';
import {
	Breadcrumb,
	Button,
	Icon,
	Input,
	Select,
	Table,
	Tabs,
	Tag,
	Tooltip,
	Switch,
} from 'antd';
import { connect } from 'react-redux';
import { actions as userActions, getUsers } from '../reducer';

class Members extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			x: 'test steste',
			y: 'cjel thuan',
		};
	}

	componentDidMount() {
		this.props.getListUser();
		console.log('test đismount');
	}

	render() {
		return (
			<div>
				<h1>{this.state.x}</h1>
				<h2>{this.state.y}</h2>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		getListUser: () => {
			dispatch(userActions.getList());
		},
	};
};
Members = connect(null, mapDispatchToProps)(Members);
export default Members;
