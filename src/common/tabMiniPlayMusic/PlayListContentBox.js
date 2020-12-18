import React from 'react';
import { List, message, Avatar, Spin } from 'antd';
import { Button, Image, Tooltip } from 'antd';
import { Row, Col, Statistic } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
// import reqwest from 'reqwest';
import './style/PlayListContentBoxStyle.css';
// import InfiniteScroll from 'react-infinite-scroller';

class PlayListContentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					title: 'Ant Design Title 1',
				},
				{ id: 2, title: 'Ant Design Title 2' },
				{ id: 3, title: 'Ant Design Title 3' },
				{ id: 4, title: 'Ant Design Title 4' },
			],
			loading: false,
			hasMore: true,
		};
	}
	testclick = () => {
		console.log('hello');
	};
	deleteSong = (id) => {
		console.log('delete sucess');
		console.log(id);
		let filteredArraySong = this.state.data.filter(
			(item) => item.id !== id
		);
		this.setState({ data: filteredArraySong });
	};
	render() {
		const loader = <div className="loader">Loading ...</div>;
		return (
			<div>
				<List
					className="demo-loadmore-list"
					itemLayout="horizontal"
					dataSource={this.state.data}
					renderItem={(item) => (
						<List.Item key={item.id} style={{ color: 'white' }}>
							<div
								onClick={this.testclick}
								className="play-list-song-detail-box"
							>
								<Row className="play-list-group">
									<Col span={6}>
										<Avatar
											className="play-list-image-song"
											src="https://i.scdn.co/image/ab67616d000048518bab2a8ce2c392fac6e14739"
										/>
									</Col>
									<Col span={18}>
										<div className="play-list-miniDetailSongBox">
											<div className="play-list-miniNameSong">
												Stay Alive
											</div>
											<div className="play-list-miniAuthorSong">
												Quốc Thuận
											</div>
										</div>
									</Col>
								</Row>
							</div>
							<div>
								<Tooltip
									title="xóa"
									onClick={() => this.deleteSong(item.id)}
								>
									<DeleteOutlined className="play-list-button-delete" />
								</Tooltip>
							</div>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}
export default PlayListContentBox;
