import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SongDetail from './pages/SongDetail';
import HeaderLayout from './components/header/Header';
import MiniPlayerControls from './common/tabMiniPlayMusic/MainContainer';
// import HashLoader from 'react-spinners/HashLoader';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Spin } from 'antd';
import routes from './route';

const { Header, Content, Footer } = Layout;

const WaitingComponent = (Component) => (props) => (
	<Suspense fallback={<Spin spinning={true} tip="Loading..." />}>
		<Component {...props} />
	</Suspense>
);

function App() {
	const showContent = () => {
		let result = [];
		let isLogin = true;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				if (route.auth && !isLogin) {
					return <HomePage></HomePage>;
				}

				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={WaitingComponent(route.main)}
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
				<HeaderLayout> </HeaderLayout>
			</Header>
			<Content
				className="site-layout"
				style={{
					padding: '0 50px',
					marginTop: 64,
					color: 'black',
					backgroundColor: '#FCFCFC',
					// position: 'relative',
				}}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					{/* <Router>
						<Switch>
							<Route exact path="/" component={HomePage} /> */}
					{/* <Route path="/:id" component={UserPage} /> */}
					{/* <Route path="/songdetail" component={SongDetail} />
						</Switch>
					</Router> */}
					<Router>
						<div className="App">{showContent()}</div>
					</Router>
				</div>
			</Content>
			<Footer
				className="footer"
				style={{
					position: '-webkit-sticky',
					position: 'sticky',
					zIndex: 1,
					bottom: '0%',
					width: '100%',
					height: '13vh',
					backgroundColor: '#DCD1AD',
					// padding: 5,
					justifyContent: 'center',
					justifyItems: 'center',
					alignItems: 'center',
					padding: 0,
				}}
			>
				<MiniPlayerControls></MiniPlayerControls>
			</Footer>
		</Layout>
	);
}

export default App;
