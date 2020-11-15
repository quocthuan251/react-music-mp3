import React, { useState, useRef } from 'react';
import TimeSlider from 'react-input-slider';
import BoxContent from '../components/songDetail/BoxContent';
import {
	PlayCircleOutlined,
	PauseOutlined,
	ForwardOutlined,
	BackwardOutlined,
} from '@ant-design/icons';

const SongDetail = () => {
	return (
		<div className="SongDetail">
			<BoxContent />
		</div>
	);
};

export default SongDetail;
