import React, { lazy } from 'react';
import HomeLayout from './common/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const SongDetailPage = lazy(() => import('./pages/SongDetail'));
const LoginPage = lazy(() => import('./pages/signin/Signin'));
const MusicChart = lazy(() => import('./pages/charts/MusicChart'));
const NewPlayList = lazy(() => import('./pages/newReleases/NewPlayList'));
const SingerDeatil = lazy(() => import('./pages/singers/SingerDetail'));
const Artist = lazy(() => import('./components/singer/Artist'));

const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <HomePage router={props} />,
	},
	{
		path: '/top-new',
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <MusicChart router={props} />,
	},
	{
		path: '/new-release',
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <NewPlayList router={props} />,
	},
	{
		path: '/singer',
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <SingerDeatil router={props} />,
	},
	{
		path: `/singer/:id`,
		exact: true,
		auth: false,
		layout: HomeLayout,
		main: (props) => <Artist router={props} />,
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
