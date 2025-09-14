import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import "./Contact.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail, CiChat1 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
              onSubmit={handleSubmit}
              className="contact-form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
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
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
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
                <Btn BtnText={"Send Message"} />
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

            <motion.div
              className="connect-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="connect-title">Let's Connect</h3>
              <p className="connect-description">
                Looking for a Video Editor/Account Manager who can save you time
                and take your content to the next level? Look no further—I’m
                available for both freelance projects and full-time
                opportunities.
              </p>
              <p className="response-time">
                I aim to reply to all inquiries within 24 hours.
              </p>
            </motion.div>

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
                >
                  <FaXTwitter
                    color="#f99917
"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@exakou"
                  className="social-link"
                  aria-label="tiktok"
                >
                  <FaTiktok color="#f99917" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCTHjTEQFcwhSBIQRBkFxd3A"
                  className="social-link"
                  aria-label="youtube"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.instagram.com/exakou_edit/"
                  className="social-link"
                  aria-label="instagram"
                >
                  <FaInstagram color="#f99917" />
                </a>
                <a
                  href="https://ytjobs.co/talent/profile/283573?r=474"
                  className="social-link"
                  aria-label="Ytjobs"
                >
                  <IoLogoYoutube color="#f99917" />
                </a>
                <a
                  href="https://www.fiverr.com/exakou/edit-funny-entertaining-high-engaging-gaming-videos-for-you?utm_medium=shared&utm_source=copy_link&utm_campaign=gig&utm_term=XqjqQD"
                  className="social-link"
                  aria-label="fiverr"
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
