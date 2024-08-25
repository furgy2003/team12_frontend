import AdminLayout from "../layout";
import { useState } from "react";
import { Dialog, DialogContent, Container } from "@mui/material";
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
      <div className="p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manage Events</h1>
          <button
            onClick={handleClickOpen}
            className="bg-[#F9EF1F] text-black w-14 h-14 rounded-full flex items-center justify-center"
          >
            <MdAdd className="text-2xl" />
          </button>
        </div>

        <FilterButtons b1="Your Events" b2="ALL" b3="Draft" b4="Filter" />

        <Container sx={{ mt: 4 }} className="p-0">
          {events.map((event) => (
            <EventCard key={event.event_id} event={event} />
          ))}
        </Container>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <CreateEvent />
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
