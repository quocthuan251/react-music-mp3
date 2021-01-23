import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import {
	Form,
	Input,
	Tooltip,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
	Card,
} from 'antd';
//login
import './SignupStyle.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const SignupPage = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);

		const body = {
			userName: values.userName,
			password: values.password,

			firstName: 'Thuan',
			lastName: 'Tran',
			email: values.email,

			gender: 'nam',
			birthDay: '1920-03-27',
			activityStatus: 1,
			userType: {
				id: 1,
			},
		};
		console.log('body');
		console.log(body);
		return axios({
			url: `http://localhost:8081/signup`,
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			data: body,
		})
			.then((response) =>
				message.success({
					content:
						'Đăng ký thành công, hãy quay trở lại trang đăng nhập',
					className: 'custom-class',
					style: {
						marginTop: '20vh',
					},
				})
			)
			.catch((error) => message.error('Thất bại! Tài khoản đã tồn tại'));
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 70,
				}}
			>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);

	return (
		<div className="form-signup-main">
			<Card title="Đăng ký" bordered={false} className="signup-card-box">
				<Form
					{...formItemLayout}
					form={form}
					name="register"
					onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '86',
					}}
					scrollToFirstError
				>
					<Form.Item
						name="email"
						label="E-mail"
						rules={[
							{
								type: 'email',
								message: 'Nhập sai email!',
							},
							{
								required: true,
								message: 'Hãy nhập email!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: 'hãy nhập password!',
							},
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="confirm"
						label="Confirm Password"
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'hãy nhập lại password!',
							},
							({ getFieldValue }) => ({
								validator(rule, value) {
									if (
										!value ||
										getFieldValue('password') === value
									) {
										return Promise.resolve();
									}

									return Promise.reject(
										'Mật khẩu nhập lại không giống nhau!'
									);
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="userName"
						label={
							<span>
								Tên Đăng nhập&nbsp;
								<Tooltip title="Tên tài khoản dùng để đăng nhập?">
									<QuestionCircleOutlined />
								</Tooltip>
							</span>
						}
						rules={[
							{
								required: true,
								message: 'Hãy nhập tên đăng nhập!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Captcha"
						extra="Chúng tôi phải đảm bảo rằng bạn là một con người.."
					>
						<Row gutter={8}>
							<Col span={12}>
								<Form.Item name="captcha" noStyle>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Button>Get captcha</Button>
							</Col>
						</Row>
					</Form.Item>

					<Form.Item
						name="agreement"
						valuePropName="checked"
						rules={[
							{
								validator: (_, value) =>
									value
										? Promise.resolve()
										: Promise.reject(
												'Hãy tích vào đồng ý điều khoản'
										  ),
							},
						]}
						{...tailFormItemLayout}
					>
						<Checkbox>
							Tôi đã đọc và đồng ý <a href="">điều khoản</a>
						</Checkbox>
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Đăng ký
						</Button>
					</Form.Item>
				</Form>
				<Link to="/signin"> Trở lại trang đăng nhập</Link>
			</Card>
		</div>
	);
};

export default SignupPage;
