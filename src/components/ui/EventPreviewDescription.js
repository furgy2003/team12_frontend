import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function EventPreviewDescription(props) {
  const { title, date, time, location } = props;
  return (
    <div className="m-4 mb-0">
      <div className="font-bold text-xl m-2">{title}</div>
      <div className="flex text-text m-2">
        <CalendarMonthIcon />
        <div className="ml-4">{"Date: " + date}</div>
      </div>
      <div className="flex text-text m-2">
        <AccessTimeIcon />
        <div className="ml-4">{"Time: " + time}</div>
      </div>
      <div className="flex text-text m-2">
        <LocationOnIcon />
        <div className="ml-4">{"Location: " + location}</div>
      </div>
    </div>
  );
}
