import React, { useState } from "react";
import EventPreview from "../../components/events/user/EventPreview";
import styles from "../css/clientEventPage.module.css";
import Header from "@/components/ui/Header";
import { EventDialog } from "@/components/events/user/EventDialog";
import { ChatEpic } from "@/components/clients/ChatEpic";
import { FaChevronDown } from "react-icons/fa";

const image1 = require("../images/1.jpg");
const image2 = require("../images/1.png");

const events = [
  {
    id: "1",
    title: "Kayaking with your fellow friends",
    date: "Sun, Jul 28, 2024",
    time: "10:00 AM",
    location: "Sham Shui Po",
    image: image2,
    description: "Join your friends for an exciting kayaking adventure!",
  },
  {
    id: "2",
    title: "Talk: Empowering Women",
    date: "Sun, Jul 28, 2024",
    time: "10:00 AM",
    location: "Sham Shui Po",
    image: image1,
    description: "Attend a thought-provoking talk on empowering women.",
  },
];

const EventPage = () => {
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [events, setEvents] = useState([]);
  
  return (
    <div>
      <EventDialog
        open={open}
        handleClose={() => setOpen(false)}
        eventData={eventData}
      />

      <Header
        img="/images/hpi.jpg"
        heading="Events"
        description="Review the events where you've volunteered and watch those requiring training."
      />

      <div className={styles.container}>
        <div className={styles.filterBar}>
          <button className={styles.filterButton}>Just for You</button>
          <button className={styles.filterButton}>All</button>
          <button className={styles.filterButton}>Registered</button>
          <button
            className={`${styles.filterButton} ${styles.filterButtonWithIcon}`}
          >
            <span className={styles.filterButtonText}>Filter</span>{" "}
            <FaChevronDown />
          </button>
        </div>

        <div className={styles.eventCards}>
          {events.map((event) => (
            <EventPreview
              onClick={() => {
                setEventData(event);
                setOpen(true);
                console.log("Click event");
              }}
              key={event.id}
              imageSrc={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              onRegister={() =>
                console.log("Registered for event:", event.title)
              }
            />
          ))}
        </div>
      </div>
      <ChatEpic />
    </div>
  );
};

export default EventPage;
