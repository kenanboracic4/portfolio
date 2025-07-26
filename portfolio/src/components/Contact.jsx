"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import emailjs from '@emailjs/browser';
import "../index.css"

const Contact = ({ darkMode }) => {
  const ref = useRef(null)
   const formRef = useRef(null); // Dodan ref za formu
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
   const [isSending, setIsSending] = useState(false); // Stanje za prikazivanje loadinga
  const [isSuccess, setIsSuccess] = useState(false); // Stanje za uspješno slanje
  const [error, setError] = useState(null); // Stanje za greške
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true);
    setError(null);
     
    try {
      // TODO: Zamijeni ove ID-jeve sa svojim podacima iz EmailJS dashboarda
      await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
       setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000); // Sakrij poruku nakon 3 sekunde
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const contactDetails = [
    { icon: Mail, label: "Email", value: "kenanboracic.dev@gmail.com", color: "blue" },
    { icon: Phone, label: "Phone", value: "+387 060 3470 471", color: "green" },
    { icon: MapPin, label: "Location", value: "Sarajevo, BiH", color: "purple" },
  ];


  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className={`contact-title ${darkMode ? "dark-title" : ""}`}>
            <span className={darkMode ? "gradient-dark" : "gradient-light"}>
              Get In Touch
            </span>
          </h2>
          <p className={`contact-subtitle ${darkMode ? "dark-subtitle" : ""}`}>
           Have a project in mind? Let’s build it together!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info-container"
          >
            <div>
              <h3 className={`contact-info-title ${darkMode ? "dark-text" : ""}`}>
                Let's talk about your project
              </h3>
              <p className={`contact-info-text ${darkMode ? "dark-info-text" : ""}`}>
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="contact-items">
              {[
                 { icon: Mail, label: "Email", value: "kenanboracic.dev@gmail.com", color: "blue" },
                { icon: Phone, label: "Phone", value: "+387 060 3470 471", color: "green" },
                { icon: MapPin, label: "Location", value: "Sarajevo, BiH", color: "purple" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`contact-item ${darkMode ? "dark-contact-item" : ""}`}
                >
                  <div className={`contact-icon-container ${contact.color}`}>
                    <contact.icon className={`contact-icon icon-${contact.color}`} />
                  </div>
                  <div>
                    <div className={`contact-label ${darkMode ? "dark-text" : ""}`}>{contact.label}</div>
                    <div className={darkMode ? "dark-contact-value" : "contact-value"}>{contact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`contact-form-container ${darkMode ? "dark-form" : ""}`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={`Your ${field}`}
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              {/* Feedback poruke */}
              {isSuccess && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact