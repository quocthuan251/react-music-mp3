import React from 'react';
import { Divider } from 'antd';
import './HomeStyle.css';
import RecommnendList from './category/Recommend';
import MixList from './category/MixList';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 'This is x from state',
		};
	}
	componentDidMount() {}
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
					<MixList></MixList>
				</div>
				<div>
					<Divider
						orientation="left"
						style={{ borderTopColor: 'white' }}
					>
						<p className="textTitle">Mix Riêng cho bạn</p>
					</Divider>
					<MixList></MixList>
				</div>
			</>
		);
	}
}

export default Content;
