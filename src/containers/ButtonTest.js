import React from 'react';
import { connect } from 'react-redux';
import { getNews, getListSong } from '../actions';
let ButtonTest = ({ getNews1, getListSong }) => (
	<button onClick={getNews1}>Press to see news</button>
);
const mapDispatchToProps = {
	getNews1: getNews,
	getListSong: getListSong,
};
ButtonTest = connect(null, mapDispatchToProps)(ButtonTest);
export default ButtonTest;
