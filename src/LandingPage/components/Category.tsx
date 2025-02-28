import React from 'react';
import styles from './Category.module.css';

import Image from 'next/image';
import LabelIcon from '../images/Label.svg';
import BusinessIcon from '../images/Business.svg';
import FinanceAndAccountingIcon from '../images/FinanceAndAccounting.svg';
import ITAndSoftwareIcon from '../images/ITAndSoftware.svg';
import PersonalDevelopmentIcon from '../images/PersonalDevelopment.svg';
import OfficeProductivityIcon from '../images/OfficeProductivity.svg';
import MarketingIcon from '../images/Marketing.svg';
import PhotographyAndVideoIcon from '../images/PhotographyAndVideo.svg';
import LifestyleIcon from '../images/Lifestyle.svg';
import DesignIcon from '../images/Design.svg';
import HealthAndFitnessIcon from '../images/HealthAndFitness.svg';
import MusicIcon from '../images/Music.svg';

interface CategoryProps {
  backgroundColor: string;
  icon: string; 
  name: string;
  courseCount: number;
}

const CategoryCard: React.FC<CategoryProps> = ({ 
  backgroundColor, 
  icon, 
  name, 
  courseCount 
}) => {
  return (
    <div 
      className={styles.categoryCard}
      style={{ backgroundColor }}
    >
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      <div className={styles.categoryContent}>
        <h3 className={styles.categoryName}>{name}</h3>
        <p className={styles.courseCount}>{courseCount.toLocaleString()} Courses</p>
      </div>
    </div>
  );
};

// Define the Category component
const Category: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Browse top category</h1>
      
      <div className={styles.categoryGrid}>
        <CategoryCard 
          backgroundColor="#EBEBFF"
          icon={LabelIcon}
          name="Label"
          courseCount={63476}
        />
        <CategoryCard 
          backgroundColor="#E1F7E3"
          icon={BusinessIcon}
          name="Business"
          courseCount={52822}
        />
        <CategoryCard 
          backgroundColor="#FFF2E5"
          icon={FinanceAndAccountingIcon}
          name="Finance & Accounting"
          courseCount={33841}
        />
        <CategoryCard 
          backgroundColor="#FFF0F0"
          icon={ITAndSoftwareIcon}
          name="IT & Software"
          courseCount={22649}
        />
        <CategoryCard 
          backgroundColor="#FFF2E5" 
          icon={PersonalDevelopmentIcon}
          name="Personal Development"
          courseCount={20126}
        />
        <CategoryCard 
          backgroundColor="#F5F7FA"
          icon={OfficeProductivityIcon}
          name="Office Productivity"
          courseCount={13932}
        />
        <CategoryCard 
          backgroundColor="#EBEBFF"
          icon={MarketingIcon}
          name="Marketing"
          courseCount={12068}
        />
        <CategoryCard 
          backgroundColor="#F5F7FA"
          icon={PhotographyAndVideoIcon}
          name="Photography & Video"
          courseCount={6196}
        />
        <CategoryCard 
          backgroundColor="#FFF2E5"
          icon={LifestyleIcon}
          name="Lifestyle"
          courseCount={2736}
        />
        <CategoryCard 
          backgroundColor="#FFEEE8"
          icon={DesignIcon}
          name="Design"
          courseCount={2600}
        />
        <CategoryCard 
          backgroundColor="#E1F7E3"
          icon={HealthAndFitnessIcon}
          name="Health & Fitness"
          courseCount={1678}
        />
        <CategoryCard 
          backgroundColor="#FFF2E5"
          icon={MusicIcon}
          name="Music"
          courseCount={959}
        />
      </div>
      
      <div className={styles.footer}>
        <div className={styles.footerText}>We have more category & subcategory.</div>
        <div className={styles.browseButton}>
          <div className={styles.browseText}>Browse All</div>
          <div className={styles.arrowIcon}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25 12H20.75" stroke="#FF6636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 5.25L20.75 12L14 18.75" stroke="#FF6636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;