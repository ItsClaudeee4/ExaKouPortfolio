// components/OrangeCursor.js
import React, { useState, useEffect, useRef } from "react";

const OrangeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Smooth cursor following with delay
  useEffect(() => {
    const animateCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1, // Adjust 0.1 to control delay speed
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      animationRef.current = requestAnimationFrame(animateCursor);
    };

    animationRef.current = requestAnimationFrame(animateCursor);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Big circles with delay */}
      <div
        className="fixed transition-transform duration-100 pointer-events-none"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          transform: isClicking ? "scale(0.8)" : "scale(1)",
          zIndex: 99999, // 🔥 Always on top
        }}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-10 h-10 rounded-full bg-orange-500/20 blur-md animate-pulse"></div>

        {/* Middle ring */}
        <div className="absolute inset-2 w-6 h-6 rounded-full border border-orange-400/60"></div>

        {/* Inner core */}
        <div className="absolute inset-3 w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"></div>
      </div>

      {/* Small center dot - instant follow */}
      <div
        className="fixed pointer-events-none z-[51]"
        style={{
          left: mousePosition.x - 1,
          top: mousePosition.y - 1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-orange-300"></div>
      </div>

      {/* Ripple effect on click */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-40"
          style={{
            left: cursorPosition.x - 30,
            top: cursorPosition.y - 30,
          }}
        >
          <div className="w-15 h-15 rounded-full border-2 border-orange-400/40 animate-ping"></div>
        </div>
      )}
    </>
  );
};

export default OrangeCursor;
