import React from 'react';
import { Card } from 'antd';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import './style/SongItemStyle.css';
const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };

class SongItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.songItem ?? [],
		};
	}

	testLog = () => {
		console.log(this.state.item);
	};
	addItemSongToLocalStorage = () => {
		console.log(this.state.item.shareLinks);
	};
	render() {
		return (
			<div style={style}>
				<Card
					cover={
						<img
							alt="imageSong"
							className="song-item-image-detail-song"
							src={this.state.item.image}
						/>
					}
					actions={[
						<HeartOutlined onClick={this.testLog} key="like" />,
						<CaretRightOutlined
							key="play"
							onClick={this.addItemSongToLocalStorage}
						/>,
						<EllipsisOutlined key="ellipsis" />,
					]}
				>
					<Meta
						title={this.state.item.title}
						// description={this.state.item.genre}
					/>
				</Card>
			</div>
		);
	}
}
export default SongItem;
