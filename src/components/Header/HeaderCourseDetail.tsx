import Image from 'next/image';
import {
  backButtonIcon,
  sectionsIcon,
  lecturesIcon,
  timeIcon,
} from '@/assets/icons/icons';
import style from '@/styles/Header.module.css';

const HeaderCourseDetail: React.FC = () => {
  return (
    <div className={`${style.courseDetail} bg-F5F7FA`}>
      <div className={style.courseDetail__container}>
        <div className={style.courseDetail__part1}>
          <button className={style.courseDetail__backButton}>
            <Image src={backButtonIcon} alt="Back" />
          </button>
          <div className={style.courseDetail__info}>
            <h1 className={style.courseDetail__title}>Data Structures and Algorithms</h1>
            <div className={style.courseDetail__meta}>
              <div className={style.courseDetail__metaItem}>
                <Image src={sectionsIcon} alt="Sections" />
                <span>6 Sections</span>
              </div>
              <div className={style.courseDetail__metaItem}>
                <Image src={lecturesIcon} alt="Lectures" />
                <span>202 Lectures</span>
              </div>
              <div className={style.courseDetail__metaItem}>
                <Image src={timeIcon} alt="Time" />
                <span>19h 37m</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.courseDetail__part2}>
          <button className={style.courseDetail__reviewButton}>Write a Review</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCourseDetail;