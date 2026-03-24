import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ArrowDown, ArrowUp } from "lucide-react";
import "../index.css";

const allProjects = [
  {
    title: "TerminPlus",
    description:
      "A multi-sport matchmaking and booking platform designed for scheduling sessions, managing player sign-ups, and finding teammates for various sports activities.",
    image: `${import.meta.env.BASE_URL}3.png`,
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL"],
    githubUrl: "https://github.com/kenanboracic4/TerminPlus",
  },
  {
    title: "Employee Records",
    description:
      "A comprehensive human resources and payroll management dashboard designed for tracking employee records, processing payments, and monitoring system anomalies.",
    image: `${import.meta.env.BASE_URL}2.png`,
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL"],
    githubUrl: "https://github.com/kenanboracic4/employee-management-system",
  },
  {
    title: "Book Hub",
    description:
      "A book recommendation and e-commerce platform that allows users to search, sell, buy books, and communicate with other users.",
    image: `${import.meta.env.BASE_URL}1.png`,
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/kenanboracic4/BookHub",
  },
  {
    title: "Student Information System",
    description:
      "A comprehensive Student Information System (SIS) desktop application designed to streamline academic administration, manage enrollments, and track performance.",
    image: `${import.meta.env.BASE_URL}5.png`,
    tech: ["Java", "Java Swing", "SQLite"],
    githubUrl: "https://github.com/kenanboracic4/Student_Management_System",
  },
  {
    title: "Movie App",
    description:
      "A movie browsing app that allows users to search for trending films, view details, and explore popular titles using a real-time movie API.",
    image: `${import.meta.env.BASE_URL}movieApp.png`,
    tech: ["React", "JavaScript", "CSS", "Framer Motion"],
    githubUrl: "https://github.com/kenanboracic4/Movie-Shows-App",
  },
  {
    title: "NewsFeed",
    description:
      "A responsive multi-platform news aggregator that delivers real-time global headlines and categorized updates through a sleek interface.",
    image: `${import.meta.env.BASE_URL}4.png`,
    tech: ["React.js", "CSS"],
    githubUrl: "https://github.com/kenanboracic4/News",
  },
  {
    title: "Svileni Kutak Website",
    description:
      "Svileni Kutak offers handcrafted luxury mulberry silk products, combining elegance, comfort, and natural beauty for everyday indulgence.",
    image: `${import.meta.env.BASE_URL}svileniKutak.png`,
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "#",
  },
  {
    title: "Restaurant Website",
    description:
      "A modern, simple and responsive restaurant website featuring a menu and visually appealing layout for showcasing dishes.",
    image: `${import.meta.env.BASE_URL}mattone.png`,
    tech: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/kenanboracic4/MattoneWebsite",
  },
  {
    title: "Whack-a-Mole Game",
    description:
      "A fun and interactive browser game where players try to click on moles that pop up randomly before they disappear.",
    image: `${import.meta.env.BASE_URL}whackAmole.png`,
    tech: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/kenanboracic4/Whack-A-Mole",
  },
];

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  const toggleProjects = () => {
    setVisibleProjectsCount((prev) =>
      prev === allProjects.length ? 3 : allProjects.length
    );
  };

  const visibleProjects = allProjects.slice(0, visibleProjectsCount);
  const showAll = visibleProjectsCount === allProjects.length;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h2
            className={`projects-title ${darkMode ? "gradient-dark" : "gradient-light"
              }`}
          >
            Featured Projects
          </h2>
          <p
            className={`projects-description ${darkMode ? "text-light" : "text-dark"
              }`}
          >
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </motion.div>


        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`project-card ${darkMode ? "card-dark" : "card-light"}`}
            >

              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay" />
              </div>


              <div className="project-content">
                <h3
                  className={`project-title ${darkMode ? "text-white" : "text-dark"
                    }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`project-desc ${darkMode ? "text-light" : "text-dark"
                    }`}
                >
                  {project.description}
                </p>


                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-badge ${darkMode ? "tech-dark" : "tech-light"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>


                <div className="project-buttons">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-code ${darkMode ? "btn-outline-dark" : "btn-outline-light"
                      }`}
                  >
                    <Github size={16} className="icon" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="load-more-container">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleProjects}
            className={`load-more-btn ${darkMode ? "dark" : "light"}`}
          >
            {showAll ? (
              <>
                <ArrowUp size={16} style={{ marginRight: "6px" }} />
                Close All
              </>
            ) : (
              <>
                <ArrowDown size={16} style={{ marginRight: "6px" }} />
                Load More Projects
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;