import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
	height: '200px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};
const urlImg = [
	'https://photo-zmp3.zadn.vn/banner/3/4/5/9/3459ecedcbfccdf942222d410ab0305e.jpg',
	'https://photo-zmp3.zadn.vn/banner/1/2/e/8/12e8d932aa97e27494c6caec32eb7ee0.jpg',
	'https://photo-zmp3.zadn.vn/banner/4/3/3/3/4333242cc0b855c34fff0b07b79c729f.jpg',
	'https://photo-zmp3.zadn.vn/banner/b/5/6/9/b5690c31b182580d4f5593f336452e60.jpg',
];
const listBaner = urlImg.map((value, index) => {
	return (
		<li key={index}>
			<div>
				<img
					src={value}
					alt="my image"
					style={{
						width: 1200,
						cursor: 'pointer',
					}}
				/>
			</div>
		</li>
	);
});
export class Baner extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			// x: "This is x from state",
			// y: "This is y from state"
		};
	}
	render() {
		return (
			<div>
				<Carousel autoplay>{listBaner}</Carousel>
			</div>
		);
	}
}
export default Baner;
