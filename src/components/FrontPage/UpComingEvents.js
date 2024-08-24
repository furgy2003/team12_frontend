import React from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/UpcomingEvents.module.css';
import image1 from '../../../public/images/1.jpg';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Kayaking with your fellow friends',
      date: '28 Jul',
      time: 'All day',
      location: 'Lake Tahoe',
      imageUrl: image1.src,
    },
    {
      title: 'Kayaking with your fellow friends',
      date: '28 Jul',
      time: 'All day',
      location: 'Lake Tahoe',
      imageUrl: image1.src,
    },
    {
      title: 'Kayaking with your fellow friends',
      date: '28 Jul',
      time: 'All day',
      location: 'Lake Tahoe',
      imageUrl: image1.src,
    },
    {
      title: 'Kayaking with your fellow friends',
      date: '28 Jul',
      time: 'All day',
      location: 'Lake Tahoe',
      imageUrl: image1.src,
    },
  ];

  return (
    <div className={styles.upcomingEvents}>
      <h2 className={styles.title}>Upcoming Events Just for You</h2>
      <div className={styles.eventPreviewContainer}>
        {events.map((event, index) => (
          <EventPreviewCard
            key={index}
            date="28"
            month="JUL"
            title="Kayaking with your fellow friends"
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;