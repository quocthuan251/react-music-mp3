import React, { Component } from 'react';
import { Avatar, Image } from 'antd';
import logo from '../../images/logoMusic.png';
import AvatarGroup from './avatar/AvatarGroup';
import NavigationPage from './navigation/NavigationPage';
import SearchInput from './searchBar/SearchInput';
import { Row, Col } from 'antd';
import './HeaderStyle.css';

export class Header extends Component {
	state = {
		pageIndex: 0,
	};



	render() {
		return (
			<>
				<Row style={{}}>
					<Col span={4} style={{}}>
						<Row>
							<Col span={6}>
								<Avatar size={40} src={<Image src={logo} />} />
							</Col>
							<Col span={18}>
								<h3>Music cloud</h3>
							</Col>
						</Row>
					</Col>
					<Col span={9}>
						<NavigationPage></NavigationPage>
					</Col>
					<Col
						span={5}
						className="inputSearchHeader"
						style={{ display: 'flex' }}
					>
						<SearchInput></SearchInput>
					</Col>
					<Col span={6}>
						<AvatarGroup style={{}}></AvatarGroup>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
