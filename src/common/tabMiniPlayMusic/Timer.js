import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props) => {
	const { initialMinute = 100, initialSeconds = 100 } = props;
	const [minutes, setMinutes] = useState(initialMinute);
	const [seconds, setSeconds] = useState(initialSeconds);
	const [newMinutes, setNewMinutes] = useState(0);
	const [newSeconds, setNewSeconds] = useState(0);

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (newSeconds < 60) {
				// setSeconds(seconds + 1);
				setNewSeconds(newSeconds + 1);
			}
			if (newSeconds === 60) {
				if (newMinutes === 60) {
					clearInterval(myInterval);
				} else {
					setNewMinutes(newMinutes + 1);
					setNewSeconds(0);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div style={{ fontSize: 12, fontWeight: 600 }}>
			{minutes === 0 && seconds === 0 ? (
				<p>lỗi time rồi</p>
			) : (
				<div>
					{newMinutes < 10 ? `0${newMinutes}` : newMinutes}:
					{newSeconds < 10 ? `0${newSeconds}` : newSeconds}
				</div>
			)}
		</div>
	);
};

export default Timer;
