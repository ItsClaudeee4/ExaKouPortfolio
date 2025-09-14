import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import longVideo from "../assets/LongVideo.jpg";
import shortVideo from "../assets/ShortVideo.png";
import Thumbnails from "../assets/Thumbnails.jpg";
import management from "../assets/management.webp";
import "./Projects.css";
import Btn from "./Btn";
import SectionTitle from "./SectionTitle";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const imageVariants = {
  hidden: { scale: 1.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`project-card ${index % 2 === 0 ? "normal" : "reverse"}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="project-image">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        />
        <motion.div
          className="project-image-overlay"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.h2
          className="project-image-title"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {project.title}
        </motion.h2>
      </div>

      <motion.div
        className="project-content"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="project-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {project.title}
        </motion.h2>

        <motion.p
          className="project-description"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="project-details"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="challenge-section"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>The Challenge:</h3>
            <p>{project.challenge}</p>
          </motion.div>

          <motion.div
            className="solution-section"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3>My Solution:</h3>
            <p>{project.mySolution}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Btn BtnText={project.BtnText} link={project.BtnLink} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main Projects Component
function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const titleRef = useRef(null);
  const tabsRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isTabsInView = useInView(tabsRef, { once: true, margin: "-50px" });

  const projectsData = [
    {
      id: 1,
      image: longVideo,
      title: "Long-Form Content Editing",
      description: "YouTube Long-Form Content (10–20 min videos)",
      mySolution:
        "Edited long-form videos with storytelling techniques, smooth pacing, transitions, and graphics to maximize audience retention and boost watch time.",
      challenge:
        "Creators needed engaging, professional edits that kept viewers watching until the end.",
      category: "long",
      BtnText: "Videos",
      BtnLink: "https://ytjobs.co/talent/vitrine/283573?filter=normal",
    },
    {
      id: 2,
      image: shortVideo,
      title: "Short-Form Content Editing",
      description: "YouTube Shorts, TikTok & Instagram Reels",
      mySolution:
        "Crafted high-energy, captioned short-form videos optimized for vertical platforms, designed to capture attention in the first 3 seconds and increase reach.",
      challenge:
        "Clients wanted to repurpose content into short, viral-ready clips to gain exposure and new subscribers.",
      category: "short",
      BtnText: "Shorts",
      BtnLink: "https://ytjobs.co/talent/vitrine/283573?filter=short",
    },
    {
      id: 3,
      image: Thumbnails,
      title: "Thumbnail Design",
      description: "Custom Thumbnails for Long & Short-Form Videos",
      mySolution:
        "Designed eye-catching, click-optimized thumbnails using color psychology, clear text, and bold composition to boost CTR (click-through rate).",
      challenge:
        "Thumbnails weren't getting clicks and videos struggled to stand out.",
      category: "thumbnail",
      BtnText: "Thumbnail",
      BtnLink: "https://ytjobs.co/talent/vitrine/283573?filter=normal",
    },
    {
      id: 4,
      image: management,
      title: "Full YouTube Channel Management",
      description: "End-to-End YouTube Content & Growth Management",
      mySolution:
        "Provided full channel management—editing videos, designing thumbnails, optimizing SEO, scheduling uploads, and managing content strategy—so clients could focus solely on creating or running their business.",
      challenge:
        "Creators and business owners don't have time or updated strategies to handle editing, SEO, scheduling, and analytics.",
      category: "management",
      BtnText: "Account Management",
      BtnLink: "https://ytjobs.co/talent/profile/283573",
    },
  ];

  const filteredProjects = projectsData.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  const tabVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="mainProjects">
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
        <SectionTitle title={"My Projects"} />
      </motion.div>

      <motion.ul
        ref={tabsRef}
        className="filter-tabs"
        initial="hidden"
        animate={isTabsInView ? "visible" : "hidden"}
      >
        {[
          { key: "all", label: "All Projects" },
          { key: "long", label: "Long Videos" },
          { key: "short", label: "Short Videos" },
          { key: "thumbnail", label: "Thumbnail Design" },
          { key: "management", label: "Channel Management" },
        ].map((tab, i) => (
          <motion.li
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={activeTab === tab.key ? "clicked" : "unClicked"}
            variants={tabVariants}
            custom={i}
            whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
