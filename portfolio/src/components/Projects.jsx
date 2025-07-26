import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "../index.css";

const allProjects = [
  {
    title: "Whack-a-Mole Game",
    description: "A fun and interactive browser game where players try to click on moles that pop up randomly before they disappear.",
    image: "/whackAmole.png",
    tech: [ "JavaScript", "HTML", "CSS"],
    
    githubUrl: "https://github.com/kenanboracic4/Whack-A-Mole",
  },
  {
    title: "Restaurant Website",
    description: "A modern, simple  and responsive restaurant website featuring a menu,visually appealing layout for showcasing dishes.",
    image: "/mattone.png",
    tech: [ "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/kenanboracic4/MattoneWebsite",
  },
  {
    title: "Movie App",
    description: "A movie browsing app that allows users to search for trending films, view details, and explore current popular titles using a movie API.",
    image: "/movieApp.png",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "#",
  },
 
];

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  const toggleProjects = () => {
    if (visibleProjectsCount === 3) {
      // Show all projects
      setVisibleProjectsCount(allProjects.length);
    } else {
      // Show only 3 projects
      setVisibleProjectsCount(3);
    }
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
          <h2 className={`projects-title ${darkMode ? "gradient-dark" : "gradient-light"}`}>
            Featured Projects
          </h2>
          <p className={`projects-description ${darkMode ? "text-light" : "text-dark"}`}>
            Here are some of my recent projects that showcase my skills and creativity
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
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay" />
              </div>

              <div className="project-content">
                <h3 className={`project-title ${darkMode ? "text-white" : "text-dark"}`}>
                  {project.title}
                </h3>
                <p className={`project-desc ${darkMode ? "text-light" : "text-dark"}`}>
                  {project.description}
                </p>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-badge ${darkMode ? "tech-dark" : "tech-light"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <a href={project.githubUrl}> <Github className="icon" />
                <div className="project-buttons">
                 
                  <button className={`btn-code ${darkMode ? "btn-outline-dark" : "btn-outline-light"}`}>
                   
                    Code
                    
                  </button>
                </div>
                </a>
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
    {showAll ? "Close All" : "Load More Projects"}
  </motion.button>
</div>
      </div>
    </section>
  );
};

export default Projects;