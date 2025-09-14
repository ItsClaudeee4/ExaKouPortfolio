import React from "react";
import "./Footer.css";
import logo from "../assets/clip.png";
import Btn from "./Btn";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Brand */}
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} className="logoA" />
              <p>ExaKou</p>
              <img src={logo} className="logoB" />
            </div>
            <p className="brand-tagline">Because every frame matters</p>
            <div className="social-links">
              <a
                href="https://x.com/ExaKou"
                className="social-link"
                aria-label="GitHub"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.tiktok.com/@exakou"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTHjTEQFcwhSBIQRBkFxd3A"
                className="social-link"
                aria-label="Twitter"
              >
                <IoLogoYoutube />
              </a>
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="footer-nav">
            <h3 className="nav-title">Navigation</h3>
            <div className="sections-links">
              <a href="#home" className="" aria-label="twitter">
                Home
              </a>
              <a href="#projects" className="" aria-label="tiktok">
                Projects
              </a>
              <a href="#skills" className="" aria-label="youtube">
                Skills
              </a>
              <a href="#about" className="" aria-label="youtube">
                About
              </a>
              <a href="#contact" className="" aria-label="youtube">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="footer-contact">
            <h3 className="contact-title">Get In Touch</h3>
            <div className="contact-info">
              <p className="contact-item">Email: exakou.edit@gmail.com</p>
            </div>
            <Btn
              BtnText={"watch showreel"}
              link={"https://youtu.be/OveydrJ9A5I"}
            />
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <p className="copyright">© 2025 | All rights reserved.</p>
          <a
            href="https://itsclaudeee4.github.io/Portfolio/"
            className="credits"
          >
            Designed & Built by Hichem <span className="heart">❤️</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
