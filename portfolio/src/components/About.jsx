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
               Hi, I’m Kenan Boracic – a Frontend Developer
              </h3>
              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
                What drives me isn't just writing code — it's the process of understanding people, translating ideas into smooth interfaces, and making sure every interaction feels just right. I love the craft behind a well-designed product: from layout and motion, to performance and accessibility.
              </p>
              <p className={`about-desc ${darkMode ? "text-white-70" : "text-gray"}`}>
               I care about the details, the people I build for, and the teams I build with. Whether I'm working solo or collaborating on a complex project, I bring empathy, curiosity, and a strong sense of ownership to everything I do.
              </p>
             

              <div className="about-stats">
                <div id="cv-div"className={`stat-box ${darkMode ? "bg-dark-box" : "bg-light-box"}`}>
                  
                  <div id="cv-btn"className={`stat-label ${darkMode ? "text-blue-50" : "text-blue-500"}`}>Download CV</div>
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
