import React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import './style/TimeLineSongStyle.css';
const TimeLineSong = (props) => {
	// const { initialMinute = 100, initialSeconds = 100 } = props;
	// const [minutes, setMinutes] = useState(initialMinute);
	// const [seconds, setSeconds] = useState(initialSeconds);
	// const [newMinutes, setNewMinutes] = useState(0);
	// const [newSeconds, setNewSeconds] = useState(0);
	const [state, setState] = useState({ x: 0.3 });
	useEffect(() => {
		// let myInterval = setInterval(() => {
		// 	if (newSeconds < 60) {
		// 		// setSeconds(seconds + 1);
		// 		setNewSeconds(newSeconds + 1);
		// 	}
		// 	if (newSeconds === 60) {
		// 		if (newMinutes === 60) {
		// 			clearInterval(myInterval);
		// 		} else {
		// 			setNewMinutes(newMinutes + 1);
		// 			setNewSeconds(0);
		// 		}
		// 	}
		// }, 1000);
		// return () => {
		// 	clearInterval(myInterval);
		// };
	});

	return (
		<>
			<div className="timeLineSongGroup">
				{/* <div>{'x: ' + state.x}</div> */}
				<Slider
					// className="timeSliderSongMini"
					axis="x"
					xstep={0.1}
					xmin={0}
					xmax={1}
					x={state.x}
					onChange={({ x }) =>
						setState({ x: parseFloat(x.toFixed(2)) })
					}
					styles={{
						track: {
							backgroundColor: '#e3e3e3',
							height: '10px',
							borderRadius: 50,
							width: '96%',
						},
						active: {
							backgroundColor: '#333',
							height: '10px',
						},
						thumb: {
							// marginTop: '-3px',
							width: '12px',
							height: '12px',
							backgroundColor: '#333',
							borderRadius: 50,
						},
					}}
				/>
			</div>
		</>
	);
};

export default TimeLineSong;
