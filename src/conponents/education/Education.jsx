import React from "react";
import "./education.scss";
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Education() {
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h1>Education Qualification</h1>
      <div className="wrapper">
        <motion.div className="imageContainer" variants={variants}>
          <motion.img src="profile.png" variants={variants} />
          <span></span>
        </motion.div>
        <motion.div className="textContainer" variants={variants}>
          <motion.h3 variants={variants}>Degree -</motion.h3>
         <motion.ul variants={variants}>
         <li>Bachelor in Science (B.Sc) Physics Honours</li>
          <li>Babasaheb Bhimrao Ambedkar Bihar University</li>
          <li>Session : 2020 - 2023</li>
         </motion.ul>

         <motion.ul variants={variants}>
          <motion.h3 variants={variants}>Diploma -</motion.h3>
          <li>Arcade Computer Academy, Patna</li>
          <li>Advanced Diploma in Computer Application (ADCA)</li>
          <li>Session : 2022 - 2023</li>
         </motion.ul>

         <motion.ul variants={variants}>
          <motion.h3 variants={variants}>Skills -</motion.h3>
          <li>
            <strong>HTML5 : </strong>Hyper Text Markup Language
          </li>
          <li>
            <strong>CSS3 : </strong>CaseCading Style Sheet
          </li>
          <li>
            <strong>JavaScript : </strong>Hyper Text Markup Language
          </li>
          <li>
            <strong>Frameworks : </strong>Bootstrap | Tailwind Css | React.js
          </li>
          <li>Version Control like Git & GitHub</li>
         </motion.ul>

         <motion.ul variants={variants}>
          <motion.h3 variants={variants}>Soft Skills -</motion.h3>
          <li>Communicatioin skill</li>
          <li>Problem solving skill</li>
          <li>Teamwork & Collaboration</li>
         </motion.ul>

         <a href="#Portfolio"><button>My Projects &#11015;</button></a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
