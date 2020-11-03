import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="container">
			<h1>Home Pageyoyo</h1>
			<p>
				<Link to="/taniarascia">taniarascia</Link> on GitHub.
			</p>
		</div>
	);
}
