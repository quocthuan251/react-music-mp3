import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col, Divider } from 'antd';
import MiniPlayer from './MiniPlayer';
import PlayerDetail from './PlayerDetail';
import VolumnContainer from './VolumnContainer';
import PlayListWraper from './PlayListWraper';
import './style/MainContainerStyle.css';
const style = {
	background: '#B2B4AA',
	padding: '0px 0',
	borderRadius: '10px 10px 10px 10px',
};
const styleMainRow = {
	paddingLeft: '5px',
	paddingRight: '5px',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
};
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
			<div className="main-container-mini">
				<Row
					gutter={{ xs: 0, sm: 0, md: 0, lg: 10 }}
					style={{ textAlign: 'center' }}
				>
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<MiniPlayer></MiniPlayer>
						</div>
					</Col>
					<Col className="gutter-row" span={8}>
						<div style={style}>
							<PlayerDetail></PlayerDetail>
						</div>
					</Col>
					<Col
						className="gutter-row"
						span={5}
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							paddingRight: 70,
							background: '#B2B4AA',
							borderRadius: '10px 10px 10px 10px',
						}}
					>
						<div>
							<VolumnContainer></VolumnContainer>
						</div>
					</Col>
					<Col
						className="gutter-row"
						span={5}
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							paddingRight: 70,
							background: '#B2B4AA',
							borderRadius: '10px 10px 10px 10px',
						}}
					>
						<div>
							<PlayListWraper></PlayListWraper>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default MainContainer;
