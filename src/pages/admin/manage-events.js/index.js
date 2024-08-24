import AdminLayout from "../layout";
import { useState } from "react";
import { Fab, Dialog, DialogContent, Container } from "@mui/material";
import CreateEvent from "../../../components/admin/ManageEvents/CreateEvent";
import { MdAdd } from "react-icons/md";
import FilterButtons from "@/components/ui/FilterButtons";
import EventCard from "@/components/admin/ManageEvents/EventCard";
import mockData from "./mockData.json";

export default function ManageEvents() {
  const [open, setOpen] = useState(false);
  const [events] = useState(mockData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AdminLayout>
      <div
        className="flex justify-between items-center mb-6"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
          style={{
            backgroundColor: "#F9EF1F", // Yellow background
            color: "#000", // Black color for the icon
            width: "56px",
            height: "56px",
            marginLeft: "20px",
          }}
        >
          <MdAdd style={{ fontSize: "24px" }} />
        </Fab>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <CreateEvent />
        </DialogContent>
      </Dialog>

      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <FilterButtons b1="Your Events" b2="ALL" b3="Draft" b4="Filter" />
      </div>

      <Container
        sx={{ mt: 4 }}
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        {events.map((event) => (
          <EventCard key={event.event_id} event={event} />
        ))}
      </Container>
    </AdminLayout>
  );
}
