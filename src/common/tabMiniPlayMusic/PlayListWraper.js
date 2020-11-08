import React from 'react';
import TimeSlider from 'react-input-slider';
import { Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

class PlayListWraper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
		console.log('hello');
	};
	onClose = () => {
		this.setState({
			visible: false,
		});
	};
	render() {
		return (
			<div>
				<Button
					type="primary"
					onClick={this.showDrawer}
					icon={<MenuUnfoldOutlined />}
				>
					Danh sách phát (56)
				</Button>
				<Drawer
					title="Danh sách phát"
					placement="right"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<p>Lemon tree...</p>
					<p>Từ khi gặp lại...</p>
					<p>Trịnh Công Sơn...</p>
				</Drawer>
			</div>
		);
	}
}
export default PlayListWraper;
