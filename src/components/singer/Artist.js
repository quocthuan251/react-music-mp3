import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, List, Avatar, Table, Card } from 'antd';

import Min from '../../images/min.jpg';
import SonTung from '../../images/sontung.png';
import TrenTinhBan from '../../images/img_trentinhban.png';

const { Meta } = Card;
const data = [
	{
		title: 'Ant Design Title 1',
		singer: 'Thịnh Suy',
	},
	{
		title: 'Ant Design Title 2',
		singer: 'Min',
	},
	{
		title: 'Ant Design Title 3',
		singer: 'Kay Trần',
	},
	{
		title: 'Ant Design Title 4',
		singer: 'Sơn Tùng MTP',
	},
	{
		title: 'Ant Design Title 5',
		singer: 'Hương Tràm',
	},
];

const data1 = [
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

export class Artist extends React.Component {
	state = {
		item: [],
	};
	constructor(props) {
		super(props);
		console.log('artist');
		this.state = { item: props.router.location.aboutProps.item };
		// this.setState((state) => ({
		// 	item: props.router.location.aboutProps.item,
		// }));
		console.log(this.state.item);
	}
	componentWillMount = () => {};

	render() {
		return (
			<>
				<Row>
					<Col
						span={5}
						style={{
							backgroundColor: '#333',
							minHeight: '300px',
							color: 'white',
						}}
					>
						<Avatar
							size={64}
							src={SonTung}
							style={{ marginTop: '30px' }}
						/>
						<h1 style={{ color: 'white', marginTop: '1rem' }}>
							{this.state.item.singer}
						</h1>
						<span>Quốc tịnh: Việt Nam</span>
						<br />
						<span>Ngày Sinh: 27/04/1999</span>
						<br />
						<span>Giới Tính: Nữ</span>
					</Col>
					<Col span={19}>
						<div>
							<img src={Min} alt="Min cute " />
						</div>
					</Col>
				</Row>
				<div>
					<div>
						<h2
							style={{
								color: '#2daaed',
								marginTop: '1rem',
								textAlign: 'left',
							}}
						>
							TIỂU SỬ
						</h2>
					</div>
					<div>
						<p style={{ textAlign: 'left' }}>
							Nguyễn Minh Hằng được biết tới với nghệ danh MIN.
							MIN bắt đầu được biết đến với tư cách là thành viên
							của nhóm nhảy St.319 (tiền thân của công ty giải trí
							St.319 Entertainment). Bản hit "Y.Ê.U" được coi là
							cú hích trong sự nghiệp âm nhạc của cô. Ca khúc nhận
							được sự chú ý lớn từ cộng đồng mạng, đưa cô từ một
							vũ công trở thành một ca sĩ thực thụ. Ca khúc đã
							nhận được sự ủng hộ lớn tự cộng đồng fan Vpop và
							chiếm lĩnh vị trí đầu ở các bảng xếp hạng âm nhạc
							trong nước. Đầu năm 2016, Min đã rời khỏi St.319 và
							trở thành ca sĩ tự do. Bước sang năm 2017, mãi đến
							khoảng cuối tháng 4, đầu tháng 5, Min bất ngờ trở
							lại bằng việc tung ra ca khúc "Có em chờ", cũng thể
							hiện bài hát với cô là ca sĩ Mr.A. Ca khúc nhanh
							chóng nhận được sự chú ý và ủng hộ từ người hâm mộ.
							Đặc biệt ca khúc được sản xuất bởi nhạc sĩ Khắc
							Hưng, một trong những nhạc sĩ thành công nhất trong
							năm 2016 và được yêu thích nhất vào khoảng thời gian
							này và sáng tác bởi Kai Đinh. Trong lời bài hát có
							câu "Ngoài kia nếu có khó khăn quá, về nhà anh nhé
							có em chờ" lập tức trở thành trào lưu trên mạng xã
							hội, không khó bắt gặp câu nói này trong các bình
							luận hay trang thái của cộng động mạng Việt Nam lúc
							bấy giờ. Ngày 23 tháng 5, Min cùng Erik, một ca sĩ
							khác cũng vừa rời khỏi St.319 Entertainment, cho ra
							mắt một ca khúc mới có tựa là Ghen, do nhạc sĩ Khắc
							Hưng chắp bút và sản xuất. Tối 22/05/2018, Min chính
							thức cho ra mắt MV "Em mới là người yêu anh" trong
							sự chờ đợi của đông đảo người hâm mộ. Ca khúc là bản
							pop nhẹ nhàng do nhạc sĩ Khắc Hưng sáng tác.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h2
							style={{
								color: '#2daaed',
								marginTop: '1rem',
								textAlign: 'left',
							}}
						>
							AlBUM {this.state.item.singer}
						</h2>
					</div>
					<div>
						<List
							grid={{ gutter: 16, column: 4 }}
							dataSource={data1}
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
											style={{ width: 280 }}
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
								</List.Item>
							)}
						/>
					</div>
				</div>
				<div>
					<div>
						<h2
							style={{
								color: '#2daaed',
								marginTop: '1rem',
								textAlign: 'left',
							}}
						>
							BÀI HÁT {this.state.item.singer}
						</h2>
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
										}}
										avatar={
											<img
												style={{
													height: '65px',
												}}
												src={SonTung}
											/>
										}
										title={
											<div>
												<a href="#">{item.title}</a>
												<br />
												<span>{item.singer}</span>
											</div>
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

export default Artist;
