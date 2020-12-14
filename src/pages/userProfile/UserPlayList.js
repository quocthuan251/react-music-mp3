import React from 'react';
import { List, Card } from 'antd';

const data = [
	{
		title: 'Title 1',
	},
	{
		title: 'Title 2',
	},
	{
		title: 'Title 3',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
	{
		title: 'Title 4',
	},
];
class UserPlayList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div style={{ color: 'white' }}>
				<List
					grid={{ gutter: 16, column: 4 }}
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Card title={item.title}>Card content</Card>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}
export default UserPlayList;
