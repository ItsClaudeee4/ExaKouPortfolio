import React from "react";
import Btn from "./Btn";
import { motion } from "framer-motion";
import "./NextProject.css";

function NextProject() {
  return (
    <motion.main
      className="mainNext"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // animate only once when 20% is visible
    >
      {/* Animated bar */}
      <motion.div
        className="NextBar"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Heading */}
      <motion.h1
        className="Next-h1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to Start Your Next Project?
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="Next-p"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        I'm currently available for freelance work and full-time opportunities.
        Let's build something amazing together!
      </motion.p>

      {/* Button */}
      <motion.div
        className="mainDiv"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ once: true }}
      >
        <Btn BtnText={"Get in Touch"} />
      </motion.div>
    </motion.main>
  );
}

export default NextProject;
