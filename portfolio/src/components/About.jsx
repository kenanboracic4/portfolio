import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import '../index.css';
import myIcon from '../hero-myicon.png';

const About = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className={`about-title ${darkMode ? "gradient-dark" : "gradient-light"}`}>About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-card"
        >
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-image-wrapper"
            >
              <div className={`image-gradient ${darkMode ? "dark-gradient" : "light-gradient"}`}>
                <div className={`image-inner ${darkMode ? "bg-dark" : "bg-light"}`}>
                  <img
                    src={myIcon}
                    alt="Profile"
                    className="profile-img"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`image-border ${darkMode ? "border-dark" : "border-light"}`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="about-text"
            >

              <h3 className={`subtitle ${darkMode ? "text-white" : "text-dark"}`}>
                Hi, I'm Kenan Boracic | Full-Stack Engineer
              </h3>

              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
                My work is defined by a deep commitment to **end-to-end ownership**. I specialize in architecting scalable backend systems and crafting high-fidelity frontends, ensuring that every layer of the stack — from complex database schemas to the final UI interaction — operates with absolute precision and performance.
              </p>

              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
                With a primary focus on the **PERN stack** and a growing expertise in high-performance Python frameworks, I build digital solutions that are as structurally sound as they are visually engaging. I prioritize clean, maintainable code and strategic optimization to deliver products that don't just function, but truly excel in a production environment.
              </p>


              <div className="about-stats">
                <div className={`stat-box ${darkMode ? "bg-dark-box" : "bg-light-box"}`}>
                  <a
                    href={`${import.meta.env.BASE_URL}KenanBoracic.pdf`}
                    download="KenanBoracic.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-download-link"
                    style={{ textDecoration: 'none', width: '100%', display: 'block' }}
                  >
                    <div id="cv-btn" className={`stat-label ${darkMode ? "text-blue-50" : "text-blue-500"}`}>
                      Download CV
                    </div>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
