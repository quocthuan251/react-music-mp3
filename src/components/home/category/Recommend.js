import React from 'react';
import { Row, Col } from 'antd';
import { Card, Avatar, Button } from 'antd';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { actions as homeActions } from '../reducer';
import { connect } from 'react-redux';
// import TestRedux from './TestRedux';

const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };

const testLog = () => {
	console.log('kkkkkkkkk');
};
const dataCard = [1, 2, 3, 4, 5, 6];

const result = [];
var x;
for (x of dataCard) {
	result.push(<CardSong></CardSong>);
}

function CardSong(props) {
	return (
		<Col className="gutter-row" span={4}>
			<div style={style}>
				<Card
					cover={
						<img
							alt="example"
							src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/7/1/f/771fbf979c3a1f8688c33fdceb9184b3.jpg"
						/>
					}
					actions={[
						<HeartOutlined onClick={testLog} key="like" />,
						<CaretRightOutlined key="play" />,
						<EllipsisOutlined key="ellipsis" />,
					]}
				>
					<Meta
						title="sdas"
						description="The best music on the world"
					/>
				</Card>
			</div>
		</Col>
	);
}

class Recommend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}
	componentDidMount() {}

	render() {
		return (
			<div>
				<Row gutter={16}>{result}</Row>
			</div>
		);
	}
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch, props) => {};
Recommend = connect(mapStateToProps, mapDispatchToProps)(Recommend);
export default Recommend;
