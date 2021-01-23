import React from 'react';
import { List, Card } from 'antd';
import AudioPlayer from 'react-modular-audio-player';
import { getDataStreaming } from './service';
import axios from 'axios';
import './style/UserPlayList.css';
import { Link } from 'react-router-dom';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
const token = localStorage.getItem('@userToken');
const rearrangedPlayer = [
	{
		className: 'adele',
		innerComponents: [
			{
				type: 'play',
				style: {
					width: '100%',
					justifyContent: 'center',
					filter: 'invert(100%)',
					opacity: '0.4',
				},
			},
		],
	},
];
class UserPlayList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listSongLove: props.listpPlayList,
		};
	}
	componentDidMount() {
		console.log('kkkkkkkkkkkkkk');
		// console.log(this.getData());
		console.log(this.state.listSongLove);
		// this.getData('NangTho-HoangDung-6413381.mp3');
	}
	// async getData(endpoint) {
	// 	const res = await getDataStreaming('NangTho-HoangDung-6413381.mp3');
	// 	console.log('kkkkkkkkkkkkkk');
	// 	console.log(res);
	// 	return await res;
	// }
	render() {
		return (
			<div style={{ color: 'white' }}>
				<List
					grid={{ gutter: 16, column: 4 }}
					dataSource={this.state.listSongLove}
					renderItem={(item) => (
						<List.Item>
							<Card
								cover={
									<img
										alt="imageSong"
										className="song-item-image-detail-song"
										src={item.image.imgLocation}
									/>
								}
								actions={[
									<HeartOutlined key="like" />,
									<CaretRightOutlined key="play" />,
									<Link
										to={{
											pathname: `/songdetail/`,
											aboutProps: {
												item: this.state.item,
											},
										}}
									>
										<EllipsisOutlined key="ellipsis" />
									</Link>,
								]}
							>
								<Meta
									title={item.title}
									// description={this.state.item.genre}
								/>
							</Card>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}
export default UserPlayList;
