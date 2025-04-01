import React from "react";
import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width={23} height={23} viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 5 L 20 5" },
            open: { d: "M 4 20 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          d="M 2 12.4 L 20 12.4 "
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 20 L 20 20" },
            open: { d: "M 4 2.5 L 17 20" },
          }}
        />{" "}
      </svg>
    </button>
  );
}

export default ToggleButton;
