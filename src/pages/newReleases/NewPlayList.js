import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { List, Card } from 'antd';
import NewRelease from '../../images/new-release-vn.png';
import TrenTinhBan from '../../images/img_trentinhban.png';
import SongDetail from '../SongDetail';
const { Meta } = Card;
const data = [
	{
		key: '1',
		title: TrenTinhBan,
		singer: 'MIN',
		song: 'Vì Yêu Cứ Đâm Đầu',
	},
	{
		key: '2',
		title: TrenTinhBan,
		singer: 'AMEE',
		song: 'Yêu Thì Yêu Không Yêu Thì Yêu',
	},
	{
		key: '3',
		title: TrenTinhBan,
		singer: 'Bùi Anh Tuấn',
		song: 'Hẹn Một Mai',
	},
	{
		key: '4',
		title: TrenTinhBan,
		singer: 'Thịnh Suy',
		song: 'Chuyện Rằng',
	},
	{
		key: '5',
		title: TrenTinhBan,
		singer: 'MIN',
		song: 'Vì Yêu Cứ Đâm Đầu',
	},
	{
		key: '6',
		title: TrenTinhBan,
		singer: 'AMEE',
		song: 'Yêu Thì Yêu Không Yêu Thì Yêu',
	},
	{
		key: '7',
		title: TrenTinhBan,
		singer: 'Bùi Anh Tuấn',
		song: 'Hẹn Một Mai',
	},
	{
		key: '8',
		title: TrenTinhBan,
		singer: 'Thịnh Suy',
		song: 'Chuyện Rằng',
	},
];

export class NewPlayList extends Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
	};

	componentWillMount = () => {};

	render() {
		return (
			<>
				<div>
					<img
						src={NewRelease}
						style={{
							width: '100%',
							height: '240px',
							borderRadius: '4px',
						}}
					/>
				</div>
				<div style={{ textAlign: 'left', marginTop: '3rem' }}>
					<h1> PLAYLIST NHẠC TRẺ</h1>
				</div>
				<div style={{ marginTop: '1rem' }}>
					<List
						grid={{ gutter: 16, column: 4 }}
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<Link
									to={{
										pathname: '/songdetail',
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
											title={item.song}
											description={item.singer}
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

export default NewPlayList;
