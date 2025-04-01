import React from 'react'
import { motion} from 'framer-motion'
import { style } from 'framer-motion/client';

const variants ={
  open:{
    opacity: 1,
    transition: {
      staggerChildren: .1
    }
  },
  closed:{
    opacity: 0,
    transition: {
      staggerChildren: .1,
      staggerDirection: -1
    }
  },
};
const itemVariants ={
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  },
};

function Links({setOpen}) {

  
  const items = ['Home',"Education", 'Services', 'Portfolio', 'Contact']
  return (
    <motion.div className='links' variants={variants} onClick={() => setOpen((prev) => !prev)}>
      {items.map((item)=> (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{color: "#0c0c9d", borderBottom:"2px solid blue"}} whileTap={{scale:0.9}}>{item} </motion.a>
      ))}
    </motion.div>
  )
}

export default Links