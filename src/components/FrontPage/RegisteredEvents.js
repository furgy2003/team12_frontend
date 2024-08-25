import React from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/RegisteredEvents.module.css';
import { useState, useEffect } from 'react';

const RegisteredEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = '66cb157066c043cef5083cb1'; // Replace with the actual user ID
        const response = await fetch(`/api/users/get-events?user_id=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setEvents(data.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateString);
    return months[date.getMonth()];
  };

  return (
    <div className={styles.registered}>
      <h2 className={styles.title}>Registered Events</h2>
      <div className={styles.eventPreviewContainer}>
        {events.map((event, index) => (
          <EventPreviewCard
            key={index}
            date={new Date(event.event_details.start_date).getDate().toString()}
            month={formatDate(event.event_details.start_date)}
            title={event.event_details.event_name}
            imageUrl={event.event_details.image_url || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default RegisteredEvents;