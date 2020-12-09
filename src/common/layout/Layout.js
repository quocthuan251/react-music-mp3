import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Spin } from 'antd';
import HeaderLayout from '../../components/header/Header';
import MiniPlayerControls from '../../common/tabMiniPlayMusic/MainContainer';
import './LayoutStyle.css';
const { Header, Content, Footer } = Layout;
// import HeaderLayout from './components/header/Header';
const MainLayout = ({ children }) => (
	<Layout>
		<Header
			style={{
				position: 'fixed',
				zIndex: 1,
				width: '100%',
				backgroundColor: '#040404',
			}}
		>
			<HeaderLayout> </HeaderLayout>
		</Header>
		<Content
			className="site-layout"
			style={{
				padding: '0 50px',
				marginTop: 64,
				color: '#FFFFFF',
				backgroundColor: '#121212',
				// position: 'relative',
			}}
		>
			<div

			// style={{ padding: 24, minHeight: 380 }}
			>
				{children}
			</div>
		</Content>
		{/* <h1>helllllllllllllllll</h1> */}
		<Footer
			className="footer-main"
			style={{
				position: '-webkit-sticky',
				position: 'sticky',
				zIndex: 1,
				bottom: '0%',
				width: '100%',
				height: '13vh',
				backgroundColor: '#282828',
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

const LoginLayout = ({ children }) => <div>{children}</div>;

export { MainLayout, LoginLayout };
