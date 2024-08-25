import AdminLayout from "../layout";
import { useState } from "react";
import { Fab, Dialog } from "@mui/material";
import { MdAdd } from "react-icons/md";
import FilterButtons from "@/components/ui/FilterButtons";
import ReminderForm from "../../../components/admin/ManageReminders/ReminderForm"; // Import your form component

export default function ManageReminders() {
  const [open, setOpen] = useState(false);

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
        <h1 className="text-3xl font-bold">Manage Reminders</h1>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
          className="bg-yellow-400 text-black w-14 h-14"
        >
          <MdAdd className="text-2xl" />
        </Fab>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <ReminderForm />
      </Dialog>

      <div className="mx-5">
        <FilterButtons b1="ALL" b2="Draft" b3="Event" b4="Filter" />
      </div>
    </AdminLayout>
  );
}
