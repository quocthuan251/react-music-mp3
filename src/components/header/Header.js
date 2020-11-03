import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon, Menu, Dropdown, Button, Avatar, Image } from 'antd';
import logo from '../../images/logoMusic.png';
import AvatarGroup from './avatar/AvatarGroup';
import NavigationPage from './navigation/NavigationPage';
import SearchInput from './searchBar/SearchInput';
import { Row, Col } from 'antd';
import {
	TopNavContainer,
	SearchBarContainer,
	MenuContainer,
	ProfileContainer,
	SettingTabContainer,
	NavLinkWrapper,
	Logo,
} from './styles';

export class Header extends Component {
	state = {
		pageIndex: 0,
	};

	componentWillMount = () => {
		// const { location } = this.props
		// const { pathname } = location
		// this.setState({
		//   pageIndex: pageIndexMapping[pathname],
		// })
	};

	// changePageIndex = index => {
	//   this.setState({
	//     pageIndex: index,
	//   })
	// }

	render() {
		return (
			<>
				{/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
					<Menu.Item key="1">
						<Button type="link">Link</Button>
					</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu> */}
				<Row>
					<Col
						span={24}
						style={{
							//	backgroundColor: '#28a745',
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
										src={<Image src={logo} />}
									/>
								</Logo>
								<h1
									style={
										{
											// marginLeft: 50,
										}
									}
								>
									Music Cloud
								</h1>
							</Col>
							<Col span={9}>
								<NavigationPage></NavigationPage>
							</Col>
							<Col span={5}>
								<SearchInput></SearchInput>
								
							</Col>
							{/* <Col span={1}>col-2</Col> */}
							<Col
								span={6}
								style={{
								
								
								}}
							>
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
