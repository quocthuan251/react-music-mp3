import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import HeaderLayout from './components/header/Header';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Spin } from 'antd';
import routes from './route';

const { Header, Content, Footer } = Layout;

function App() {
	const showContent = () => {
		let result = [];
		let isLogin = true;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				const layout = route.layout;
				console.log('hllo' + result);

				if (route.auth && !isLogin) {
					return <HomePage></HomePage>;
				}

				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			});
		}
		return <Switch>{result}</Switch>;
	};

	return (
		<Layout>
			<Header
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100%',
					backgroundColor: 'white',
				}}
			>
				<div className="logo" />
				<HeaderLayout> </HeaderLayout>
			</Header>
			<Content
				className="site-layout"
				style={{ padding: '0 50px', marginTop: 64 }}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					<Router>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/:id" component={UserPage} />
						</Switch>
					</Router>
					{/* <Router>
						<div className="App">{showContent()}</div>
					</Router> */}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				MUSIC WEB ©2020 Created by Quoc Thuan
			</Footer>
		</Layout>
	);
}

export default App;
