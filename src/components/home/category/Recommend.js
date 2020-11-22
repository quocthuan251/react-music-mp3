import React from 'react';
import { Row, Col } from 'antd';
import { Card, Avatar, Button } from 'antd';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { actions as homeActions, getSongs } from '../reducer';
import { connect } from 'react-redux';
import TestRedux from './TestRedux';

const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };

const testLog = () => {
	console.log('kkkkkkkkk');
};
function CardSong(props) {
	return (
		<Col className="gutter-row" span={4}>
			<div style={style}>
				<Card
					cover={
						<img
							alt="example"
							src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
			data: props.result,
		};
	}
	componentDidMount() {
		this.props.getListSong();
		// this.props.getListSongTest();
	}
	test = () => {
		console.log('test componet');
		console.log(this.props.result);
	};
	render() {
		return (
			<>
				<Button onClick={this.test}>sdf</Button>
				<TestRedux></TestRedux>
				<CardSong></CardSong>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		result: state.user,
		// listSong: getSongs(state).toJS(),
	};
	// article: state.news,
	// listSong: getSongs(state).toJS(),
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		getListSong: () => {
			dispatch(homeActions.getList());
		},
		getListSongTest: () => {
			dispatch(homeActions.getListTest());
		},
	};
};
Recommend = connect(mapStateToProps, mapDispatchToProps)(Recommend);
export default Recommend;
