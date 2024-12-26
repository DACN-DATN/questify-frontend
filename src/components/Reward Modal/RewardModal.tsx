import React, { useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import LeaderboardsIcon from './images/view_leaderboard_button.png';
import ContinueIcon from './images/continue_button.png';
import XPBarIcon from './images/reward_icon_xp.png';
import GemsIcon from './images/reward_icon_gems.png';

interface Reward {
  name: string;
  amount: number;
  icon: string;
}

interface RewardModalProps {
  xpGained: number;
  gemsGained: number;
  level: number;
  progress: number;
  rewards: Reward[];
  onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ xpGained, gemsGained, level, progress, rewards, onClose }) => {
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-orange-200 rounded-lg border-4 border-stone-600 shadow-lg p-6 w-11/12 max-w-lg">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-green-600">CONGRATULATIONS</h1>
        </div>
        <div className="modal-content text-center mb-4">
          <p className="text-lg mb-4">You completed Level {level}</p>
          <div className="rewards grid grid-cols-2 gap-4 mb-4">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="reward-item flex flex-col items-center relative bg-amber-100 border-4 border-yellow-500 rounded-md p-4"
              >
                <div className="icon-container w-16 h-16 flex items-center justify-center">
                  <Image
                    src={getIcon(reward.icon)}
                    alt={reward.name}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="absolute bottom-0 bg-red-500 border-2 border-red-900 px-4 py-1 rounded-full translate-y-1/2">
                  <span className="text-white font-bold">+{reward.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total-rewards">
            <div className="xp-gained mb-4">
              <span className="block text-lg font-semibold">Progress - Level {progress}</span>
              <div className="progress-bar bg-gray-800 border border-3 border-black rounded-full h-4 mt-2">
                <div
                  className="progress bg-green-500 h-4 rounded-full"
                  style={{ width: `${(xpGained / 170) * 100}%` }}
                ></div>
              </div>
              {/* <p className="text-green-500 font-bold mt-2 flex items-center">
                <Image src={XPBarIcon} alt="XP Bar Icon" width={24} height={24} className="mr-2" />
                +{xpGained}
              </p> */}
            </div>
            {/* <div className="gems-gained flex items-center">
              <Image src={GemsIcon} alt="Gems Icon" width={24} height={24} className="mr-2" />
              <p className="text-lg font-semibold">Gems Gained</p>
              <p className="text-green-500 font-bold ml-2">+{gemsGained}</p>
            </div> */}
          </div>
        </div>
        <div className="modal-footer flex justify-between">
          <button className="btn-leaderboards flex items-center gap-2">
            <Image src={LeaderboardsIcon} alt="Leaderboards Icon" height={54} className="mr-2 object-contain" />
          </button>
          <button className="btn-continue flex items-center gap-2" onClick={handleContinueClick}>
            <Image src={ContinueIcon} alt="Continue Icon" height={54} className="mr-2 object-contain" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardModal;