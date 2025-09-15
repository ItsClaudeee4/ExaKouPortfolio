import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Btn from "./Btn";
import "./About.css";
import Pr from "../assets/Pr.png";
import AfterEffect from "../assets/afterEffect.png";
import Photoshop from "../assets/photoshop.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const leftSideVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const rightSideVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const techItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotateY: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const expertiseItemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const progressBarVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.5, duration: 1.2, ease: "easeOut" },
  },
};

const progressFillVariants = {
  hidden: { width: "0%" },
  visible: (percentage) => ({
    width: `${percentage}%`,
    transition: { delay: 0.8, duration: 1.5, ease: "easeOut" },
  }),
};

// Animated Components
const AnimatedTechItem = ({ tech, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="tech-item"
      variants={techItemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      whileHover={{
        scale: 1.05,
        y: -5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="tech-icon"
        whileHover={{ rotateY: 15, scale: 1.1, transition: { duration: 0.3 } }}
      >
        <img src={tech.img} alt={tech.name} />
      </motion.div>
      <span className="tech-name">{tech.name}</span>
    </motion.div>
  );
};

const AnimatedExpertiseItem = ({ item, index }) => {
  const ref = useRef(null);
  const progressRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const isProgressInView = useInView(progressRef, {
    once: true,
    margin: "-20px",
  });

  return (
    <motion.div
      ref={ref}
      className="expertise-item"
      variants={expertiseItemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
    >
      <div className="expertise-header">
        <motion.span
          className="expertise-skill"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
        >
          {item.skill}
        </motion.span>
        <motion.span
          className="expertise-percentage"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{
            delay: index * 0.15 + 0.4,
            duration: 0.4,
            type: "spring",
          }}
        >
          {item.percentage}%
        </motion.span>
      </div>
      <motion.div
        ref={progressRef}
        className="progress-bar"
        variants={progressBarVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ transformOrigin: "left" }}
      >
        <motion.div
          className="progress-fill"
          variants={progressFillVariants}
          initial="hidden"
          animate={isProgressInView ? "visible" : "hidden"}
          custom={item.percentage}
        />
      </motion.div>
    </motion.div>
  );
};

function About() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isContainerInView = useInView(containerRef, {
    once: true,
    margin: "-50px",
  });
  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  const technologies = [
    { name: "Premier Pro", img: Pr },
    { name: "After effect", img: AfterEffect },
    { name: "Photoshop", img: Photoshop },
  ];

  const expertise = [
    { skill: "Video Editing Short Form", percentage: 95 },
    { skill: "Video Editing Longform", percentage: 75 },
    { skill: "Account Management", percentage: 85 },
    { skill: "Thumbnail Design", percentage: 70 },
  ];

  return (
    <main className="mainAbout">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={
          isTitleInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -50, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle title={"About Me"} />
      </motion.div>

      <motion.div
        ref={containerRef}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isContainerInView ? "visible" : "hidden"}
      >
        <div className="about-content">
          {/* LEFT SIDE */}
          <motion.div
            ref={leftRef}
            className="about-left"
            variants={leftSideVariants}
            initial="hidden"
            animate={isLeftInView ? "visible" : "hidden"}
          >
            <motion.div
              className="about-header"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className="about-title"
                variants={titleVariants}
                whileHover={{
                  scale: 1.02,
                  color: "#f99917",
                  transition: { duration: 0.3 },
                }}
              >
                Who I Am
              </motion.h2>
              <motion.div
                className="btnB about"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isLeftInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                2+ Years Experience
              </motion.div>
            </motion.div>

            <div className="about-description">
              {[
                "Since childhood, I've been surrounded by video games—that's where my passion for creating began. Gaming inspired me to launch my own YouTube channel, where I first learned the basics of editing, content strategies, and the creative mindset needed to grow online. Over time, I sharpened my skills and started my freelancing journey as a video editor.",
                "I genuinely love content creation, and collaborating with streamers and creators holds a special place in my heart because we share the same journey. What excites me most is pushing my skills further while making videos that communities truly enjoy.",
                "I'm passionate about my craft and always looking forward to new opportunities to create, collaborate, and keep improving in this field.",
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isLeftInView ? "visible" : "hidden"}
                  custom={index}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isLeftInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Btn
                BtnText={"Watch Showreel"}
                link={"https://youtu.be/OveydrJ9A5I"}
                className="AboutBtn"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            ref={rightRef}
            className="about-right"
            variants={rightSideVariants}
            initial="hidden"
            animate={isRightInView ? "visible" : "hidden"}
          >
            <motion.div
              className="technologies-section"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3
                className="section-title"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Core Technologies
              </motion.h3>
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <AnimatedTechItem key={index} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="expertise-section"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3
                className="section-title"
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                My Expertise
              </motion.h3>

              <motion.div className="expertise-grid">
                {expertise.map((item, index) => (
                  <AnimatedExpertiseItem
                    key={index}
                    item={item}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          {/* END RIGHT SIDE */}
        </div>
      </motion.div>
    </main>
  );
}

export default About;
