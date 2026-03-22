import AnimatedSection from "./AnimatedSection";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaFutbol } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      year: "2025",
      title: "Web Development Intern",
      organization: "Varda Creatives",
      icon: <FaBriefcase />,
      description: "Completed 3-month intensive internship focusing on Node.js and Next.js development",
      details: [
        "Worked with Node.js for backend development",
        "Developed applications using Next.js framework",
        "Focused on responsive web layout design",
        "Implemented performance optimization techniques"
      ],
      type: "internship",
      duration: "3 months",
      certificate: true
    },
    {
      id: 2,
      year: "2022-Present",
      title: "Bachelor of IT Student",
      organization: "Himalayan Whitehouse International College",
      icon: <FaGraduationCap />,
      description: "Currently pursuing Bachelor's degree in Information Technology",
      details: [
        "Focus on software development and web technologies",
        "Learning programming fundamentals and system design",
        "Participating in practical projects and assignments"
      ],
      type: "education",
      duration: "Ongoing"
    },
    {
      id: 3,
      year: "2024",
      title: "Web Development Internship",
      organization: "Varda Creatives",
      icon: <FaFutbol />,
      description: "Completed 3-month internship with good exposure to teamwork and discipline",
      details: [
        "Developed teamwork and leadership skills",
        "Enhanced public interaction, communication skills and discipline",
        "Learned to adapt to new ideas and technologies"
      ],
      type: "training",
      duration: "3 months"
    },
    {
      id: 4,
      year: "Ongoing",
      title: "Helped in Real World Projects and Events",
      organization: "International Taekwondo Championships",
      icon: <FaTrophy />,
      description: "helped in making international taekwondo championship's website and managing events",
      details: [
        "Gold Medalist in different sports events",
        "Participated in multiple events as a volunteer and coordinator",
        "Gained experience in event management and coordination",
        "Leadership roles in sports teams and clubs",
        "Communication and teamwork skills through real world projects"
      ],
      type: "achievement",
      duration: "Several years"
    }
  ];

  return (
    <AnimatedSection>
      <section id="experience">
        <div className="section-header">
          <h2>My Journey</h2>
          <p className="section-subtitle">Academic, professional, and personal development</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    {exp.icon}
                  </div>
                  <div>
                    <h3>{exp.title}</h3>
                    <div className="timeline-organization">{exp.organization}</div>
                    <div className="timeline-duration">{exp.duration} • {exp.type}</div>
                  </div>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <ul className="timeline-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {exp.certificate && (
                  <div className="certificate-badge">
                    <span>Certificate Available</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="volunteer-section">
          <h3>Volunteer & Leadership Experience</h3>
          <div className="volunteer-content">
            <p>
              I have actively participated in volunteer activities related to software designing campaigns 
              and website development. My leadership roles in clubs and sports teams have helped me develop 
              strong organizational and team management skills.
            </p>
            <ul>
              <li>Leadership roles in college clubs and sports teams</li>
              <li>Volunteer in software designing campaigns</li>
              <li>Participation in website development initiatives</li>
              <li>Team coordination in sports events and competitions</li>
            </ul>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}