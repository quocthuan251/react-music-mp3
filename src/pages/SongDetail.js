import React, { useState, useRef } from 'react';
import TimeSlider from 'react-input-slider';

import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
} from '@ant-design/icons';

import './style/SongDetailStyle.css';
import TetImg from '../images/vinile.png';
import audios from '../audios';
const iconStyle = {
	fontSize: '26px',
};

const SongDetail = () => {
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(false);

	const handleLoadedData = () => {
		setDuration(audioRef.current.duration);
		if (isPlay) audioRef.current.play();
	};

	const handlePausePlayClick = () => {
		if (isPlay) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setPlay(!isPlay);
	};

	const handleTimeSliderChange = ({ x }) => {
		audioRef.current.currentTime = x;
		setCurrentTime(x);

		if (!isPlay) {
			setPlay(true);
			audioRef.current.play();
		}
	};

	return (
		<div className="SongDetail">
			<img className="Song-Thumbnail" src={TetImg} alt="tet" />
			<h2 className="Song-Title">{audios[audioIndex].title}</h2>
			<p className="Singer">{audios[audioIndex].artist}</p>
			<div className="Control-Button-Group">
				<div
					className="Prev-Button"
					onClick={() =>
						setAudioIndex((audioIndex - 1) % audios.length)
					}
				>
					<BackwardOutlined style={iconStyle} />
				</div>
				<div
					className="Pause-Play-Button"
					onClick={handlePausePlayClick}
				>
					{isPlay ? (
						// <PauseIcon
						// 	styles={{
						// 		height: 22,
						// 	}}
						// />
						<PauseOutlined style={iconStyle} />
					) : (
						<PlayCircleOutlined style={iconStyle} />
					)}
				</div>
				<div
					className="Next-Button"
					onClick={() =>
						setAudioIndex((audioIndex + 1) % audios.length)
					}
				>
					<ForwardOutlined style={iconStyle} />
				</div>
			</div>
			<TimeSlider
				axis="x"
				xmax={duration}
				x={currentTime}
				onChange={handleTimeSliderChange}
				styles={{
					track: {
						backgroundColor: '#e3e3e3',
						height: '10px',
					},
					active: {
						backgroundColor: '#333',
						height: '2px',
					},
					thumb: {
						marginTop: '-3px',
						width: '8px',
						height: '8px',
						backgroundColor: '#333',
						borderRadius: 0,
					},
				}}
			/>
			<audio
				ref={audioRef}
				src={audios[audioIndex].src}
				onLoadedData={handleLoadedData}
				onTimeUpdate={() =>
					setCurrentTime(audioRef.current.currentTime)
				}
				onEnded={() => setPlay(false)}
			/>
		</div>
	);
};

export default SongDetail;
