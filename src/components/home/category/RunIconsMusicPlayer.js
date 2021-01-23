import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
// import './style/TestStyle.css';
// const rearrangedPlayer = [
// 	{
// 		className: 'adele',
// 		innerComponents: [
// 			{
// 				type: 'play',
// 				style: {
// 					width: '100%',
// 					justifyContent: 'center',
// 					filter: 'invert(100%)',
// 					opacity: '0.4',
// 				},
// 			},
// 		],
// 	},
// ];
let audioFiles = [
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
		title: 'Hey Jude',
		artist: 'The Beatles',
	},
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
		title: 'Uptown Funk ft. Bruno Mars',
		artist: 'Mark Ronson',
	},
	{
		src:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
		title: 'Rolling In The Deep',
		artist: 'Adele',
	},
];
const iconStyle = { width: 'fit-content' },
	rearrangedPlayer = [
		{
			className: 'tier-top',
			style: { padding: '5px 0' },
			innerComponents: [
				{
					type: 'play',
					style: iconStyle,
				},
			
			],
		},
		
	];
class RunIconsMusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			
				<AudioPlayer
					audioFiles={audioFiles}
					rearrange={rearrangedPlayer}
					playerWidth="10rem"
					iconSize="1.5rem"
					fontSize="1rem"
					sliderClass="invert-blue-grey"
				/>
	
		);
	}
}
export default RunIconsMusicPlayer;
