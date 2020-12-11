// // import HomePage from './Home'
// // import { connect } from 'react-redux';
// import React from 'react';
// import { actions as homeActions, getSongs } from '../reducer';
// import { connect } from 'react-redux';
// import Recommend from '../category/Recommend';

// class CategoryContainer extends Component {
// 	render() {
// 		return <Recommend {...this.props} />;
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		result: getSongs(state).toJS(),
// 	};
// };
// const mapDispatchToProps = (dispatch, props) => {
// 	return {
// 		getListSong: () => {
// 			dispatch(homeActions.getList());
// 		},
// 		getListSongTest: () => {
// 			dispatch(homeActions.getListTest());
// 		},
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
