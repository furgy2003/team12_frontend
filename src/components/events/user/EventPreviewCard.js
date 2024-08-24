import React from 'react';
import Image from 'next/image'
import styles from '../../css/EventPreviewCard.module.css';

const EventPreviewCard = ({ imageUrl, date, month, title, link }) => {
  return (
    <div style={{ padding: '20px' }}>
    <div className={styles.card}>
      <Image src={imageUrl} alt="Event" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardDate}>
          <h2>{date}</h2>
          <span>{month}</span>
        </div>
        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <a href={link} className={styles.cardLink}>
            Click for more detail
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventPreviewCard;