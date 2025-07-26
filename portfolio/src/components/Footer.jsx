import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import "../index.css"

const Footer = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Let's create something amazing together!"

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const typeTimer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeTimer)
        }
      }, 80)
      return () => clearInterval(typeTimer)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>
      <div className="footer-container">
        <div className="footer-text-wrapper">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-heading"
          >
            <span className={`footer-gradient ${darkMode ? "gradient-dark" : "gradient-light"}`}>
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className={`footer-cursor ${darkMode ? "cursor-dark" : "cursor-light"}`}
            >
              |
            </motion.span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer-icons"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.2, y: -5 }}
              viewport={{ once: true }}
              className={`footer-icon ${darkMode ? "icon-dark" : "icon-light"}`}
              aria-label={social.label}
            >
              <social.icon className={`footer-icon-svg ${darkMode ? "text-white" : "text-dark"}`} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`footer-copy ${darkMode ? "text-white" : "text-dark"}`}
        >
          <p>&copy; {new Date().getFullYear()} Kenan Boracic. All rights reserved.</p>
          <p className="footer-built-with">Built with React, CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
