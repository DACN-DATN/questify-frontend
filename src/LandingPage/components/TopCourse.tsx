import React from 'react';
import styles from './TopCourse.module.css';
import Image from 'next/image';

// Import star icon for ratings
import StarIcon from '../images/Star.svg';

// Import course images
import MachineLearningImage from '../images/Course Images.png';
import WebDevImage from '../images/Course Images (1).png';
import PythonImage from '../images/Course Images (2).png';
import DigitalMarketingImage from '../images/Course Images (3).png';
import ReikiImage from '../images/Course Images (4).png';
import StockTradingImage from '../images/Course Images (5).png';
import ExcelImage from '../images/Course Images (6).png';
import PythonMegaImage from '../images/Course Images (7).png';
import CopywritingImage from '../images/Course Images (8).png';
import AnalyticsImage from '../images/Course Images (9).png';

interface CourseCardProps {
  image: any; // StaticImageData type from Next.js
  category: string;
  categoryColor: string;
  categoryTextColor: string;
  price: number;
  title: string;
  rating: number;
  students: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  category,
  categoryColor,
  categoryTextColor,
  price,
  title,
  rating,
  students
}) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.imageWrapper}>
        <Image 
          className={styles.courseImage} 
          src={image} 
          alt={title} 
          width={244} 
          height={183}
          placeholder="blur"
        />
      </div>
      <div className={styles.courseContent}>
        <div className={styles.courseHeader}>
          <div 
            className={styles.categoryTag}
            style={{ 
              backgroundColor: categoryColor,
              color: categoryTextColor 
            }}
          >
            {category}
          </div>
          <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.courseTitle}>{title}</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.courseFooter}>
        <div className={styles.rating}>
          <Image src={StarIcon} alt="Rating" width={16} height={16} />
          <span>{rating.toFixed(1)}</span>
        </div>
        <div className={styles.students}>
          <span className={styles.studentCount}>{students.toLocaleString()}</span>
          <span className={styles.studentText}> students</span>
        </div>
      </div>
    </div>
  );
};

const TopCourse: React.FC = () => {
  // Course data
  const courses = [
    {
      id: 1,
      image: MachineLearningImage,
      category: 'Design',
      categoryColor: '#FFEEE8',
      categoryTextColor: '#993D20',
      price: 57,
      title: 'Machine Learning A-Z™: Hands-On Python & R In Data...',
      rating: 5.0,
      students: 265700
    },
    {
      id: 2,
      image: WebDevImage,
      category: 'Developments',
      categoryColor: '#EBEBFF',
      categoryTextColor: '#342F98',
      price: 57,
      title: 'The Complete 2021 Web Development Bootcamp',
      rating: 5.0,
      students: 265700
    },
    {
      id: 3,
      image: PythonImage,
      category: 'Business',
      categoryColor: '#E1F7E3',
      categoryTextColor: '#15711F',
      price: 57,
      title: 'Learn Python Programming Masterclass',
      rating: 5.0,
      students: 265700
    },
    {
      id: 4,
      image: DigitalMarketingImage,
      category: 'Marketing',
      categoryColor: '#EBEBFF',
      categoryTextColor: '#342F98',
      price: 57,
      title: 'The Complete Digital Marketing Course - 12 Courses in 1',
      rating: 5.0,
      students: 265700
    },
    {
      id: 5,
      image: ReikiImage,
      category: 'IT & Software',
      categoryColor: '#FFF0F0',
      categoryTextColor: '#882929',
      price: 57,
      title: 'Reiki Level I, II and Master/Teacher Program',
      rating: 5.0,
      students: 265700
    },
    {
      id: 6,
      image: StockTradingImage,
      category: 'Music',
      categoryColor: '#FFF2E5',
      categoryTextColor: '#65390C',
      price: 57,
      title: 'The Complete Foundation Stock Trading Course',
      rating: 5.0,
      students: 265700
    },
    {
      id: 7,
      image: ExcelImage,
      category: 'Marketing',
      categoryColor: '#EBEBFF',
      categoryTextColor: '#342F98',
      price: 57,
      title: 'Beginner to Pro in Excel: Financial Modeling and Valuati...',
      rating: 5.0,
      students: 265700
    },
    {
      id: 8,
      image: PythonMegaImage,
      category: 'Health & Fitness',
      categoryColor: '#E1F7E3',
      categoryTextColor: '#15711F',
      price: 57,
      title: 'The Python Mega Course: Build 10 Real World Applications',
      rating: 5.0,
      students: 265700
    },
    {
      id: 9,
      image: CopywritingImage,
      category: 'Design',
      categoryColor: '#FFEEE8',
      categoryTextColor: '#993D20',
      price: 57,
      title: 'Copywriting - Become a Freelance Copywriter, your ow...',
      rating: 5.0,
      students: 265700
    },
    {
      id: 10,
      image: AnalyticsImage,
      category: 'Lifestyle',
      categoryColor: '#FFF2E5',
      categoryTextColor: '#65390C',
      price: 57,
      title: 'Google Analytics Certification - Learn How To Pass The Exam',
      rating: 5.0,
      students: 265700
    }
  ];
  
  // Calculate how many items per row based on the total number of courses
  const coursesPerRow = 5;
  
  // Split courses into rows
  const rows = Array.from({ length: Math.ceil(courses.length / coursesPerRow) }, (_, rowIndex) => 
    courses.slice(rowIndex * coursesPerRow, (rowIndex + 1) * coursesPerRow)
  );
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best selling courses</h1>
      <div className={styles.courseGrid}>
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.courseRow}>
            {row.map(course => (
              <CourseCard
                key={course.id}
                image={course.image}
                category={course.category}
                categoryColor={course.categoryColor}
                categoryTextColor={course.categoryTextColor}
                price={course.price}
                title={course.title}
                rating={course.rating}
                students={course.students}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourse;