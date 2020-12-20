import React from 'react';
import { Link } from 'react-router-dom';
import Baner from '../../components/home/Baner';
import Content from '../../components/home/Content';
export default function HomePage() {
	return (
		<div className="container">
			<Baner></Baner>
			<Content></Content>
		</div>
	);
}
