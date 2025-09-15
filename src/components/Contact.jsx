import React, { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import "./Contact.css";
import "./Btn.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail, CiChat1 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [notification, setNotification] = useState(null); // { type: "success"|"error", message: string }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1q4hoij", // your service ID
        "template_x6e6vfa", // your template ID
        form.current,
        "DGsiV7-ywpSpNy4JU" // your public key
      )
      .then(() => {
        setNotification({
          type: "success",
          message: "Message sent successfully!",
        });
        form.current.reset(); // reset the form
        setTimeout(() => setNotification(null), 4000); // hide after 4s
      })
      .catch((err) => {
        setNotification({ type: "error", message: "Failed to send message." });
        console.error(err);
        setTimeout(() => setNotification(null), 4000); // hide after 4s
      });
  };

  return (
    <motion.main
      className="mainContact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle title={"Get In Touch"} />

      <section className="touch-container">
        <div className="touch-content">
          {/* Left Side - Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="form-title">Send a Message</h2>

            <motion.form
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className="input-wrapper">
                  <IoPersonOutline
                    color="#f99917"
                    style={{ position: "absolute", left: "10px" }}
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-wrapper">
                  <CiMail
                    color="#f99917"
                    style={{ position: "absolute", left: "10px" }}
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <div className="input-wrapper">
                  <CiChat1
                    color="#f99917"
                    style={{ position: "absolute", left: "10px", top: "20px" }}
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="form-textarea"
                    rows="6"
                    required
                  />
                </div>
              </div>

              {/* Button */}
              <div>
                <button className="btnA" type="submit">
                  Send Message
                </button>
              </div>
            </motion.form>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="info-title">Contact Information</h2>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <CiMail color="#f99917" size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">exakou.edit@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://x.com/ExaKou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter color="#f99917" />
                </a>
                <a
                  href="https://www.tiktok.com/@exakou"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok color="#f99917" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCTHjTEQFcwhSBIQRBkFxd3A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.instagram.com/exakou_edit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color="#f99917" />
                </a>
                <a
                  href="https://ytjobs.co/talent/profile/283573?r=474"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.fiverr.com/exakou/edit-funny-entertaining-high-engaging-gaming-videos-for-you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFiverr color="#f99917" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "15px 25px",
              backgroundColor:
                notification.type === "success" ? "#22c55e" : "#ef4444",
              color: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: 9999,
              fontWeight: "bold",
            }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

export default Contact;
