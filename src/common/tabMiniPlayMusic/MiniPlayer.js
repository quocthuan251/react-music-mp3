import React from 'react';
import TimeSlider from 'react-input-slider';

import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
	RetweetOutlined,
	SwapOutlined,
} from '@ant-design/icons';

const iconStyle = {
	fontSize: '26px',
};
class MiniPlayer extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			x: 'This is x from state',
			y: 'This is y from state',
		};
	}
	render() {
		return (
			<div>
				<BackwardOutlined style={iconStyle} />
				{/* <PauseOutlined style={iconStyle} /> */}
				<PlayCircleOutlined
					style={{
						fontSize: '36px',
						margin: '10px',
					}}
				/>
				<ForwardOutlined style={iconStyle} />
				<SwapOutlined style={iconStyle} />
				<RetweetOutlined style={iconStyle} />
			</div>
		);
	}
}
export default MiniPlayer;
