import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { message, Button, Space } from 'antd';
import './style/SongItemStyle.css';
import RunIconsMusicPlayer from './RunIconsMusicPlayer';
import { connect } from 'react-redux';
import { addPlayStream, playStream } from '../../../pages/home/actions';
import AudioPlayer from 'react-modular-audio-player';
const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };
const iconStyle = { width: 'fit-content' },
	rearrangedPlayer = [
		{
			className: 'tier-top',
			style: { padding: '5px 5px 5px 0' },
			innerComponents: [
				{
					type: 'play',
					style: iconStyle,
				},
			],
		},
	];
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
		var listPlay = localStorage.getItem('@PlayList');
		listPlay = listPlay ? listPlay.split(',') : [];
		listPlay.push(this.state.item.id);
		this.props.addPlayStream(this.state.item);
		// this.props.playStream();
		localStorage.setItem('@PlayList', listPlay);
		console.log(this.state.item.shareLinks);
	};
	addItemSongToLocalStorage = () => {
		message.success('Thêm bài hát vào danh sách yêu thích thành công');
		var listPlay = localStorage.getItem('@PlayList');
		listPlay = listPlay ? listPlay.split(',') : [];
		listPlay.push(this.state.item.id);
		this.props.addPlayStream(this.state.item);
		this.props.playStream();
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
							src={this.state.item.image.imgLocation}
						/>
					}
					actions={[
						<HeartOutlined
							onClick={this.addItemSongToLocalStorage}
							key="play"
						/>,
						// <CaretRightOutlined
						// 	key="play"
						// 	onClick={this.addItemSongToLocalStorage}
						// />,
						<div
							style={{ marginLeft: 25, marginBottom: 6 }}
							key="like"
						>
							<AudioPlayer
								audioFiles={[
									{
										src: `http://localhost:8081/downloadFile/${this.state.item.shareLinks}`,
										title: 'Rolling In The Deep',
										artist: 'Adele',
									},
								]}
								rearrange={rearrangedPlayer}
								playerWidth="10rem"
								iconSize="1.5rem"
								fontSize="1rem"
								sliderClass="invert-blue-grey"
							/>
						</div>,
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
const mapStateToProps = (state) => ({
	data: state.reducerHome.listRecommend,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	addPlayStream,
	playStream,
};
export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
// export default SongItem;
