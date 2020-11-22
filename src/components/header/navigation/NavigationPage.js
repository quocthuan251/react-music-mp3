import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Space, Typography, Divider, Button } from 'antd';
export class NavigationPage extends Component {
	state = {};

	render() {
		return (
			<>
				<div>
					<Space split={<Divider type="vertical" />}>
						<Button type="link">MP3 CHART</Button>
						<Button type="link">MỚI PHÁT HÀNH</Button>
						<Button type="link">TOP 100</Button>
					</Space>
				</div>
			</>
		);
	}
}

export default NavigationPage;
