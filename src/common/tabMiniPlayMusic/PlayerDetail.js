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
			<div>
				<Row className="player-detail-group">
					<Col span={6}>
						<Image
							className="image-song"
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
					</Col>
					<Col span={18}>
						<Row style={{ backgroundColor: 'white' }}>
							<Col span={18} className="miniNameSong">
								<marquee
									width="90%"
									behavior="scroll"
									scrollamount="4"
								>
									Đứng trước bờ vực loài người sẽ thay đổi -
									Trần Quốc Thuận
								</marquee>
							</Col>
							<Col span={6} className="countdown">
								<Row>
									<Col span={12}>
										<Timer></Timer>
									</Col>
									<Col
										span={12}
										style={{
											fontSize: 12,
											fontWeight: 600,
											opacity: 0.5,
										}}
									>
										<p>/03:31</p>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<TimeLineSong></TimeLineSong>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}
export default PlayerDetail;
