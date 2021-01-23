import './App.css';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';

import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from 'react-router-dom';
import SongDetail from './pages/SongDetail';
import { Spin } from 'antd';
import routes from './route';

const WaitingComponent = (Component) => (props) => (
	<Suspense fallback={<Spin spinning={true} tip="Loading..." />}>
		<Component {...props} />
	</Suspense>
);
const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isLogin ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/signin',
					}}
				/>
			)
		}
	/>
);
function App(props) {
	const showContent = () => {
		const listPlayList = localStorage.getItem('@PlayList');
		console.log('test');
		console.log(listPlayList);
		if (listPlayList === null) {
			console.log('start set localStorage in App.js');
			localStorage.setItem('@PlayList', []);
		}
		let result = [];
		// let isLogin = props.authenticated;
		const token = props.userToken;
		let isLogin = null;
		if (token != '') {
			isLogin = false;
			console.log('thành công');
			console.log(props.userToken);
		}
		if (token == '') {
			isLogin = true;
			console.log('thất bại 111');
		}
		// let isLogin = true;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				const layout = route.layout;
				if (route.auth && isLogin) {
					console.log('soos lana');
					return (
						<PrivateRoute
							key={index}
							path={route.path}
							exact={route.exact}
							component={WaitingComponent(route.main)}
							isLogin={!isLogin}
						/>
					);
				} else {
					console.log('soos lana 222222');
					// if(isLogin)
					return (
						<RouteWrapper
							key={index}
							path={route.path}
							exact={route.exact}
							isLogin={isLogin}
							component={WaitingComponent(route.main)}
							layout={layout}
						/>
					);
				}
			});
		}
		return <Switch>{result}</Switch>;
	};

	return (
		<Router>
			<div className="App">{showContent()}</div>
		</Router>
	);
}
function RouteWrapper({
	isLogin,
	component: Component,
	layout: Layout,
	exact: exact,
	...rest
}) {
	return (
		<Route
			exact
			{...rest}
			render={(props) => (
				<Layout {...props}>
					<Component {...props} />
				</Layout>
			)}
			// {...rest}
			// render={(props) =>
			// 	isLogin == false ? (
			// 		<Layout {...props}>
			// 			<Component {...props} />
			// 		</Layout>
			// 	) : (
			// 		<Layout {...props}>
			// 			<Component {...props} />
			// 		</Layout>
			// 	)
			// }
		/>
	);
}
// export default App;
const mapStateToProps = (state) => ({
	data: state.reducerLogin.data,
	userToken: state.reducerLogin.userToken,
	loading: state.reducerLogin.loading,
	error: state.reducerLogin.error,
	authenticated: state.reducerLogin.authenticated,
});
// const mapDispatchToProps = {
// 	getLogin,
// };
export default connect(mapStateToProps, null)(App);
