import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Signup from '../signup/signup';

//login
const NormalLoginForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<a className="login-form-forgot" href="">
					Forgot password
				</a>
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Log in
				</Button>
				Or <a href="">register now!</a>
			</Form.Item>
		</Form>
	);
};

export class Signin extends Component {
	state = { visible: false };

	//modal
	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	componentWillMount = () => {};

	render() {
		return (
			<>
				<div>
					<Button type="primary" onClick={this.showModal}>
						Open Modal
					</Button>
					<Modal
						centered
						title="Đăng nhập"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						<NormalLoginForm />
						{/* <Signup></Signup> */}
					</Modal>
				</div>
			</>
		);
	}
}

export default Signin;
