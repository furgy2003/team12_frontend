import React from 'react';
import styles from '../css/Client_Volunteer_Welcome.module.css'
import Image from 'next/image';

const WelcomeBackComponent = ({username}) => {
  return (

    <WelcomeBack  username={username}/>
  );
}
const WelcomeBack = ({username = 'Furgy'}) => {
  return (
    <div className={styles['welcome-back-container']}>
    <h2 className={styles['welcome-back-title']}>Welcome Back, {username}!</h2>
    <p className={styles['welcome-back-text']}>Here's a collection of your featured badges! Join more events for more!</p>
      <div className="badge-container">
        <Image 
        src="/images/Badges.png"
        alt="My Image"
        width={600}
        height={400}
        />
      </div>
    </div>
  );
};

export default WelcomeBackComponent;