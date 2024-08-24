import React from 'react';
import Image from 'next/image';
import styles from '../../css/EventPreviewCard.module.css';

const EventPreview = ({ title, date, time, location, imageUrl }) => {
  return (
    <div style={{ padding: '20px' }}>    
      <div className={styles.card}>
      <Image src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardDate}>
          <h2>{date}</h2>
          <span>{time}</span>
        </div>
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p>{location}</p>
          <a href="#" className={styles.cardLink}>
            Click for more detail
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventPreview;