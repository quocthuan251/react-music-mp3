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
import audios from '../../audios';
const iconStyle = {
	fontSize: '26px',
};

const BoxContent = () => {
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
						src={audios[audioIndex].src}
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
							dataSource={data}
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
												src={SonTung}
											/>
										}
										title={
											<div>
												<a href="#">{item.title}</a>
												<br />
												<span>{item.singer}</span>
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

export default BoxContent;
