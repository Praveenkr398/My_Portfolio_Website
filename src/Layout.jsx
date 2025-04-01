import { Outlet, Link } from "react-router-dom";
import Navbar from "./conponents/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      {/* Navigation Bar */}
  <Navbar/>
      {/* Dynamic Content */}
      <Outlet />
    </div>
  );
};

export default Layout;
