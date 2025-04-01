import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {


  return (
    <div className="navbar">
      {/* side bar */}
       <Sidebar/>
      <div className="wrapper">
        <motion.span
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:2}}
        transition={{duration:0.5}}
        ><a href="/">Mr. Praveen</a></motion.span>
        <motion.div className="social"
         initial={{opacity:0,scale:0.5}}
         animate={{opacity:1,scale:2}}
         transition={{duration:.5}}
         
        >
          <a href="https://www.linkedin.com/in/Praveenkr398" target="_blank">
            <img title="visit: my Linkedin Profile" src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Praveenkr398" target="_blank">
            <img title="visit: my GitHub Profile" src="/github.png" alt="" />
          </a>
          <a href="mailto:prajatech355@gmail.com">
            <img style={{width:"20px", height:"20px"}} title="mail me at prajatech355@gmail.com" src="/gmail.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
