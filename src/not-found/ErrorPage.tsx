import React from 'react';
import styles from './ErrorPage.module.css';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';

const ErrorPage: React.FC = () => {
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
          <img loading="lazy" src="/404.png" className={styles.backgroundImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
