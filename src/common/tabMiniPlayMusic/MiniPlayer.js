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
import Timer from './Timer';
import './style/MiniPlayerStyle.css';
const iconStyle = {
	fontSize: '20px',
};
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
			<div style={{ color: 'white' }}>
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
							<div className="Next-Button">
								<ForwardOutlined style={iconStyle} />
							</div>
							<div className="retweet-Button">
								<SwapOutlined style={iconStyle} />
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col span={3}>
						<Timer></Timer>
					</Col>
					<Col span={18}>
						<TimeLineSong></TimeLineSong>
					</Col>
					<Col span={3}>{this.state.timeEnd}</Col>
				</Row>
			</div>
		);
	}
}
export default MiniPlayer;
