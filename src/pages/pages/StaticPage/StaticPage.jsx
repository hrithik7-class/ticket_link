import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './StaticPage.module.css';

const StaticPage = ({ title, subtitle, children, lastUpdated }) => {
  return (
    <div className={styles.container}>
      <a href="#/" className={styles.backButton}>
        <FaArrowLeft />
        Back to Home
      </a>
      
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
      
      {lastUpdated && (
        <div className={styles.lastUpdated}>
          Last updated: {lastUpdated}
        </div>
      )}
    </div>
  );
};

export default StaticPage;