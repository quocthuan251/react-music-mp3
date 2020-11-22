// import HomePage from './Home'
import { connect } from 'react-redux';
import Members from '../components/members';
import { actions as userActions, getUsers } from '../reducer';

const mapStateToProps = (state) => ({
	// grounds: state.groundReducer.get('grounds').toJS(),
	user_info: state.users,
	users: getUsers(state).toJS(),
});
const mapDispatchToProps = (dispatch, props) => {
	return {
		getListUser: () => {
			dispatch(userActions.getList());
		},
	};
};

// export default test = connect(mapStateToProps, mapDispatchToProps)(Members);
