import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BrowserRouter as Router, useNavigate, Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Ecommerce Website",
    code: "https://github.com/Praveenkr398/Full-Responsive-Ecommerce-Website",
    preview:
      "https://praveenkr398.github.io/Full-Responsive-Ecommerce-Website/",
    img: "/public/project/ecom.png",
    desc: "A fully responsive e-commerce website built with React, Redux, HTML, CSS, and JavaScript. It includes a modern UI, product listing, search & filter, shopping cart, secure checkout, user authentication, and an admin panel for managing products. The website is optimized for all devices and supports dark & light mode.",
  },
  {
    id: 2,
    title: "PhotoPix: Image API",
    code: "https://github.com/Praveenkr398/PhotoPioX_PhotoCollection_Website",
    preview:
      "https://praveenkr398.github.io/PhotoPioX_PhotoCollection_Website/#home",
    img: "/public/project/photopix.png",
    desc: "The Image Search Engine is a web application that allows users to search for images based on keywords. It is built using HTML, CSS, JavaScript, and integrates with APIs like Unsplash or Pixabay to fetch high-quality images. The app provides a smooth user experience with features like infinite scrolling and responsive design.",
  },
  {
    id: 3,
    title: "Quiz App",
    code: "https://github.com/Praveenkr398/QuizApp.js",
    preview: "https://praveenkr398.github.io/QuizApp.js/",
    img: "/public/project/quiz.png",
    desc: "The Quiz App is a fully responsive web application built using HTML, CSS, and JavaScript. It allows users to test their knowledge by answering multiple-choice questions. The app provides real-time score tracking, a timer, and an engaging user experience.",
  },
  {
    id: 4,
    title: "Todo App",
    code: "https://github.com/Praveenkr398/10TodoApp",
    preview: "https://reactitodoapp.netlify.app/",
    img: "/public/project/todos.png",
    desc: "The To-Do App is a fully responsive task management application built with React and React Hooks. It allows users to efficiently manage their daily tasks with an intuitive UI and essential features like adding, editing, deleting, and filtering tasks. The app also supports local storage, ensuring tasks are saved even after a page refresh.",
  },
  {
    id: 5,
    title: "VIrtual Assistant",
    code: "https://github.com/Praveenkr398/AiVirtualAssistant",
    preview: "https://praveenkr398.github.io/AiVirtualAssistant/",
    img: "/public/project/bot.png",
    desc: "The Virtual Assistant is a smart web application built using React.js that helps users perform various tasks using voice commands. It integrates Speech Recognition API to process voice inputs and provide real-time responses. This assistant can handle basic queries, search the web, set reminders, and more.",
  },
];

const Single = ({ item }) => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={item.preview} target="_blank">
                <button className="preview btn">Preview</button>
              </a>
              <a href={item.code} target="_blank">
                <button className="btn code">Code</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({setprojects}) => {
  const navigate = useNavigate();


  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        <h1>Featured Works</h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
 <button id="allprojects"
  onClick={() =>
   navigate("/projects"
   )}
   >All Projects</button>
       
    </div>
  );
};

export default Portfolio;
