import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, List, Avatar, Icon } from 'antd';
import TimeSlider from 'react-input-slider';
import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
	PlaySquareOutlined,
} from '@ant-design/icons';
import './style/BoxContent2.css';
import TetImg from '../../images/vinile.png';
import SonTung from '../../images/sontung.png';
// import audios from '../../audios';
import { connect } from 'react-redux';
import { playStream } from '../../pages/home/actions';
const iconStyle = {
	fontSize: '26px',
};

const BoxContent = (props) => {
	const audioRef = useRef();
	const [audioIndex, setAudioIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlay, setPlay] = useState(false);
	// We declare the state as shown below

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
		<div style={{ marginLeft: 150 }}>
			<Row>
				<Col
					span={8}
					style={
						{
							// // background: '#333',
							// maxHeight: '200px',
							// marginLeft: '2rem',
							// borderRadius: '5px',
						}
					}
				>
					{/* <h2 className="Song-Title">
						{props.listStream[audioIndex].title}
					</h2> */}
					{/* <p className="Singer">
						{props.listStream[audioIndex].album.name}
					</p> */}
					<div className="Control-Button-Group2">
						<div
							className="Prev-Button2"
							onClick={() =>
								setAudioIndex(
									(audioIndex - 1) % props.listStream.length
								)
							}
						>
							<BackwardOutlined style={iconStyle} />
						</div>
						<div
							className="Pause-Play-Button2"
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
							className="Next-Button2"
							onClick={() =>
								setAudioIndex(
									(audioIndex + 1) % props.listStream.length
								)
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
								backgroundColor: '#b3b3b3',
								height: '10px',
							},
							thumb: {
								marginTop: '-3px',
								width: '8px',
								height: '13px',
								backgroundColor: '#333',
								borderRadius: 0,
							},
						}}
					/>
					<audio
						ref={audioRef}
						// src={this.props.listStream[audioIndex].src}
						src={`http://localhost:8081/downloadFile/${props.listStream[audioIndex].shareLinks}`}
						onLoadedData={handleLoadedData}
						onTimeUpdate={() =>
							setCurrentTime(audioRef.current.currentTime)
						}
						onEnded={() => setPlay(false)}
					/>
				</Col>
			</Row>
		</div>
	);
};
const mapStateToProps = (state) => ({
	listStream: state.reducerHome.listStream,
	isplayReducer: state.reducerHome.isPlay,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	playStream,
};
export default connect(mapStateToProps, mapDispatchToProps)(BoxContent);
// export default BoxContent;
