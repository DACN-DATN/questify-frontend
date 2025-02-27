import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '@/styles/Islands.module.css';
import { PlayButtonImage } from '../assets/images/images';

interface IslandProps {
	svg: string;
	name: string;
	progress: string;
	status: string;
}

const Island: React.FC<IslandProps> = ({ svg, name, progress, status }) => {
	const router = useRouter();

	const handlePlayButtonClick = () => {
		console.log('Play button clicked');
		router.push('/levels');
	};

	return (
		<div className={style.island}>
			<Image src={svg} alt={name} className={style.island__image} />
			<button
				className={`${style.play__button} ${status === 'locked' ? style.locked__play__button : ''}`}
				onClick={handlePlayButtonClick}
				disabled={status === 'locked'}
			>
				<div className={style.island__name}>{name}</div>
				<div className={style.island__progress}>{progress}</div>
				<Image src={PlayButtonImage} alt="Play" className={style.play__button__image} />
			</button>
		</div>
	);
};

export default Island;
