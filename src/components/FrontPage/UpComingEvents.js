import React, { useState, useEffect } from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/UpcomingEvents.module.css';
import image1 from '../../../public/images/1.jpg';


const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  // const events = [
  //   {
  //     title: 'Kayaking with your fellow friends',
  //     date: '28 Jul',
  //     time: 'All day',
  //     location: 'Lake Tahoe',
  //     imageUrl: image1.src,
  //   },
  //   {
  //     title: 'Kayaking with your fellow friends',
  //     date: '28 Jul',
  //     time: 'All day',
  //     location: 'Lake Tahoe',
  //     imageUrl: image1.src,
  //   },
  //   {
  //     title: 'Kayaking with your fellow friends',
  //     date: '28 Jul',
  //     time: 'All day',
  //     location: 'Lake Tahoe',
  //     imageUrl: image1.src,
  //   },
  //   {
  //     title: 'Kayaking with your fellow friends',
  //     date: '28 Jul',
  //     time: 'All day',
  //     location: 'Lake Tahoe',
  //     imageUrl: image1.src,
  //   },
  // ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com/api/events/get-all"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.upcomingEvents}>
      <h2 className={styles.title}>Upcoming Events Just for You</h2>
      <div className={styles.eventPreviewContainer}>
        {events.map((event, index) => (
          <EventPreviewCard
          key={index}
          date={event.event_details.start_date.slice(8, 10)}
          month={event.event_details.start_date.slice(5, 7)}
          title={event.event_details.event_name}
          imageUrl={event.event_details.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;