import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div  variants={variants} ref={ref} style={{height:"100vh"}}>
      <motion.div
        className="services_newdiv"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on healing your brand grow <br /> and move forward.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color : "orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color : "orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam adipisci minima itaque, porro voluptatem officiis natus
            quasi consectetur, quibusdam animi ratione ad autem illo accusamus
            facilis. Animi, quidem pariatur!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam adipisci minima itaque, porro voluptatem officiis natus
            quasi consectetur, quibusdam animi ratione ad autem illo accusamus
            facilis. Animi, quidem pariatur!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam adipisci minima itaque, porro voluptatem officiis natus
            quasi consectetur, quibusdam animi ratione ad autem illo accusamus
            facilis. Animi, quidem pariatur!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
      </motion.div>

      <motion.div
        className="services"
        style={{display: "none"}}
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on healing your<br/>brand grow and move forward.
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              aliquam adipisci minima itaque, porro voluptatem officiis natus
              quasi consectetur, quibusdam animi ratione ad autem illo accusamus
              facilis. Animi, quidem pariatur!
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              aliquam adipisci minima itaque, porro voluptatem officiis natus
              quasi consectetur, quibusdam animi ratione ad autem illo accusamus
              facilis. Animi, quidem pariatur!
            </p>
            <button>Go</button>
          </motion.div>
          
        </motion.div>
      </motion.div>
      </motion.div>

  );
};

export default Services;
