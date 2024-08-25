import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from '@/components/ui/header';
// import "../../css/customCalendar.module.css"
const localizer = momentLocalizer(moment);

const events = [
    {
        start: moment('2024-08-25T13:00:00').toDate(),
        end: moment('2024-08-25T15:00:00').toDate(),
        title: 'Kayaking event'
    }
]


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