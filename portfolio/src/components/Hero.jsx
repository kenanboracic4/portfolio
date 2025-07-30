"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import '../index.css'

const Hero = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Code that looks good and works even better"

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 800
    let start = null

    const ease = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const step = (timestamp) => {
      if (!start) start = timestamp
      const timeElapsed = timestamp - start
      const progress = Math.min(timeElapsed / duration, 1)
      const run = startPosition + distance * ease(progress)
      window.scrollTo(0, run)
      if (timeElapsed < duration) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step) // <-- Ovo je nedostajalo
  }

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-header-wrapper"
        >
          <h1 className="hero-title">
            <span className={darkMode ? "gradient-text-dark" : "gradient-text-light"}>
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className={darkMode ? "cursor-blink-dark" : "cursor-blink-light"}
            >
              |
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className={darkMode ? "hero-subtitle-dark" : "hero-subtitle-light"}
          >
            I build what looks good — and works even better
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="hero-buttons"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
