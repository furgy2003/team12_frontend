import React from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/UpcomingEvents.module.css';
import image1 from '../../../public/images/1.jpg';
import { useEffect, useState } from 'react';

const Appointments = () => {
  const events = [
    {
      title: 'Kayaking with your fellow friends',
      date: '28 Jul',
      time: 'All day',
      location: 'Lake Tahoe',
      imageUrl: image1.src,
    }
  ];

  // const [events, setEvents] = useState([]);

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
        console.log(data)
        console.log("test")
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className={styles.upcomingEvents}>
      <h2 className={styles.title}>Choose Appointments:</h2>
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

export default Appointments;