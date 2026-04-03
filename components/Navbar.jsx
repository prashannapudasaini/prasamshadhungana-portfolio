"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // close mobile menu after click
    }
  };

  // 💧 DROPLET EFFECT on click anywhere
  useEffect(() => {
    const createDroplet = (e) => {
      const droplet = document.createElement("div");
      droplet.classList.add("droplet");
      droplet.style.left = `${e.clientX - 4}px`;
      droplet.style.top = `${e.clientY - 4}px`;
      document.body.appendChild(droplet);
      setTimeout(() => droplet.remove(), 1000);
    };

    window.addEventListener("click", createDroplet);
    return () => window.removeEventListener("click", createDroplet);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-text">Prasamsha</span>
          <span className="logo-sub">Web Developer</span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("skills")}>Skills</button></li>
            <li><button onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToSection("experience")}>Experience</button></li>
            <li><button onClick={() => scrollToSection("certificates")}>Certificates</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>

          <div className="nav-actions">
            <a href="/Prashanna Pudasaini CV.pdf" download className="cv-download">
              <FaFileDownload /> CV
            </a>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}