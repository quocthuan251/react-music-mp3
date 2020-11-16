import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, List, Avatar, Divider, Table } from 'antd';
import RecommnendList from '../../components/home/category/Recommend';
import top50 from '../../images/top_50.jpg';

const columns = [
	{
		title: '',
		dataIndex: 'key',
		key: 'key',
		width: 100,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
		childrenColumnName: 'singer',
		width: 300,
	},
	{
		title: 'Ca sĩ',
		dataIndex: 'singer',
		key: 'singer',
		width: 250,
	},
	{
		title: 'Thời Lượng',
		dataIndex: 'time',
		key: 'time',
		width: 150,
	},
	{
		title: 'Album',
		dataIndex: 'album',
		key: 'album',
		ellipsis: true,
	},
	{
		title: '',
		dataIndex: 'address',
		key: 'address 2',
		ellipsis: true,
	},
];

const data = [
	{
		key: '1',
		name: 'Chuyện rằng',
		time: '3:02"',
		album: 'chuyện nha khoa',
		singer: 'Thịnh Suy',
	},
	{
		key: '2',
		name: 'Trên tình bạn dưới tình yêu',
		time: '4:45"',
		album: 'Trên tình bạn dưới tình yêu ákdasbdkjasdkjasndkjas',
		singer: 'MIN',
	},
	{
		key: '3',
		name: 'Bông hoa đẹp nhất',
		time: '6:15"',
		album: 'Người tình',
		singer: 'Quân AP',
	},
];

export class MusicChart extends Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
	};

	componentWillMount = () => {};

	render() {
		return (
			<>
				<div>
					<div
						style={{ backgroundColor: '#c81216', height: '350px' }}
					>
						<Row>
							<Col span={8}>
								<div>
									<img
										src={top50}
										alt="Top Music"
										style={{
											width: '350px',
											height: '290px',
											margin: '2rem',
										}}
									/>
								</div>
							</Col>
							<Col span={16}>
								<div
									style={{
										textAlign: 'left',
										color: 'white',
										marginLeft: '2rem',
									}}
								>
									<h2
										style={{
											fontWeight: '700',
											marginTop: '1rem',
											color: 'white',
										}}
									>
										BẢNG XẾP HẠNG
									</h2>
									<span style={{ fontSize: '96px' }}>
										Top 50 Việt Nam
									</span>
									<br />
									<br />
									<span style={{ marginTop: '1rem' }}>
										Bảng Xếp Hạng Music Cloud cập nhật vào
										thứ Hai hàng tuần dựa trên số liệu thống
										kê thực tế trên Desktop và Mobile. Trong
										đó những trọng số quan trọng nhất quyết
										định thứ hạng TOP 50 như sau: Nghe,
										Thích, Bình Luận, Chia sẻ, Tải v.v.. Mỗi
										tương tác của người dùng đều tác động
										đến kết quả cuối cùng của BXH Music
										Cloud.
									</span>
								</div>
							</Col>
						</Row>
					</div>
					<Table
						style={{ marginTop: '2rem' }}
						columns={columns}
						dataSource={data}
					/>
					;
				</div>
			</>
		);
	}
}

export default MusicChart;
