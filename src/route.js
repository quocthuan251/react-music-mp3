import React, { lazy } from 'react';
import { MainLayout, LoginLayout } from './common/layout/Layout';
const HomePage = lazy(() => import('./pages/HomePage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const SongDetailPage = lazy(() => import('./pages/SongDetail'));
const LoginPage = lazy(() => import('./pages/signin/Signin'));
const MusicChart = lazy(() => import('./pages/charts/MusicChart'));
const NewPlayList = lazy(() => import('./pages/newReleases/NewPlayList'));
const SingerDeatil = lazy(() => import('./pages/singers/SingerDetail'));
const Artist = lazy(() => import('./components/singer/Artist'));
const SignupPage = lazy(() => import('./pages/signup/signup'));
const Error404 = lazy(() => import('./common/errorPage/Error404'));
const Test = lazy(() => import('./components/home/category/TestMusicPlayer'));
const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <HomePage router={props} />,
	},
	{
		path: '/top-new',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <MusicChart router={props} />,
	},
	{
		path: '/new-release',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <NewPlayList router={props} />,
	},
	{
		path: '/singer',
		exact: true,
		auth: true,
		layout: MainLayout,
		main: (props) => <SingerDeatil router={props} />,
	},
	{
		path: `/singer/:id`,
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <Artist router={props} />,
	},
	{
		path: '/signin',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <LoginPage router={props} />,
	},
	// {
	// 	path: '/:id',
	// 	exact: false,
	// 	auth: false,
	//
	// 	main: (props) => <UserPage router={props} />,
	// },
	{
		path: '/songdetail',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SongDetailPage router={props} />,
	},
	{
		path: '/register',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <SignupPage router={props} />,
	},
	{
		path: '/filenotfoud',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
	{
		path: '/test',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <Test router={props} />,
	},
	{
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
];

export default route;
