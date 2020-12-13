import React from 'react';
import TimeSlider from 'react-input-slider';
import { Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './style/PlayListWraperStyle.css';
import PlayListContentBox from './PlayListContentBox';
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
					onClick={this.showDrawer}
					icon={<MenuUnfoldOutlined />}
					style={{ backgroundColor: '#282828', color: 'gray' }}
				>
					Danh sách phát (56)
				</Button>
				<Drawer
					title="Danh sách phát"
					placement="right"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
					className="drawer-right"
					bodyStyle={{ backgroundColor: '#1C151B' }}
					headerStyle={{}}
				>
					<div className="drawer-right-text">
						<PlayListContentBox></PlayListContentBox>
					</div>
				</Drawer>
			</div>
		);
	}
}
export default PlayListWraper;
