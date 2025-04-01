import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -100,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 2,
    },
  },

  animate2: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 2,
    },
  },

  animate3: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 2,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div className="services">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <p>
          I focus on Helping your brand grow <br /> and move forword
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate2"}
      >
        <div className="title">
          <img src="/people.webp" alt="meeting in the office" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Role
          </h1>
        </div>
        <div className="title">
          <h1>
            For Your{" "}
            <motion.b whileHover={{ color: "orange" }}>Business.</motion.b>
          </h1>
          <a href="#Portfolio"><button>Recent works &#128317;
          </button></a>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate3"}
      >
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#0c0c3d" }}
        >
          <h2>Front-end Developer</h2>
          <p>
            I develop clean, optimized, and scalable front-end solutions that
            enhance user engagement. My focus is on writing efficient HTML, CSS,
            and JavaScript code to ensure a smooth and responsive UI.
          </p>
          <h3>Skills:</h3>
          <li>✔ HTML5, CSS3, JavaScript (ES6+)</li>
          <li>✔ Responsive design (CSS Grid, Flexbox)</li>
          <li>✔ Frameworks: Bootstrap, Tailwind</li>
          <li>✔ Web performance optimization</li>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#0c0c3d" }}
        >
          <h2>React Developer</h2>
          <p>
            I build dynamic and high-performance React.js applications using
            modern state management techniques like Redux and Context API. I
            focus on creating reusable and maintainable components.
          </p>
          <h3>Skills:</h3>
          <li>✔ React.js, Redux, Hooks</li>
          <li>✔ Component-based architecture</li>
          <li>✔ API integration (Axios, Fetch API)</li>
          <li>✔ Performance optimization in React</li>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#0c0c3d" }}
        >
          <h2>JavaScript Developer</h2>
          <p>
            I craft interactive web applications by leveraging vanilla
            JavaScript and modern frameworks. My goal is to create seamless user
            experiences with efficient JavaScript coding.
          </p>
          <h3>Skills:</h3>
          <li>✔ DOM Manipulation & Event Handling</li>
          <li>✔ Asynchronous JavaScript </li> 
          <li>✔ API, Promises, Async/Await</li>
          <li>✔ JavaScript ES6+ Features</li>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
