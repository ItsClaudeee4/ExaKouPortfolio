import React, { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";
import "./Contact.css";
import "./Btn.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail, CiChat1 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p55y9hi",
        "template_xqyf6rh",
        form.current,
        "jbtRtg7ISg9tijnD1"
      )
      .then(() => {
        alert("Message sent successfuly");
      })
      .catch((err) => {
        alert("failed to send message", err);
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
              initial="hidden"
              whileInView="visible"
              ref={form}
              onSubmit={sendEmail}
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Name */}
              <motion.div
                className="form-group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              {/* Email */}
              <motion.div
                className="form-group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              {/* Message */}
              <motion.div
                className="form-group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              {/* Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <button className="btnA" type="submit">
                  Send Message
                </button>
              </motion.div>
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
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon-wrapper">
                <CiMail color="#f99917" size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">exakou.edit@gmail.com</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="social-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="social-title">Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://x.com/ExaKou"
                  className="social-link"
                  aria-label="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter color="#f99917" />
                </a>
                <a
                  href="https://www.tiktok.com/@exakou"
                  className="social-link"
                  aria-label="tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok color="#f99917" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCTHjTEQFcwhSBIQRBkFxd3A"
                  className="social-link"
                  aria-label="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.instagram.com/exakou_edit/"
                  className="social-link"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color="#f99917" />
                </a>
                <a
                  href="https://ytjobs.co/talent/profile/283573?r=474"
                  className="social-link"
                  aria-label="Ytjobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.fiverr.com/exakou/edit-funny-entertaining-high-engaging-gaming-videos-for-you?utm_medium=shared&utm_source=copy_link&utm_campaign=gig&utm_term=XqjqQD"
                  className="social-link"
                  aria-label="fiverr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFiverr color="#f99917" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Contact;
