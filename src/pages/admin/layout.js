// pages/admin/layout.js
import Sidebar from "../../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
}
