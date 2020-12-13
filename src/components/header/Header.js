import React, { Component } from 'react';
import { Avatar, Image } from 'antd';
import logo from '../../images/logoMusic.png';
import AvatarGroup from './avatar/AvatarGroup';
import NavigationPage from './navigation/NavigationPage';
import SearchInput from './searchBar/SearchInput';
import { Row, Col } from 'antd';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';
export class Header extends Component {
	state = {
		pageIndex: 0,
	};

	render() {
		return (
			<>
				<Row style={{}}>
					<Col span={4} style={{}}>
						<Link to="/">
							<Row>
								<Col span={6}>
									<Avatar
										size={40}
										src={<Image src={logo} />}
									/>
								</Col>
								<Col span={18}>
									<h3 style={{ color: 'white' }}>
										Music cloud
									</h3>
								</Col>
							</Row>
						</Link>
					</Col>
					<Col span={11}>
						<NavigationPage></NavigationPage>
					</Col>
					<Col
						span={5}
						className="inputSearchHeader"
						style={{ display: 'flex' }}
					>
						<SearchInput></SearchInput>
					</Col>
					<Col span={4}>
						<AvatarGroup style={{}}></AvatarGroup>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
