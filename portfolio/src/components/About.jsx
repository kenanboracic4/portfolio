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
                Hi, I'm Kenan Boracic – a Full-Stack Developer
              </h3>
              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
                What drives me isn't just writing code — it's the satisfaction of building something complete, from the database schema to the pixel on screen. I love owning the full picture: designing APIs that feel intuitive, architecting backends that scale, and crafting frontends that users actually enjoy.
              </p>
              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
                I care about writing code that's clean, systems that are reliable, and products that genuinely serve people. Whether I'm deep in server logic or fine-tuning a UI, I bring the same curiosity, attention to detail, and sense of ownership to every layer of the stack.
              </p>

              {/* 
              <div className="about-stats">
                <div id="cv-div" className={`stat-box ${darkMode ? "bg-dark-box" : "bg-light-box"}`}>

                  <div id="cv-btn" className={`stat-label ${darkMode ? "text-blue-50" : "text-blue-500"}`}>Download CV</div>
                </div>

              </div>
              */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
