import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};
const slidedVariants = {
  initial: {
   x:"-400%"
  },
  animate: {
    x:"-30%",
    transition: {
      duration: 10,
      repeat:Infinity,
      repeatType:"mirror"
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          animate="animate"
          initial="initial"
        >
          <motion.h2>Passinate About</motion.h2>
          <motion.h1
            variants={textVariants}
          >
            Front-end Development
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons"
          >
           
              <a href="#Portfolio"><button>Latest Projects</button></a>
            
              <a href="#Contact"><button>Contact Me</button></a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
            alt="navigation"
          />
        </motion.div>
        <motion.div 
        variants={slidedVariants}
        initial="initial"
        animate="animate"
        className="slidingTtext">
          HTML, CSS, JavaScript, React
        </motion.div>
        <div className="imageContainer">
          <img src="/hero2.png" alt="portfolio owener image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
