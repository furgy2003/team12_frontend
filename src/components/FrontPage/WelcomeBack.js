import React from 'react';
import styles from '../css/Client_Volunteer_Welcome.module.css'
const WelcomeBackComponent = () => {
  return (
    <div className={styles['welcome-back-container']}>
    <h2 className={styles['welcome-back-title']}>Welcome Back, Furgy!</h2>
    <p className={styles['welcome-back-text']}>Here's a collection of your featured badges! Join more events for more!</p>
      <div className="badge-container">
      </div>
    </div>
  );
};

export default WelcomeBackComponent;