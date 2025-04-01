import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import { useState } from "react";


const variants = {
  open:{
    clipPath:"circle(1200px at 50px 50px",
    transition:{
      type:"spring",
      delay:.2,
      stiffness:300,
      damping:50,
    },
  },
  closed:{
    clipPath:"circle(30px at 50px 50px",
    transition:{
      type: 'spring',
      stiffness: 300,
      damping:50,
    }
  }
}

function Sidebar() {
  const [open, setOpen] = useState(false)


  return <motion.div animate={open ? 'open' : 'closed'} className="sidebar">
    <motion.div variants={variants} className="bg">
       <Links setOpen={setOpen} />
    </motion.div>
    <ToggleButton setOpen={setOpen}/>
  </motion.div>;
}

export default Sidebar;
