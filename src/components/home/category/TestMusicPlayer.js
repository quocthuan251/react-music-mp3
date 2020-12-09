import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import './style/TestStyle.css';
import NgayXuanLongPhungSumVay from './NgayXuanLongPhungSumVay.mp3';
const rearrangedPlayer = [
	{
		className: 'adele',
		innerComponents: [
			{
				type: 'play',
				style: {
					width: '100%',
					justifyContent: 'center',
					filter: 'invert(100%)',
					opacity: '0.4',
				},
			},
		],
	},
];
class TestMusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<AudioPlayer
					audioFiles={[
						{
							src:
								'http://vnso-zn-15-tf-mp3-320s1-zmp3.zadn.vn/b388618ac9cd209379dc/1596613103323736812?authen=exp=1607597821~acl=/b388618ac9cd209379dc/*~hmac=3d5aae9d756d9eff086a3265a50d137d',
							title: 'Rolling In The Deep',
							artist: 'Adele',
						},
					]}
					rearrange={rearrangedPlayer}
					playerWidth="10rem"
					iconSize="9rem"
				/>
        
			</div>
		);
	}
}
export default TestMusicPlayer;
