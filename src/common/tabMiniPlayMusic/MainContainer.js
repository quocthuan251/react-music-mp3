import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col, Divider } from 'antd';
import MiniPlayer from './MiniPlayer';
const style = { background: '#0092ff', padding: '0px 0' };
class MainContainer extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			x: 'This is x from state',
			y: 'This is y from state',
		};
	}
	render() {
		return (
			<div>
				<Row
					gutter={{ xs: 0, sm: 0, md: 0, lg: 10 }}
					style={{ textAlign: 'center' }}
				>
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<MiniPlayer></MiniPlayer>
						</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>col-6</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default MainContainer;
