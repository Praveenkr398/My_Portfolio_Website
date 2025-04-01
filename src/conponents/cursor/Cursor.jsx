import React, { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y:0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  console.log(position)

  return (
    <motion.div
      animate={{ 
        x: position.x+10, 
        y: position.y+10, 
        scale: hovered ? 2 : 1, 
        opacity: hovered ? 0.5 : 1 
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="cursor"
    ></motion.div>
  );
}

export default Cursor;
