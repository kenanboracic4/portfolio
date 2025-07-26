"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./AnimatedBackground.css"

const AnimatedBackground = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const backgroundVariants = darkMode
    ? [
        "radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)",
        "radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 50%)",
        "radial-gradient(circle at 40% 80%, #1e40af 0%, transparent 50%)",
        "radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)",
      ]
    : [
        "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
        "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
        "radial-gradient(circle at 40% 80%, #3b82f6 0%, transparent 50%)",
        "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
      ]

  return (
    <div className="animated-bg-wrapper">
      <motion.div
        className={`gradient-bg ${darkMode ? "dark" : ""}`}
        animate={{ background: backgroundVariants }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {[...Array(50)].map((_, i) => {
        const randomX = (Math.random() - 0.5) * 200
        const randomY = (Math.random() - 0.5) * 200
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className={`particle ${darkMode ? "dark" : ""}`}
            animate={{
              x: [0, randomX, 0],
              y: [0, randomY, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        )
      })}

      <motion.div
        className={`mouse-follower ${darkMode ? "dark" : ""}`}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </div>
  )
}

export default AnimatedBackground
