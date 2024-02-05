import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
