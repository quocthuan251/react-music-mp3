import React from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import { getListMix } from '../../../pages/home/actions';
import SongItem from './SongItem';

class MixListSong extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getListMix();
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
	data: state.reducerHome.listMix,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	getListMix,
};
export default connect(mapStateToProps, mapDispatchToProps)(MixListSong);
