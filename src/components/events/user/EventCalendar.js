import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "../../ui/Header"
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events1, setEvents] = useState([]);

 const events = [
    {
        start: moment('2024-08-25T13:00:00').toDate(),
        end: moment('2024-08-25T15:00:00').toDate(),
        title: 'Kayaking event'
    }
]


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = "66cb157066c043cef5083cb1"; // Replace with the actual user ID
        const response = await fetch(`/api/users/calendar?userId=${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header
        img="/images/kayaking.jpg"
        heading="My Calendar"
        description="Check out the events you might be interested in!"
      />
      <div style={{ height: "95vh", width: "80%", margin: "0 auto" }}>
        <Calendar localizer={localizer} events={events} />
      </div>
      <style jsx>{`
        .rbc-event {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default EventCalendar;