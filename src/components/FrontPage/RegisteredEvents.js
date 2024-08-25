import React, {useState, useEffect} from 'react';
import EventPreviewCard from '../events/user/EventPreviewCard';
import styles from '../css/RegisteredEvents.module.css';
import image1 from '../../../public/images/1.jpg';

const RegisteredEvents = () => {
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
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com/api/user/get-events"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data);
        console.log(events)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.registered}>
      <h2 className={styles.title}>Registered Events </h2>
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

export default RegisteredEvents;