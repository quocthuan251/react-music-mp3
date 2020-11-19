import React, { Component } from 'react';
import { Avatar, Image } from 'antd';
import logo from '../../images/logoMusic.png';
import AvatarGroup from './avatar/AvatarGroup';
import NavigationPage from './navigation/NavigationPage';
import SearchInput from './searchBar/SearchInput';
import { Row, Col } from 'antd';
import { Logo } from './styles';
import './HeaderStyle.css';

export class Header extends Component {
	state = {
		pageIndex: 0,
	};

	componentWillMount = () => {};

	render() {
		return (
			<>
				<Row>
					<Col
						span={24}
						style={{
							backgroundColor: '#28a745',
							height: 64,
							//textAlign: 'center',
							// marginLeft: 30,
						}}
					>
						<Row>
							<Col
								span={4}
								style={{
									backgroundColor: 'white',
									//textAlign: 'center',
									// marginLeft: 30,
									height: 64,
								}}
							>
								<Logo>
									<Avatar
										size={40}
										src={
											<a href="/">
												<Image src={logo} />
											</a>
										}
									/>
								</Logo>
								<a href="/">
									<h1>Music Cloud</h1>
								</a>
							</Col>
							<Col span={9}>
								<NavigationPage></NavigationPage>
							</Col>
							<Col span={5} className="inputSearchHeader">
								<SearchInput></SearchInput>
							</Col>
							{/* <Col span={1}>col-2</Col> */}
							<Col span={6} style={{}}>
								<AvatarGroup style={{}}></AvatarGroup>
							</Col>
						</Row>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
