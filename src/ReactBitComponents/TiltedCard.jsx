import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltedCard = ({ skill }) => {
  const ref = useRef(null);
  const progressRef = useRef(null);
  const cardRef = useRef(null);

  // Debug state
  const [debugInfo, setDebugInfo] = useState("");

  // Simpler viewport detection
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.3, // Trigger when 30% of element is visible
  });

  const isProgressInView = useInView(progressRef, {
    once: true,
    amount: 0.5,
  });

  // Debug effect
  useEffect(() => {
    if (isCardInView) {
      console.log("TiltedCard animation triggered for:", skill.name);
    }
  }, [isCardInView, skill.name]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={cardRef} style={{ position: "relative" }}>
      {/* Debug indicator - remove this later */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "10px",
          fontSize: "10px",
          color: isCardInView ? "green" : "red",
          zIndex: 1000,
        }}
      >
        {debugInfo}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9,
        }}
        animate={
          isCardInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 50,
                scale: 0.9,
              }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
            perspective: "1000px",
          }}
          className="relative"
        >
          {/* card content */}
          <div
            style={{
              transform: "translateZ(20px)",
              borderRadius: "8px",
              padding: "2rem 1.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
              minHeight: "280px",
            }}
          >
            <motion.div
              style={{
                width: "70px",
                marginBottom: "1rem",
                borderRadius: "16px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isCardInView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      scale: 0.5,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "100%" }}
              />
            </motion.div>

            <motion.div
              style={{ fontWeight: 600, color: "#e0e0e0" }}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCardInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              {skill.name}
            </motion.div>

            <motion.div
              ref={progressRef}
              style={{
                width: "120%",
                height: "4px",
                backgroundColor: "#523409",
                marginTop: "1rem",
                borderRadius: "2px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={
                isCardInView
                  ? {
                      opacity: 1,
                      scaleX: 1,
                    }
                  : {
                      opacity: 0,
                      scaleX: 0,
                    }
              }
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "#f99917",
                  borderRadius: "2px",
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: isProgressInView ? `${skill.percentage}%` : "0%",
                }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
            </motion.div>

            <motion.div
              style={{ marginTop: "0.5rem", color: "#f99917" }}
              initial={{ opacity: 0 }}
              animate={
                isProgressInView
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }
              }
              transition={{
                duration: 0.3,
                delay: 1.0,
              }}
            >
              {skill.percentage}%
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TiltedCard;
