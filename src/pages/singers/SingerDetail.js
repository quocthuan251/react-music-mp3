import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, List, Avatar, Table, Card } from 'antd';

import top50 from '../../images/top_50.jpg';
import SonTung from '../../images/sontung.png';
import TrenTinhBan from '../../images/img_trentinhban.png';
const { Meta } = Card;
const columns = [
	{
		dataIndex: 'key',
		key: 'key',
		width: 30,
	},
	{
		dataIndex: 'avatar',
		key: 'avatar',
		render: (text) => <Avatar size={32} src={text} />,
		width: 10,
	},
	{
		dataIndex: 'singer',
		key: 'singer',
		width: 10,
	},
	{
		dataIndex: 'tmp',
		key: 'tmp',
		width: 10,
	},
];

const data = [
	{
		key: 1,
		avatar: SonTung,
		singer: 'Thịnh Suy',
		tmp: '',
	},
	{
		key: 2,
		avatar: SonTung,
		singer: 'MIN',
	},
	{
		key: 3,
		avatar: SonTung,
		singer: 'Quân AP',
	},
	{
		key: 4,
		avatar: SonTung,
		singer: 'MIN',
	},
	{
		key: 5,
		avatar: SonTung,
		singer: 'Quân AP',
	},
];

const data2 = [
	{
		key: 6,
		avatar: SonTung,
		singer: 'Thịnh Suy',
	},
	{
		key: 7,
		avatar: SonTung,
		singer: 'MIN',
	},
	{
		key: 8,
		avatar: SonTung,
		singer: 'Quân AP',
	},
	{
		key: 9,
		avatar: SonTung,
		singer: 'MIN',
	},
	{
		key: 10,
		avatar: SonTung,
		singer: 'Quân AP',
	},
];

const data3 = [
	{
		key: '1',
		title: TrenTinhBan,
		singer: 'MIN',
	},
	{
		key: '2',
		title: TrenTinhBan,
		singer: 'AMEE',
	},
	{
		key: '3',
		title: TrenTinhBan,
		singer: 'Bùi Anh Tuấn',
	},
	{
		key: '4',
		title: TrenTinhBan,
		singer: 'Thịnh Suy',
	},
	{
		key: '5',
		title: TrenTinhBan,
		singer: 'MIN',
	},
	{
		key: '6',
		title: TrenTinhBan,
		singer: 'AMEE',
	},
	{
		key: '7',
		title: TrenTinhBan,
		singer: 'Bùi Anh Tuấn',
	},
	{
		key: '8',
		title: TrenTinhBan,
		singer: 'Thịnh Suy',
	},
];

export class SingerDetail extends React.Component {
	state = {};

	componentWillMount = () => {};

	render() {
		return (
			<>
				<div style={{ backgroundColor: '#f1f1f1', height: '450px' }}>
					<Row>
						<Col span={8}>
							<div>
								<img
									src={SonTung}
									alt="Top Music"
									style={{
										width: '320px',
										height: '380px',
										marginTop: '2rem',
									}}
								/>
							</div>
						</Col>
						<Col span={16}>
							<h1
								style={{
									marginTop: '2rem',
									textAlign: 'left',
									textDecoration: 'bold',
								}}
							>
								TOP Nghệ Sĩ Trending Trong Tuần
							</h1>
							<Row>
								<Col span={11} style={{ marginTop: '1rem' }}>
									<Table
										columns={columns}
										dataSource={data}
										pagination={false}
										showHeader={false}
										style={{ backgroundColor: '#f1f1f1' }}
									/>
								</Col>
								<Col span={12} style={{ marginTop: '1rem' }}>
									<Table
										style={{ backgroundColor: '#f1f1f1' }}
										columns={columns}
										dataSource={data2}
										pagination={false}
										showHeader={false}
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<div style={{ textAlign: 'left', marginTop: '3rem' }}>
					<h1> NGHỆ SĨ</h1>
				</div>
				<div style={{ marginTop: '1rem' }}>
					<List
						grid={{ gutter: 16, column: 4 }}
						dataSource={data3}
						renderItem={(item) => (
							<List.Item>
								<Link
									to={{
										pathname: `/singer/${item.singer}`,
										aboutProps: {
											item: item,
										},
									}}
								>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												alt="example"
												src={item.title}
											/>
										}
									>
										<Meta
											// title={item.song}
											title={item.singer}
										/>
									</Card>
								</Link>
								,
							</List.Item>
						)}
					/>
				</div>
			</>
		);
	}
}

export default SingerDetail;
