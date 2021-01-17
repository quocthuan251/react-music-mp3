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
	render() {
		const list = this.props.data ?? [];
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
	data: state.reducerHome.listRecommend,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	getListRecomendSong,
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
