import React from 'react';
import TimeSlider from 'react-input-slider';
import { Row, Col, Divider, Slider, Popover, Button, Tooltip } from 'antd';
import {
	SoundOutlined,
	AudioFilled,
	VideoCameraOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
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
class VolumnContainer extends React.Component {
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
				<Row
					gutter={{ xs: 0, sm: 0, md: 0, lg: 5 }}
					// style={{ textAlign: 'center' }}
				>
					<Col className="gutter-row" span={6}>
						<Popover content={content}>
							<Button
								type="primary"
								icon={<SoundOutlined />}
							></Button>
						</Popover>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<Tooltip title="search">
								<Button
									type="primary"
									shape="circle"
									icon={<AudioFilled />}
								/>
							</Tooltip>
						</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<Tooltip title="Xem video">
								<Button
									type="primary"
									shape="circle"
									icon={<VideoCameraOutlined />}
								/>
							</Tooltip>
						</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<Tooltip title="Xem thêm">
								<Button
									type="primary"
									shape="circle"
									icon={<EllipsisOutlined />}
								/>
							</Tooltip>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
export default VolumnContainer;
