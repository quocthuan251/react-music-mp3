import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col } from 'antd';
import AudioPlayer from 'react-modular-audio-player';
import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
	RetweetOutlined,
	SwapOutlined,
} from '@ant-design/icons';
import TimeLineSong from './TimeLineSong';
import Timer from './Timer';
import './style/MiniPlayerStyle.css';
// const iconStyle = {
// 	fontSize: '20px',
// };
const audioFiles = [
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Cullah/Cullahmity/Cullah_-_04_-_Lonely_Spider.mp3',
		title: 'Hey Jude',
		artist: 'The Beatles',
	},
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Cullah/Cullahmity/Cullah_-_04_-_Lonely_Spider.mp3',
		title: 'Uptown Funk ft. Bruno Mars',
		artist: 'Mark Ronson',
	},
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Cullah/Cullahmity/Cullah_-_04_-_Lonely_Spider.mp3',
		title: 'Rolling In The Deep',
		artist: 'Adele',
	},
];
const iconStyle = { width: 'fit-content' },
	rearrangedPlayer = [
		{
			className: 'tier-top',
			style: { padding: '5px 0' },
			innerComponents: [
				{
					type: 'rewind',
					style: iconStyle,
				},
				{
					type: 'play',
					style: iconStyle,
				},
				{
					type: 'forward',
					style: iconStyle,
				},
				{
					type: 'loop',
					style: { width: '12.5%' },
				},
				{
					type: 'volume',
				},
			],
		},
		{
			className: 'tier-bottom',
			innerComponents: [
				{
					type: 'time',
					style: iconStyle,
				},
				{
					type: 'seek',
				},
			],
		},
	];
class MiniPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlay: false,
			timeEnd: '03:10',
		};
		this.handlePausePlayClick = this.handlePausePlayClick.bind(this);
	}
	handlePausePlayClick() {
		this.setState({
			isPlay: !this.state.isPlay,
		});
	}
	render() {
		return (
			<div
				style={{
					color: 'white',
					// flex: 1,
					// flexDirection: 'row',
					// alignContent: 'center',
					// alignItems: 'center',
					// padding: 20,
				}}
			>
				<div>
					<AudioPlayer
						audioFiles={audioFiles}
						rearrange={rearrangedPlayer}
						playerWidth="28rem"
						iconSize="1.5rem"
						fontSize="1rem"
						sliderClass="my-slider"
					/>
				</div>
			</div>
		);
	}
}
export default MiniPlayer;
