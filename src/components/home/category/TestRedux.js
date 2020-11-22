import React from 'react';
import { connect } from 'react-redux';
import { actions as homeActions, getSongs } from '../reducer';
const imgStyle = {
	hight: 'auto',
	width: '80%',
	border: '4px solid RebeccaPurple ',
	borderRadius: '5%',
};
const articleStyle = {
	width: '50%',
	margin: '0 auto',
	color: 'olive',
};
let NewsItem = ({ article, getListSong }) => (
	<div>
		test
		<button onClick={getListSong}>Press to see news</button>
		<div>{article}</div>
	</div>
);
const mapStateToProps = (state) => ({
	articles: state.user,
	// article: getSongs(state).toJS(),
});
const mapDispatchToProps = (dispatch, props) => {
	return {
		getListSong: () => {
			dispatch(homeActions.getList());
		},
		getListSongTest: () => {
			dispatch(homeActions.getListTest());
		},
	};
};
NewsItem = connect(mapStateToProps, mapDispatchToProps)(NewsItem);
export default NewsItem;
