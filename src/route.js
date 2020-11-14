import React, { lazy } from 'react';
import HomeLayout from './common/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const SongDetailPage = lazy(() => import('./pages/SongDetail'));
const LoginPage = lazy(() => import('./pages/signin/Signin'));

const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <HomePage router={props} />,
	},
	// {
	// 	path: '/:id',
	// 	exact: false,
	// 	auth: false,
	// 	layout: HomeLayout,
	// 	main: (props) => <UserPage router={props} />,
	// },
	{
		path: '/songdetail',
		exact: false,
		auth: false,
		layout: HomeLayout,
		main: (props) => <SongDetailPage router={props} />,
	},
	// {
	// 	path: '/signin',
	// 	exact: false,
	// 	auth: false,
	// 	layout: HomeLayout,
	// 	main: (props) => <LoginPage router={props} />,
	// },
];

export default route;
