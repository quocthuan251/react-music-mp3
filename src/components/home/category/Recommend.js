import React from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import { getListRecomendSong } from '../../../pages/home/actions';
import SongItem from './SongItem';

class Recommend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getListRecomendSong();
	}
	// test1 = () => {
	// 	const datatest = this.props.data.items;
	// 	const resulttest = [];
	// 	var x;
	// 	for (x of datatest) {
	// 		var obj = {
	// 			id: x.id,
	// 			title: x.title,
	// 			download_permit: true,
	// 			genre: 'nhạc trẻ',
	// 			path: 'https://www.youtube.com/watch?v=bweXYSOMCkk',
	// 			image: x.thumbnail_medium,
	// 			album_id: x.raw_id,
	// 			artist_id: x.created_at,
	// 		};
	// 		resulttest.push(obj);
	// 	}
	// 	console.log('haha');
	// 	localStorage.setItem('myValueInLocalStorage', resulttest);
	// 	console.log(resulttest);
	// };
	render() {
		const list = this.props.data.item ?? [];
		return (
			<div>
				<List
					grid={{ gutter: 16, column: 5 }}
					dataSource={list}
					renderItem={(item) => (
						<List.Item>
							<SongItem songItem={item}></SongItem>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	data: state.reducerHome.data,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	getListRecomendSong,
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
