import React, { Component } from 'react';
import { Menu, Button, Popover, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import avatarDefault from '../../../images/vinile.png';
import './Style.css';
import { message } from 'antd';
import {
	BellOutlined,
	UserOutlined,
	LogoutOutlined,
	DownOutlined,
} from '@ant-design/icons';
import Signin from '../../../pages/signin/Signin';

function handleMenuClick(e) {
	message.info('Click on menu item.');
	console.log('click', e);
}
const content = (
	<div className="avatar-group-button-user">
		<Link to="/profile">
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
			</div>
		</Link>
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

const menu = (
	<div className="avatar-group-notifi-detail">
		<Menu>
			<Menu.Item key="0">
				<div>Sơn Tùng MTP</div>
			</Menu.Item>
			<Menu.Item key="1">
				<div>Mr Siro vừa ra bài hát mới</div>
			</Menu.Item>
		</Menu>
	</div>
);
export class AvatarGroup extends Component {
	render() {
		return (
			<div
				style={{
					float: 'right',
				}}
			>
				<Dropdown overlay={menu} trigger={['click']}>
					<Button
						shape="circle"
						icon={<BellOutlined />}
						size={'large'}
					/>
				</Dropdown>

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
				</Popover>
			</div>
		);
	}
}

export default AvatarGroup;
