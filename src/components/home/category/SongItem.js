import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
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

	listLove = () => {
		console.log(this.state.item);
		console.log(localStorage.getItem('@PlayList'));
	};
	addItemSongToLocalStorage = () => {
		var listPlay = localStorage.getItem('@PlayList');
		listPlay = listPlay ? listPlay.split(',') : [];
		listPlay.push(this.state.item.id);
		localStorage.setItem('@PlayList', listPlay);
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
						<HeartOutlined onClick={this.listLove} key="like" />,
						<CaretRightOutlined
							key="play"
							onClick={this.addItemSongToLocalStorage}
						/>,
						<Link
							to={{
								pathname: `/songdetail/${this.state.item.id}`,
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
						title={this.state.item.title}
						// description={this.state.item.genre}
					/>
				</Card>
			</div>
		);
	}
}
export default SongItem;