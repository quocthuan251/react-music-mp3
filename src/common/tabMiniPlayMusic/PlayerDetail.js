import React from 'react';
import TimeSlider from 'react-input-slider';
import { Button, Image } from 'antd';
import { Row, Col, Statistic } from 'antd';
import Timer from './Timer';
import TimeLineSong from './TimeLineSong';
import './style/PlayerDetailStyle.css';
// import {
// 	PlayCircleOutlined,
// 	PauseOutlined,
// 	ForwardOutlined,
// 	BackwardOutlined,
// 	RetweetOutlined,
// 	SwapOutlined,
// } from '@ant-design/icons';
const iconStyle = {
	fontSize: '26px',
};

class PlayerDetail extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			// time: 100,
			// seconds: 23,
			// minute: 0,
		};
		// this.tick = this.tick.bind(this);
	}
	// tick() {
	// 	this.setState({
	// 		seconds: this.state.time + 1,
	// 	});
	// 	console.log(this.state.seconds);
	// }

	render() {
		return (
			<div style={{ color: 'white' }}>
				<Row className="player-detail-group">
					<Col span={6}>
						<Image
							className="image-song"
							src="https://i.scdn.co/image/ab67616d000048518bab2a8ce2c392fac6e14739"
						/>
					</Col>
					<Col span={18}>
						<div className="miniDetailSongBox">
							<div className="miniNameSong">Stay Alive</div>
							<div className="miniAuthorSong">Quốc Thuận</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default PlayerDetail;
