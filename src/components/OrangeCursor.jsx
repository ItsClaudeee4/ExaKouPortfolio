import React, { useState, useEffect, useRef } from "react";

const OrangeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const animationRef = useRef();

  useEffect(() => {
    const updateMousePosition = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleResize = () => setIsVisible(window.innerWidth >= 500);

    handleResize();
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCursor = () => {
      const dx = mousePosition.x - cursorPosition.x;
      const dy = mousePosition.y - cursorPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 0.5) {
        setCursorPosition({ x: mousePosition.x, y: mousePosition.y });
      } else {
        const speed = 0.15;
        setCursorPosition((prev) => ({
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        }));
      }

      animationRef.current = requestAnimationFrame(animateCursor);
    };

    animationRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(animationRef.current);
  }, [mousePosition, cursorPosition, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Big circle border */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: cursorPosition.x - 13,
          top: cursorPosition.y - 13,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "2px solid #f99917",
          transform: isClicking ? "scale(0.7)" : "scale(1)",
          transition: "transform 0.15s ease-out",
          zIndex: 99999,
        }}
      ></div>

      {/* Small dot */}
      <div
        className="fixed pointer-events-none z-[51]"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#f99917",
          transform: isClicking ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.15s ease-out",
          boxShadow: "0 0 5px #f99917",
        }}
      ></div>
    </>
  );
};

export default OrangeCursor;
