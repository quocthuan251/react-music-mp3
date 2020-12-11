import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col, Divider, Slider, Popover, Button, Tooltip } from 'antd';
import {
	SoundOutlined,
	AudioFilled,
	VideoCameraOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import './style/VolumeStyle.css';
const style = { padding: '0px 0' };
const style2 = {
	display: 'inline-block',
	height: 100,
	marginLeft: 0,
};
const content = (
	<div style={style2}>
		<Slider vertical defaultValue={30} />
	</div>
);
class VolumeContainer extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			x: 'This is x from state',
		};
	}
	render() {
		return (
			<div>
				<Row>
					<div className="volumeGroup">
						<div className="extraControls">
							<Popover content={content}>
								<Button
									shape="circle"
									icon={<SoundOutlined />}
									style={{ backgroundColor: '#b3b3b3' }}
								></Button>
							</Popover>
						</div>
						<div className="extraControls">
							<Tooltip title="search">
								<Button
									shape="circle"
									icon={<AudioFilled />}
									style={{ backgroundColor: '#b3b3b3' }}
								/>
							</Tooltip>
						</div>
						<div className="extraControls">
							<Tooltip title="Xem video">
								<Button
									shape="circle"
									icon={<VideoCameraOutlined />}
									style={{ backgroundColor: '#b3b3b3' }}
								/>
							</Tooltip>
						</div>
						<div className="extraControls">
							<Tooltip title="Xem thêm">
								<Button
									shape="circle"
									icon={<EllipsisOutlined />}
									style={{ backgroundColor: '#b3b3b3' }}
								/>
							</Tooltip>
						</div>
					</div>
				</Row>
			</div>
		);
	}
}
export default VolumeContainer;
