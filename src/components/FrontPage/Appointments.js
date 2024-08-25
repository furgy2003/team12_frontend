import React from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/UpcomingEvents.module.css';
import image1 from '../../../public/images/1.jpg';
import { useEffect, useState } from 'react';

const Appointments = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/events/get-all"
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
    return formatter.format(date);
  };

  const handleEventPreviewClick = (event) => {
    // Handle the click event on the EventPreviewCard
    console.log('Clicked on event:', event);
    // You can add additional logic here, such as navigating to the event details page
  };

  return (
    <div className={styles.upcomingEvents}>
      <h2 className={styles.title}>Choose Appointments:</h2>
      <div className={styles.eventPreviewContainer}>
        {events.filter(event => event.isAppointment).map((event, index) => (
          <EventPreviewCard
            key={index}
            date={new Date(event.event_details.start_date).getDate().toString()}
            month={formatDate(event.event_details.start_date)}
            title={event.event_details.event_name}
            imageUrl={event.event_details.image_url}
            onClick={() => handleEventPreviewClick(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;