import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col } from 'antd';
import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
	RetweetOutlined,
	SwapOutlined,
} from '@ant-design/icons';
import TimeLineSong from './TimeLineSong';
import './style/MiniPlayerStyle.css';
const iconStyle = {
	fontSize: '20px',
};
class MiniPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlay: false,
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
			<div>
				<Row>
					<Col span={24}>
						<div
							className="Control-Button-Group"
							style={{ marginBottom: 5 }}
						>
							<div className="retweet-Button">
								<RetweetOutlined style={iconStyle} />
							</div>
							<div className="Prev-Button">
								<BackwardOutlined style={iconStyle} />
							</div>
							<div
								className="Pause-Play-Button"
								onClick={this.handlePausePlayClick}
							>
								{this.state.isPlay ? (
									<PauseOutlined style={iconStyle} />
								) : (
									<PlayCircleOutlined style={iconStyle} />
								)}
							</div>
							<div
								className="Next-Button"
								// onClick={() =>
								// 	setAudioIndex(
								// 		(audioIndex + 1) % audios.length
								// 	)
								// }
							>
								<ForwardOutlined style={iconStyle} />
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<TimeLineSong></TimeLineSong>
					</Col>
				</Row>
				{/* <SwapOutlined style={iconStyle} />
				<RetweetOutlined style={iconStyle} /> */}
			</div>
		);
	}
}
export default MiniPlayer;
