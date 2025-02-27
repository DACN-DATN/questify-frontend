import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './rewardModal.module.css';
import LeaderboardsIcon from './images/view_leaderboard_button.png';
import ContinueIcon from './images/continue_button.png';
import XPBarIcon from './images/reward_icon_xp.png';
import GemsIcon from './images/reward_icon_gems.png';
import RewardPlateWide from './images/reward_plate_wide.png';
import VictoryHero from './images/victory_hero.png';
import VictoryWord from './images/victory_word.png';
import RewardPlate from './images/reward_plate_wide.png';
import VictoryModalShelf from './images/victory_modal_shelf.png';

interface Reward {
	type: 'xp' | 'gems' | 'item';
	amount?: number;
	itemName?: string;
	icon: string;
}

interface AchievementPanel {
	id: string;
	description: string;
	rewards: Reward[];
}

interface RewardModalProps {
	level: number;
	progress: number;
	achievements: AchievementPanel[];
	onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ level, progress, achievements, onClose }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleContinueClick = () => {
		router.push('/levels');
	};

	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'xp':
				return XPBarIcon;
			case 'gems':
				return GemsIcon;
			default:
				return '';
		}
	};

	const calculateTotals = () => {
		let totalXP = 0;
		let totalGems = 0;

		achievements.forEach((achievement) => {
			achievement.rewards.forEach((reward) => {
				if (reward.type === 'xp') totalXP += reward.amount || 0;
				if (reward.type === 'gems') totalGems += reward.amount || 0;
			});
		});

		return { totalXP, totalGems };
	};

	const { totalXP, totalGems } = calculateTotals();

	return (
		<div id="reward-modal" className={styles.modal}>
			<div className={styles.modalDialog}>
				<div ref={modalRef} className={styles.backgroundWrapper}>
					<div className={styles.modalContent}>
						{/* <div className={styles.modalHeader}>
              <div className={styles.victoryHeader}>
                <div className={styles.victoryTitle}>
                  <Image
                    src={VictoryWord}
                    alt="Victory"
                    draggable={false}
                    width={378}
                    height={60}
                  />
                </div>
              </div>
            </div> */}
						<div className={styles.modalBody}>
							{achievements.map((achievement) => (
								<div key={achievement.id} className={styles.achievementPanel}>
									<div className={styles.achievementDescription}>{achievement.description}</div>
									<div className={styles.achievementRewards}>
										{achievement.rewards.map((reward, index) => (
											<div key={index} className={styles.rewardPanel}>
												<div className={styles.rewardImageContainer}>
													<Image
														src={getIcon(reward.icon)}
														alt={
															reward.type === 'item'
																? 'New Item'
																: `${reward.type.toUpperCase()} Gained`
														}
														width={45} // <- Adjust icon width
														height={45} // <- Adjust icon height
													/>
												</div>
												<div className={styles.rewardText}>
													{reward.type === 'item' ? reward.itemName : `+${reward.amount}`}
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
						<div className={styles.modalFooter}>
							<div className={`${styles.totalWrapper} ${styles.xpWrapper}`}>
								<div className={styles.totalCount}>{totalXP}</div>
								<div className={styles.totalLabel}>XP Gained - Level {level}</div>
								<div className={styles.xpBarOuter}>
									<div className={styles.xpBarAlreadyAchieved} style={{ width: `${progress}%` }} />
									<div className={styles.xpBarTotal} style={{ width: `${progress}%` }} />
								</div>
							</div>
							<div className={`${styles.totalWrapper} ${styles.gemWrapper}`}>
								<div className={styles.totalCount}>{totalGems}</div>
								<div className={styles.totalLabel}>Gems Gained</div>
							</div>
							<div className={styles.buttonContainer}>
								<button
									className={styles.actionButton}
									// onClick={handleLeaderboardClick}
								>
									<Image
										src={LeaderboardsIcon}
										alt="View Leaderboard"
										width={201}
										height={60}
										draggable={false}
									/>
								</button>
								<button className={styles.actionButton} onClick={handleContinueClick}>
									<Image
										src={ContinueIcon}
										alt="Continue"
										width={263}
										height={60}
										draggable={false}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RewardModal;
