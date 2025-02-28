import React from 'react';
import styles from './PageHeader.module.css';
import { useRouter } from 'next/router';
import bgImage from '../images/bg1.png';

const PageHeader: React.FC = () => {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push('/islands');
    // router.push('/signup');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          Master skills through<br/>
          Gamified learning <br/>
          Anywhere, anytime
        </div>
        <div className={styles.description}>
          Our platform empowers educators to create dynamic courses and students to unlock their potential with interactive, game-based learning
        </div>
        <div 
          className={styles.ctaButton} 
          onClick={handleCreateAccount}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCreateAccount();
            }
          }}
        >
          <div className={styles.buttonText}>Create Account</div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 900 548" 
          fill="none" 
          preserveAspectRatio="xMinYMin slice" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{position: "absolute", right: 0}}
        >
          <path d="M69.7288 0L900 0V548H0L69.7288 0Z" fill="url(#pattern0_6505_42111)"/>
          <defs>
            <pattern id="pattern0_6505_42111" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_6505_42111" transform="matrix(0.000520833 0 0 0.00101429 0 0.00702555)"/>
            </pattern>
            <image id="image0_6505_42111" xlinkHref={bgImage.src} width="1920" height="980"/>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;