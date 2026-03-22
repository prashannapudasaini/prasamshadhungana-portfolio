"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaDesktop, FaMobile } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "IOFTC Nepal Website",
      description: "Helped develop an international event website for a real organization focusing on performance, user experience, and responsive design. Implemented modern web technologies to create an engaging platform.",
      technologies: ["Next.js", "React", "Node.js", "HTML/CSS", "JavaScript"],
      category: "web",
      liveLink: "https://ioftcnepal.org",
      features: ["International event platform", "Performance optimized", "Responsive design", "Real organization"],
      type: "website"
    },
    {
      id: 2,
      title: "School Management System",
      description: "Developed a comprehensive system for managing school operations including student records, attendance, and administrative tasks using Java programming.",
      technologies: ["Java", "Swing", "MySQL", "Database"],
      category: "software",
      features: ["Student management", "Attendance tracking", "Grade management", "User-friendly interface"],
      type: "software"
    },
    {
      id: 3,
      title: "TIC TAC TOE Game",
      description: "Created an interactive TIC TAC TOE game with game logic implementation. A fun project to practice programming fundamentals.",
      technologies: ["C Programming", "C++", "Game Development"],
      category: "game",
      features: ["Interactive gameplay", "User-friendly interface", "Game logic", "Score tracking"],
      type: "game"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "Built a responsive portfolio website to showcase my skills, projects, and experience using modern web technologies.",
      technologies: ["React", "Next.js", "CSS3", "JavaScript"],
      category: "web",
      features: ["Responsive design", "Modern UI/UX", "Performance optimized", "Interactive elements"],
      type: "website"
    },
    {
      id: 5,
      title: "AI-based Book Recommendation System",
      description: "Developed an AI-based system for recommending books to users based on their preferences and reading history.",
      technologies: ["Python", "TensorFlow", "HTML/CSS", "JavaScript", "MySQL"],
      category: "software",
      features: ["AI-powered recommendations", "User preference analysis", "Personalized suggestions", "Data visualization"],
      type: "software"
    },
    {
      id: 6,
      title: "Bag Store Management System",
      description: "Developed a comprehensive system for managing bag inventory in a store with online payment integration",
      technologies: [ "PHP", "HTML/CSS", "JavaScript", "MySQL"],
      category: "website",
      features: ["Orders and Cart Management", "Inventory management", "User-friendly interface", "Online Payment Integration"],
      type: "website"
    },
    {
      id: 7,
      title: "Everest Taekwondo School Management System",
      description: "Developed a comprehensive system for managing student enrollments, training schedules, attendance tracking, performance tracking, billings, reports and administrative tasks for a taekwondo school.",
      technologies: ["React", "FastAPI", "JavaScript", "PostgresSQL"],
      category: "software",
      features: ["Attendance tracking", "Performance tracking", "User-friendly interface", "Billings", "Reports", "Role-Based Access Control"],
      type: "software"
    },
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <p className="section-subtitle">Practical implementations of my learning and skills</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-header">
              <div className={`project-type ${project.type}`}>
                {project.type === 'website' && <FaDesktop />}
                {project.type === 'software' && <FaDesktop />}
                {project.type === 'game' && <FaMobile />}
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
            </div>

            <div className="project-content">
              <p>{project.description}</p>
              
              <div className="project-features">
                <h4>Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="project-note">
        <p>
          <strong>Note:</strong> I have also worked on a <strong>Gas Detection and Alarming System</strong> 
           project which demonstrates my ability to work on hardware-software integrated systems.
        </p>
      </div>
    </section>
  );
}