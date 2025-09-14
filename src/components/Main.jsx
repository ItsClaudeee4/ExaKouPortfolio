import React from "react";
import { motion } from "framer-motion";
import LiquidEther from "../ReactBitComponents/Particles.jsx";
import SplitText from "../ReactBitComponents/SpliteText.jsx";
import "./Main.css";
import Btn from "./Btn.jsx";
import ScrollDownArrow from "./ScrollDownArrow.jsx";

function Main() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // Variants for text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between letters
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 1.6, ease: "backOut" },
    },
  };

  return (
    <div className="main">
      {/* background */}
      <div className="background">
        <LiquidEther
          colors={["#ff570f", "#eea220", "#f0c8a3"]}
          mouseForce={12}
          cursorSize={70}
          isViscous={false}
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.35}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          BFECC={false}
        />
      </div>
      {/* background */}

      <section>
        {/* Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-semibold"
        >
          <SplitText
            text="Hi, I’m "
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            variants={letterVariants}
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="ExaKou"
            className="text-2xl font-semibold"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            style={{ color: "#f99917" }} // highlight name
            variants={letterVariants}
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Video Editor{" "}
          <span style={{ color: "white" }}>& Social Media Manager</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          Transforming Your Stream VOD/ Footage into Polished, Entertaining
          YouTube Content!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="btns"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Btn BtnText={"Watch Showreel"} link="https://youtu.be/OveydrJ9A5I" />
          <a href="#project" className="btnB">
            View My Work
          </a>
        </motion.div>

        {/* Scroll arrow */}
        <ScrollDownArrow targetId={"project"} />
      </section>
    </div>
  );
}

export default Main;
