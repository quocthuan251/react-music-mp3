import React from 'react';
import { Row, Col } from 'antd';
// import './HomeStyle.css';
import { Card, Avatar, Button } from 'antd';
import axios from 'axios';
import {
	EllipsisOutlined,
	CaretRightOutlined,
	HeartOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };

function CardSong(props) {
	return (
		<Col className="gutter-row" span={4}>
			<div style={style}>
				<Card
					// style={{ width: 176 }}
					cover={
						<img
							alt="example"
							src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
						/>
					}
					actions={[
						<HeartOutlined key="like" />,
						<CaretRightOutlined key="play" />,
						<EllipsisOutlined key="ellipsis" />,
					]}
				>
					{/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}

					<Meta
						// avatar={
						// 	<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						// }
						title="We Will Rock"
						description="The best music on the world"
					/>
				</Card>
			</div>
		</Col>
	);
}
function ListCardSong(props) {
	const listSong = props.listSong;
	// console.log('hekkk' + listSong);
	const listItems = listSong.map((song) => (
		<CardSong key={song.id} value={song.title} />
	));
	return <Row gutter={{ xs: 0, sm: 0, md: 0, lg: 10 }}>{listItems}</Row>;
}
const listSong = [
	{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
	{
		id: 2,
		title: 'Installation',
		content: 'You can install React from npm.',
	},
	{
		id: 3,
		title: 'Installation',
		content: 'You can install React from npm.',
	},
	{
		id: 4,
		title: 'Installation',
		content: 'You can install React from npm.',
	},
	{
		id: 5,
		title: 'Installation',
		content: 'You can install React from npm.',
	},
	{
		id: 6,
		title: 'Installation',
		content: 'You can install React from npm.',
	},
];
class Recommend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}
	componentDidMount() {
		axios.get(`http://demo7080721.mockable.io/get-playlist`).then((res) => {
			const data = res.data;
			this.setState({ data });
		});
		// const getUser = async () => {
		// 	const { data } = await axios(
		// 		`http://demo7080721.mockable.io/get-playlist`
		// 	);

		// 	this.setState({ data });
		// };
	}
	getListSong = () => {
		const test = [];
		for (let i = 0; i < 6; i++) {
			test.push(this.state.data.song.items[i]);
		}
		console.log(test);
	};
	render() {
		return (
			<>
				<Button onClick={this.getListSong}>log data</Button>
				<ListCardSong listSong={listSong}></ListCardSong>
			</>
		);
	}
}
export default Recommend;
