import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import './style/TestStyle.css';
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
								'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Cullah/Cullahmity/Cullah_-_04_-_Lonely_Spider.mp3',
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
