import React from 'react';
import styles from './ErrorPage.module.css';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';

const ErrorPage: React.FC = () => {
  const supportLinks = ['FAQs', 'Privacy Policy', 'Terms & Condition'];

  return (
    <div className={styles.errorPage}>
      <Header />
      <div className={styles.errorContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.headingWrapper}>
            <div className={styles.errorCode}>Error 404</div>
            <h1 className={styles.errorTitle}>Oops! page not found</h1>
          </div>
          <p className={styles.errorDescription}>
            Something went wrong. It's look that your requested could not be found. It's look like
            the link is broken or the page is removed.
          </p>
          <button className={styles.goBackButton}>Go Back</button>
        </div>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/db6347c0f60b459dadd5502145d0d94e/31f25e5f7b4e06ed69b691e4becda73206d74b6f241820be244dd74491be04b2?apiKey=db6347c0f60b459dadd5502145d0d94e&"
            className={styles.backgroundImage}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
