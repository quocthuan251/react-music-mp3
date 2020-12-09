import React from 'react';
import { Row, Col, Divider } from 'antd';
import './HomeStyle.css';
import { Card, Avatar } from 'antd';
import RecommnendList from './category/Recommend';

const { Meta } = Card;
const style = { background: '#0092ff', padding: '0px 0' };
class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 'This is x from state',
		};
	}
	render() {
		return (
			<>
				<div>
					<Divider
						orientation="left"
						style={{ borderTopColor: 'white' }}
					>
						<p className="textTitle">Âm nhạc dành cho bạn</p>
					</Divider>
					<RecommnendList></RecommnendList>
				</div>
				<div>
					<Divider
						orientation="left"
						style={{ borderTopColor: 'white' }}
					>
						<p className="textTitle">Playlist nghe gần đây</p>
					</Divider>
					<RecommnendList></RecommnendList>
				</div>
				<div>
					<Divider
						orientation="left"
						style={{ borderTopColor: 'white' }}
					>
						<p className="textTitle">Mix Riêng cho bạn</p>
					</Divider>
					<RecommnendList></RecommnendList>
				</div>
			</>
		);
	}
}
export default Content;
