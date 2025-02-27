// src/components/LevelItem.js
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PlayButton2 from '../images/PlayButton2.svg';
import PlayButton1 from '../images/PlayButton1.svg';
import ScoreButton from '../images/ScoreButton.svg';
import PassedIcon from '../images/star.png';
import CurrentIcon from '../images/level-banner-unstarted.png';
import BronzeChestIcon from '../images/bronze-chest.png';
import LevelModal from './LevelModal';
import ScoreModal from './ScoreModal';
import { players } from '../data/playerData';

interface LevelItemProps {
	index: number;
	name: string;
	description: string;
	position: { x: number; y: number };
	progress: 'passed' | 'current' | 'not passed';
}

const LevelItem: React.FC<LevelItemProps> = ({ index, name, description, position, progress }) => {
	const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
	const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
	const [test, setTest] = useState(false);
	const [modalContent, setModalContent] = useState<{
		name: string;
		description: string;
		progress: 'passed' | 'current' | 'not passed';
	}>({ name: '', description: '', progress: 'not passed' });
	const [corner, setCorner] = useState('bottom-left');

	const nodeRef = useRef<HTMLDivElement>(null);
	const levelModalRef = useRef<HTMLDivElement>(null);
	const scoreModalRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const handleNodeClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setModalContent({ name, description, progress });
		setCorner(determineCorner(position));
		setIsLevelModalOpen(true);
		setTest(true);
		console.log('Clicked on node');
	};

	const determineCorner = (nodePosition: { x: number; y: number }) => {
		return 'top-left';
	};

	const handleLevelModalClose = () => {
		setIsLevelModalOpen(false);
	};

	const handleScoreModalClose = () => {
		setIsScoreModalOpen(false);
	};

	const getModalPosition = () => {
		if (nodeRef.current) {
			const nodeRect = nodeRef.current.getBoundingClientRect();

			let offsetX = 0;
			let offsetY = 0;

			switch (corner) {
				case 'bottom-right':
					offsetX = nodeRect.width;
					offsetY = nodeRect.height;
					break;
				case 'top-right':
					offsetX = nodeRect.width;
					offsetY = -nodeRect.height;
					break;
				case 'bottom-left':
					offsetX = -nodeRect.width;
					offsetY = nodeRect.height;
					break;
				case 'top-left':
					offsetX = -nodeRect.width;
					offsetY = -nodeRect.height;
					break;
				default:
					break;
			}

			return {
				left: nodeRect.left + offsetX + window.scrollX,
				top: nodeRect.top + offsetY + window.scrollY,
			};
		}
		return { left: 0, top: 0 };
	};

	const handleScoreModalClickOutside = (event: MouseEvent) => {
		if (scoreModalRef.current && !scoreModalRef.current.contains(event.target as Node)) {
			setIsScoreModalOpen(false); // Close ScoreModal when clicked outside
		}
	};

	const handleLevelModalClickOutside = (event: MouseEvent) => {
		if (levelModalRef.current && !levelModalRef.current.contains(event.target as Node)) {
			setIsLevelModalOpen(false); // Close LevelModal when clicked outside
		}
	};

	useEffect(() => {
		console.log('Modal Content Updated:', modalContent);
	}, [modalContent]);

	useEffect(() => {
		console.log('isLevelModalOpen Updated:', isLevelModalOpen);
	}, [isLevelModalOpen]);

	useEffect(() => {
		console.log('Test state Updated:', test);
	}, [test]);

	// useEffect to close ScoreModal when clicked outside
	useEffect(() => {
		if (isScoreModalOpen) {
			document.addEventListener('mousedown', handleScoreModalClickOutside);
		} else {
			document.removeEventListener('mousedown', handleScoreModalClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleScoreModalClickOutside);
		};
	}, [isScoreModalOpen]);

	// useEffect to close LevelModal when clicked outside
	useEffect(() => {
		if (isLevelModalOpen) {
			document.addEventListener('mousedown', handleLevelModalClickOutside);
		} else {
			document.removeEventListener('mousedown', handleLevelModalClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleLevelModalClickOutside);
		};
	}, [isLevelModalOpen]);

	const handlePlayClick = () => {
		switch (progress) {
			case 'passed':
				router.push('/problems/jump-game');
				break;
			case 'current':
				router.push('/challenges');
				break;
			default:
				return null;
		}
	};

	// render the button for level description based on the progress
	const renderButtons = () => {
		switch (progress) {
			case 'not passed':
				return null; // No buttons for 'not passed' levels
			case 'current':
				return (
					<button
						className="play-button flex items-center gap-2 hover:scale-105 transition-transform"
						onClick={handlePlayClick}
					>
						<Image src={PlayButton1} alt="Play Button" width={150} height={100} />
					</button>
				);
			case 'passed':
				return (
					<>
						<button
							className="score-button flex items-center gap-2 hover:scale-105 transition-transform"
							onClick={() => setIsScoreModalOpen(true)}
						>
							<Image src={ScoreButton} alt="Score Button" width={200} height={100} />
						</button>
						<button
							className="play-button flex items-center gap-2 hover:scale-105 transition-transform"
							onClick={handlePlayClick}
						>
							<Image src={PlayButton2} alt="Play Button" width={200} height={100} />
						</button>
					</>
				);
			default:
				return null;
		}
	};

	// render the level node icon based on the progress
	const getNodeIcon = () => {
		switch (progress) {
			case 'passed':
				return (
					<div
						className="w-6 h-6 rounded-full bg-red-500 border-2 border-yellow-500 flex justify-center items-center hover:scale-125 transition-transform"
						title="Passed"
					>
						<Image src={PassedIcon} className="w-6 h-6" alt="Passed Icon" width={24} height={24} />
					</div>
				);
			case 'current':
				return (
					<div
						className="w-6 h-6 rounded-full bg-yellow-300 border-2 border-green-700 flex justify-center items-center relative hover:scale-125 transition-transform"
						title="Current"
					>
						<Image
							src={CurrentIcon}
							alt="Current"
							className="absolute w-12 h-15" // Adjust size of the flag
							width={48}
							height={60}
							style={{
								bottom: 8, // Align the root of the flag (the bottom) to the center of the circle
							}}
						/>
					</div>
				);
			case 'not passed':
				return (
					<div
						className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-500 flex justify-center items-center hover:scale-125 transition-transform"
						title="Not Passed"
					>
						<Image
							src={BronzeChestIcon}
							alt="Not Passed"
							className="w-4 h-4"
							width={16}
							height={16}
						/>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div
			id={`level-${index}`}
			className="level-item flex items-center justify-center"
			style={{
				position: 'absolute',
				left: `${position.x}%`,
				top: `${position.y}%`,
			}}
		>
			{/* Node icon */}
			<div
				className={`node cursor-pointer rounded-full`}
				onClick={handleNodeClick}
				style={{
					width: '30px',
					height: '30px',
				}}
			>
				{getNodeIcon()}
			</div>

			{/* Level Description Modal */}
			<LevelModal
				isModalOpen={isLevelModalOpen}
				modalPosition={getModalPosition()}
				modalContent={modalContent}
				onClose={handleLevelModalClose}
				renderButtons={renderButtons}
			/>

			{/* Score Modal */}
			<ScoreModal
				ref={scoreModalRef}
				isScoreModalOpen={isScoreModalOpen}
				onClose={handleScoreModalClose}
				players={players}
			/>
		</div>
	);
};

export default LevelItem;
