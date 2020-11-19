import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, List, Avatar, Divider, Table } from 'antd';
import RecommnendList from '../../components/home/category/Recommend';
import top50 from '../../images/top_50.jpg';
import SonTung from '../../images/sontung.png';

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
											width: '320px',
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
					<div>
						<List
							itemLayout="horizontal"
							dataSource={data}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										style={{
											textAlign: 'initial',
											maxWidth: '15%',
											textAlign: 'center',
										}}
										title={<span>{item.key}</span>}
									></List.Item.Meta>
									<List.Item.Meta
										style={{
											textAlign: 'initial',
											marginLeft: '2rem',
										}}
										avatar={
											<Link
												to={{
													pathname: '/songdetail',
													aboutProps: {
														item: item,
													},
												}}
											>
												<img
													style={{
														height: '100px',
													}}
													src={SonTung}
												/>
											</Link>
										}
										title={
											<Link
												to={{
													pathname: '/songdetail',
													aboutProps: {
														item: item,
													},
												}}
											>
												<br />
												<span>{item.name}</span>
												<br />
												<span>{item.singer}</span>
											</Link>
										}
										// description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default MusicChart;
