import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin ,FaInstagram  } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const heroImage = "https://via.placeholder.com/400x400";

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero" id="hero">
     
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#ffffff" } },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#6c63ff" },
          },
        }}
      />

      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Muskan</span> 👋
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "Backend Enthusiast",
            2000,
            "Tech Explorer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="typing"
          repeat={Infinity}
        />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm passionate about crafting beautiful and user-friendly digital experiences. Always curious, always learning.
        </motion.p>

       
        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <a href="https://github.com/ATIMuskan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/muskan-shrivas-757091233/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://www.instagram.com/epicure.amare/" target="_blank" rel="noopener noreferrer">
  <FaInstagram size={28} />
</a>
        </motion.div>

       
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">Let's Connect</a>
        </motion.div>
      </div>

     
      <motion.div
        className="hero-image"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImage} alt="Muskan - Developer" />
      </motion.div>

      
      <div className="scroll-down">
        <a href="#projects">
          ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
