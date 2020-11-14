import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Input,
	Icon,
	Menu,
	Dropdown,
	Button,
	Avatar,
	Image,
	Popover,
} from 'antd';
import avatarDefault from '../../../images/vinile.png';
import './Style.css';
import { Row, Col } from 'antd';
import { message, Tooltip } from 'antd';
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Signin from '../../../pages/signin/Signin';

function handleMenuClick(e) {
	message.info('Click on menu item.');
	console.log('click', e);
}
const content = (
	<div>
		<img
			src={avatarDefault}
			alt="my image"
			style={{
				width: 40,
				cursor: 'pointer',
			}}
		/>
		<p>Trần Quốc Thuận</p>
		<hr />
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1" icon={<UserOutlined />}>
				1st menu item
			</Menu.Item>
			<Menu.Item key="2" icon={<UserOutlined />}>
				2nd menu item
			</Menu.Item>
			<Menu.Item key="3" icon={<UserOutlined />}>
				3rd menu item
			</Menu.Item>
		</Menu>
		<hr />
		<Button
			type="dashed"
			shape="round"
			icon={<LogoutOutlined />}
			size={'middle'}
		>
			Đăng xuất
		</Button>
	</div>
);
const notifi = (
	<div>
		<p>các thông báo ở đây</p>
	</div>
);

export class AvatarGroup extends Component {
	state = {};

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
				<div
					style={{
						float: 'right',
					}}
				>
					<Popover
						content={notifi}
						title="Thông báo"
						trigger="click"
						className="ring"
					>
						{/* <Button
							style={{
								backgroundImage: `url(${avatarDefault})`,
								textAlign: 'center',
								// marginLeft: 30,
							}}
						>

						hêllo
						</Button> */}
						<Button
							//	type="primary"
							shape="circle"
							icon={<BellOutlined />}
							size={'large'}
						/>
					</Popover>
					<Popover content={content} trigger="click">
						<img
							src={avatarDefault}
							alt="my image"
							style={{
								width: 40,
								height: 40,
								cursor: 'pointer',
								marginBottom: 5,
							}}
						/>

						{/* <Button
							style={{
								backgroundImage: `url(${avatarDefault})`,
								textAlign: 'center',
								// marginLeft: 30,
							}}
						> */}

						{/* <Avatar size={40} src={<Image src={avatarDefault} />} /> */}
						{/* </Button> */}
					</Popover>
					<Signin></Signin>
				</div>
				{/* <Logo>

					<Avatar size={40} src={<Image src={logo} />} />
				</Logo>							 */}
			</>
		);
	}
}

export default AvatarGroup;
