/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // arrow icon

const ScrollDownArrow = ({ targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="cursor-pointer flex justify-center mt-20 border border-[#f99917]"
      onClick={handleClick}
      animate={{ y: [0, 10, 0] }} // 🔥 only up and down animation
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <ChevronDown size={40} color="#f99917" />
    </motion.div>
  );
};

export default ScrollDownArrow;
