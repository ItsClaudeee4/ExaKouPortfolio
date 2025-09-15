import React from "react";
import SectionTitle from "./SectionTitle";
import "./Comments.css";
import { useState, useEffect } from "react";
import Lulhuz from "../assets/Lulhuz.png";
import Fr33 from "../assets/Fr33.png";
import IcySuccess from "../assets/IcySuccess.png";
import Techsmith314 from "../assets/Techsmith.png";
import Adge from "../assets/Adge.jpg";
import { PiQuotesBold } from "react-icons/pi";
import { motion } from "framer-motion";

function Comments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Adge ",
      title: "Grizzy Video Editor",
      company: "",
      image: Adge,
      quote:
        "I like it! The editing is clean and nice. Good work man.. your workflow is pretty similar to how I work.",
    },
    {
      id: 2,
      name: "Lulhuz Gaming",
      title: "TikTok",
      company: "France",
      image: Lulhuz,
      quote:
        "Monteur très pro, très actif, transparent, qui communique à chaque étape et qui propose des améliorations ainsi que des retouches. Je recommande les yeux fermés !",
    },
    {
      id: 3,
      name: "Fr33",
      title: "Twitch Streamer",
      company: "United States",
      image: Fr33,
      quote:
        "As a partnered Twitch Streamer it's very difficult to find someone willing to put in the time for a quality edit. Exakou went ABOVE and BEYOND any expectations of any editor I've worked with. I'll be ordering more from you!",
    },
    {
      id: 4,
      name: "IcySuccess",
      title: "YouTuber",
      company: "United States",
      image: IcySuccess,
      quote:
        "He's got good stuff! A similar style to other editors I've worked with but most of them don't put thought into the flow of the videos. Exa does that! Videos are fast paced and still makes sense!",
    },
    {
      id: 5,
      name: "Techsmith314",
      title: "Twitch Streamer",
      company: "Canada",
      image: Techsmith314,
      quote:
        "Absolutely immaculate. Always on time, always professional, extremely courteous. Would recommend for anyone needing an editor and video manager.",
    },
  ];

  const nextComment = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevComment = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToComment = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.main
      className="mainComment"
      initial={{ opacity: 0, y: 100 }} // start invisible + pushed down
      whileInView={{ opacity: 1, y: 0 }} // fade in + slide up when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // animate once, when 30% visible
    >
      <SectionTitle title={"Client Testimonials"} />

      <div className="comments-container">
        {/* Quote Mark */}
        <PiQuotesBold
          size={80}
          style={{
            position: "absolute",
            left: "40px",
            top: "40px",
            zIndex: "10",
            fill: "#f99917",
            opacity: 0.2,
          }}
        />

        <motion.div
          className="comments-wrapper"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Navigation Arrows */}
          <button
            className="nav-arrow nav-arrow-left"
            onClick={prevComment}
            disabled={isAnimating}
          >
            <p>&#8249;</p>
          </button>

          <button
            className="nav-arrow nav-arrow-right"
            onClick={nextComment}
            disabled={isAnimating}
          >
            &#8250;
          </button>

          {/* Content */}
          <div className={`comments-content ${isAnimating ? "animating" : ""}`}>
            {/* Profile Image */}
            <div className="profile-image-container">
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="profile-image"
              />
              <div className="user-info">
                <h3 className="user-name">{currentTestimonial.name}</h3>
                <p className="user-title">{currentTestimonial.title}</p>
                <p className="user-company">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <motion.div
              className="testimonial-quote"
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              "{currentTestimonial.quote}"
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToComment(index)}
                disabled={isAnimating}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Comments;
