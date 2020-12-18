import React from 'react';
import axios from 'axios';
import { Descriptions, Image, Tabs, Avatar, Button, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import {
	HeartOutlined,
	DeleteOutlined,
	ShareAltOutlined,
} from '@ant-design/icons';
import './style/UserProfileStyle.css';
import UserPlayList from './UserPlayList';
import { connect } from 'react-redux';
import { getUserDetail } from './actions';
const { TabPane } = Tabs;

function ImageDemo() {
	return (
		<div>
			<Row
				className="user-profile-play-list-group"
				style={{ width: 800, cursor: 'pointer' }}
			>
				<Col span={3}>
					<Avatar
						className="user-profile-image-song"
						src="https://i.scdn.co/image/ab67616d000048518bab2a8ce2c392fac6e14739"
					/>
				</Col>
				<Col span={15} style={{ color: 'white' }}>
					<div className="play-list-miniDetailSongBox">
						<div className="play-list-miniNameSong">Stay Alive</div>
						<div className="play-list-miniAuthorSong">
							Quốc Thuận
						</div>
					</div>
				</Col>
				<Col span={6}>
					<Tooltip
						title="Yêu thích"
						className="user-profile-button-control"
					>
						<HeartOutlined className="user-profile-button-control-style" />
					</Tooltip>
					<Tooltip
						title="Chia sẻ"
						className="user-profile-button-control"
					>
						<ShareAltOutlined className="user-profile-button-control-style" />
					</Tooltip>
					<Tooltip
						title="Xóa"
						className="user-profile-button-control"
					>
						<DeleteOutlined className="user-profile-button-control-style" />
					</Tooltip>
				</Col>
			</Row>

			{/* <Row>
				<Col span={24}>col</Col>
			</Row> */}
		</div>
	);
}
class UserProfile extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }
	componentDidMount() {
		this.props.getUserDetail();
	}
	handClickfetchData = () => {
		console.log('hello iam thuan');
		console.log(this.props.data.name);
	};
	render() {
		return (
			<div>
				<div className="user-profile-title">Thông tin người dùng</div>
				<Row>
					<Col span={6}>
						<div>
							<img
								className="user-profile-user-image"
								src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
							/>
						</div>
						<p className="user-profile-user-name">
							Trần Quốc Thuận
						</p>
					</Col>
					<Col span={18}>
						<Descriptions>
							<Descriptions.Item label="Tên người dùng">
								Quốc Thuận
							</Descriptions.Item>
							<Descriptions.Item label="Số ĐT">
								03633000119
							</Descriptions.Item>
							<Descriptions.Item label="Địa chỉ">
								Q3, HCM
							</Descriptions.Item>
							<Descriptions.Item label="Giới tính">
								Nam
							</Descriptions.Item>
							<Descriptions.Item label="Mô tả">
								Hài hước, vui tính, thích đi du lịch và nghe
								nhạc
							</Descriptions.Item>
						</Descriptions>
					</Col>
				</Row>
				<Tabs defaultActiveKey="1" centered>
					<TabPane
						tab="BÀI HÁT"
						key="1"
						className="user-profile-tab-pane-content"
					>
						<Button onClick={this.handClickfetchData}>
							call data
						</Button>
						<div>{this.props.data.name}</div>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
						<ImageDemo></ImageDemo>
					</TabPane>
					<TabPane tab="PLAYLIST" key="2">
						<UserPlayList></UserPlayList>
					</TabPane>
					<TabPane tab="YÊU THÍCH" key="3">
						<UserPlayList></UserPlayList>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	data: state.reducerUser.data,
	loading: state.reducerUser.loading,
	error: state.reducerUser.error,
});
const mapDispatchToProps = {
	getUserDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
