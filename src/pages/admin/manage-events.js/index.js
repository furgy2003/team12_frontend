// pages/admin/manage-events/index.js
import AdminLayout from "../layout";
import { useState } from "react";
import { Fab, Dialog, DialogContent } from "@mui/material";
import CreateEvent from "../../../components/admin/CreateEvent";
import { MdAdd } from "react-icons/md";

export default function ManageEvents() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Events</h1>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
          style={{
            backgroundColor: "#F9EF1F", // Yellow background
            color: "#000", // Black color for the icon
            width: "56px",
            height: "56px",
          }}
        >
          <MdAdd style={{ fontSize: "24px" }} />
        </Fab>
      </div>

      {/* Dialog (Modal) */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <CreateEvent />
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
