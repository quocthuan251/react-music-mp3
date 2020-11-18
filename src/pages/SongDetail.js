import React, { useState, useRef } from 'react';
import TimeSlider from 'react-input-slider';
import BoxContent from '../components/songDetail/BoxContent';
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
			<BoxContent />
		</div>
	);
};

export default SongDetail;
