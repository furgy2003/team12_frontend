import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from '@/components/ui/Header';
// import "../../css/customCalendar.module.css"
const localizer = momentLocalizer(moment);

const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://team12-backend-code-to-give-ca637a425bb3.herokuapp.com/api/users/get-events"
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

// const events = [
//     {
//         start: moment('2024-08-25T13:00:00').toDate(),
//         end: moment('2024-08-25T15:00:00').toDate(),
//         title: 'Kayaking event'
//     }
// ]


export const EventCalendar = () => {
    return (
        <div>
            <Header img={'/images/kayaking.jpg'} heading="My Calendar" description="Check out the events you might be interested in!" />
            <div style={{height: '95vh', width: '80%', margin: '0 auto'}}>
                <Calendar localizer={localizer} events={events}/>
            </div>
            <style jsx>{`
                .rbc-event {
                    background-color: red;
                }
            `}</style>
        </div>);
    
};