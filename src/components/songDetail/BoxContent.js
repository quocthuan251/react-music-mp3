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
import './style/BoxContent.css';
import TetImg from '../../images/vinile.png';
import SonTung from '../../images/sontung.png';
// import audios from '../../audios';
import { connect } from 'react-redux';
import { deletePlayStream } from '../../pages/home/actions';
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

	const data = [
		{
			title: 'Ant Design Title 1',
			singer: 'Thịnh Suy',
		},
		{
			title: 'Ant Design Title 2',
			singer: 'Min',
		},
		{
			title: 'Ant Design Title 3',
			singer: 'Kay Trần',
		},
		{
			title: 'Ant Design Title 4',
			singer: 'Sơn Tùng MTP',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
		{
			title: 'Ant Design Title 5',
			singer: 'Hương Tràm',
		},
	];

	return (
		<div>
			<Row>
				<Col
					span={8}
					style={{
						background: '#333',
						maxHeight: '400px',
						marginLeft: '2rem',
						borderRadius: '5px',
					}}
				>
					<img
						className="Song-Thumbnail"
						src={props.listStream[audioIndex].image.imgLocation}
						alt="tet"
					/>
					<h2 className="Song-Title">
						{props.listStream[audioIndex].title}
					</h2>
					<p className="Singer">
						{props.listStream[audioIndex].album.name}
					</p>
					<div className="Control-Button-Group">
						<div
							className="Prev-Button"
							onClick={() =>
								setAudioIndex(
									(audioIndex - 1) % props.listStream.length
								)
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
				<Col span={15}>
					<div>
						<h2> NGHE TIẾP</h2>
						<List
							itemLayout="horizontal"
							dataSource={props.listStream}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										style={{
											textAlign: 'initial',
											marginLeft: '20%',
										}}
										avatar={
											<img
												style={{
													height: '100px',
												}}
												src={item.image.imgLocation}
											/>
										}
										title={
											<div style={{ padding: 30 }}>
												<a href="#">{item.title}</a>
												<br />
												<span>{item.album.name}</span>
											</div>
										}
										// description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
};
const mapStateToProps = (state) => ({
	listStream: state.reducerHome.listStream,
	loading: state.reducerHome.loading,
	error: state.reducerHome.error,
});
const mapDispatchToProps = {
	deletePlayStream,
};
export default connect(mapStateToProps, mapDispatchToProps)(BoxContent);
// export default BoxContent;
