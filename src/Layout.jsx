import { Outlet, Link } from "react-router-dom";
import Hero from "./conponents/hero/Hero";
import Contact from "./conponents/contact/Contact";
import Sidebar from "./conponents/sidebar/Sidebar";
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
