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
// import TestRedux from './TestRedux';

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
			data: this.props.result,
		};
	}
	componentDidMount() {
		this.props.getListSong();
		this.test3();
	}
	test22 = () => {
		console.log('test state li');
		const url = this.props.result.song.items[1];
		// console.log(url.thumbnail_medium);
		// console.log(this.props.result.song.items.slice(1, 2));
		// console.log(this.state.data);
	};
	test3 = () => {
		const datatest = this.props.result;
		console.log('test3');
		console.log(datatest);
	};

	render() {
		// const datatest = this.props.result.song.items.slice(1, 2);
		return (
			<>
				<Button onClick={this.test22}>test2</Button>
				{/* <p>{this.state.data}</p> */}
				<CardSong></CardSong>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		result: getSongs(state).toJS(),
	};
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
