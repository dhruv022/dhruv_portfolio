import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "./ecom.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto. Doloribus dolor eligendi recusandae quasi velit, maxime, dolores nostrum ex quam consequatur quaerat nisi exercitationem, repudiandae blanditiis ad non itaque.",
  },
  {
    id: 2,
    title: "Next.Js Commerce",
    img: "./ecom2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto. Doloribus dolor eligendi recusandae quasi velit, maxime, dolores nostrum ex quam consequatur quaerat nisi exercitationem, repudiandae blanditiis ad non itaque.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "./app.avif",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto. Doloribus dolor eligendi recusandae quasi velit, maxime, dolores nostrum ex quam consequatur quaerat nisi exercitationem, repudiandae blanditiis ad non itaque.",
  },
  {
    id: 4,
    title: "Music App",
    img: "music.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto. Doloribus dolor eligendi recusandae quasi velit, maxime, dolores nostrum ex quam consequatur quaerat nisi exercitationem, repudiandae blanditiis ad non itaque.",
  },
];

const Single = ({ item }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start", "end start"]
      });

    const y = useTransform(scrollYProgress,[0,1], [-800, 300])

    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"ref ={ref}>
                    <img src={item.img} alt=""/>
                </div>
            <motion.div className="textContainer"style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness : 100,
    damping : 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
