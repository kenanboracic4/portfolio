"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Zap, Users } from "lucide-react"
import "../index.css" // link na CSS

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React", "Javascript", "WordPress", "HTML/CSS"],
  },

  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces designed with user experience in mind.",
    features: ["Figma Design", "User Research"],
  },
  
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience with advanced optimization techniques.",
    features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <motion.div className="services-tag" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            Services
          </motion.div>
          <h2 className="services-title">
            What I{" "}
            <span className="gradient-text">
              Offer
            </span>
          </h2>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to bring your ideas to life with cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="service-item"
              >
                <div className="service-card">
                  {/* Background Gradient */}
                  <div className="service-bg-gradient" />

                  {/* Icon */}
                  <motion.div className="service-icon-wrapper" whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <div className="service-icon-bg">
                      <Icon className="service-icon" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    {/* Features */}
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="service-feature"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="feature-dot" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Border */}
                  <div className="service-hover-border" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
       
        </motion.div>
      </div>
    </section>
  )
}
