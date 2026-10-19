
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Menu,
  X,
  Code2,
  Smartphone,
  Database,
  GraduationCap,
  MapPin,
  Send,
  ExternalLink,
} from "lucide-react";

import "./styles/global.css";

const skills = [
  { name: "HTML & CSS", category: "Web Development" },
  { name: "JavaScript", category: "Web Development" },
  { name: "React", category: "Web Development" },
  { name: "PHP", category: "Web Development" },
  { name: "Flutter & Dart", category: "Mobile Development" },
  { name: "Firebase", category: "Database & Backend" },
  { name: "MySQL", category: "Database & Backend" },
  { name: "Networking", category: "IT & Networking" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "System Analysis", category: "IT & Networking" },
];

const projects = [
  {
    number: "01",
    name: "ArchConnect KE",
    type: "Mobile Application",
    description:
      "A Flutter application designed to connect clients, companies and professionals for projects, communication and service delivery.",
    technologies: ["Flutter", "Dart", "Firebase"],
    icon: Smartphone,
    status: "In development",
  },
  {
    number: "02",
    name: "StudyHub Portal",
    type: "Education Technology",
    description:
      "A learning platform concept that helps students access study materials and quizzes to support effective learning.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: GraduationCap,
    status: "In development",
  },
  {
    number: "03",
    name: "Student Registration System",
    type: "Web Application",
    description:
      "A university registration system concept for managing student information and registrations through a web interface.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    icon: Database,
    status: "Practice project",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fullName = "Wenses Sang Network and Cloud Engineer";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedName === fullName) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedName === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(
        () => {
          setTypedName((current) =>
            isDeleting
              ? current.slice(0, -1)
              : fullName.slice(0, current.length + 1)
          );
        },
        isDeleting ? 45 : 90
      );
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting]);

  const closeMenu = () => setMenuOpen(false);

  const navigation = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">WS</span>
          <span>
            Wenses<span className="brand-accent">.</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="portfolio-navigation"
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
        >
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HOME / HERO */}
        <section className="hero section-container" id="home">
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />

            <div className="profile-card">
              <div className="profile-image">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Wenses Sang"
                  onError={(event) => {
                    console.error(
                      "Profile picture could not load:",
                      event.currentTarget.src
                    );
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="profile-initials">WS</span>
              </div>

              <div className="profile-card-info">
                <h3
                  className="typed-name"
                  aria-label={fullName}
                  aria-live="off"
                >
                  {typedName}
                  <span className="typing-cursor" aria-hidden="true">
                    |
                  </span>
                </h3>
              </div>

              <div className="profile-card-footer">
                <span>
                  <Code2 size={15} /> Connecting technology
                </span>
                <span
                  className="profile-online"
                  aria-label="Available to connect"
                />
              </div>
            </div>

            <div className="floating-card floating-code">
              <Code2 size={20} />
              <div>
                <strong>Clean code</strong>
                <small>Built with purpose</small>
              </div>
            </div>

            <div className="floating-card floating-tech">
              <span className="tech-symbol">{"</>"}</span>
              <div>
                <strong>Always learning</strong>
                <small>Networks · Cloud · Web</small>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              IT Student &amp; Aspiring Network and Cloud Engineer
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              Wenses <span>Sang.</span>
            </h1>

            <h2 className="hero-subtitle">
              Network &amp; Cloud Engineer
              <br />
              <span>Building connected digital solutions.</span>
            </h2>

            <p className="hero-description">
              I'm an Information Technology student passionate about
              computer networking, cloud technologies, web development,
              mobile applications and building useful digital solutions.
              I continue to develop my skills through study and practical
              projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <ArrowRight size={18} />
              </a>

              <a className="button button-outline" href="#contact">
                Contact Me <Mail size={17} />
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={16} />
              <span>Kenya</span>
              <span className="location-divider">/</span>
              <span>Open to learning and collaboration</span>
            </div>
          </div>

          <a className="scroll-hint" href="#about">
            <ArrowDown size={16} />
            <span>Scroll to discover</span>
          </a>
        </section>

        {/* ABOUT */}
        <section className="about section-container" id="about">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="A little about me"
            description="The person behind the projects, the code and the ideas."
          />

          <div className="about-grid">
            <div className="about-main">
              <span className="about-symbol">
                <Code2 size={26} />
              </span>

              <h3>Technology with a purpose.</h3>

              <p>
                I'm pursuing a Bachelor of Science in Information Technology
                at Tom Mboya University. I enjoy exploring how technology
                can solve everyday problems, especially in education,
                communication and digital services.
              </p>

              <p>
                My interests include computer networking, cloud technology,
                web development, mobile applications, databases and system
                analysis. I learn by building projects, experimenting with
                new tools and improving my technical skills.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <ArrowRight size={16} />
              </a>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">01</span>
                <h4>Networking</h4>
                <p>Learning network configuration and connectivity.</p>
              </div>

              <div className="stat-card">
                <span className="stat-number">02</span>
                <h4>Cloud Technology</h4>
                <p>Exploring cloud platforms and online services.</p>
              </div>

              <div className="stat-card">
                <span className="stat-number">03</span>
                <h4>Web Development</h4>
                <p>Creating responsive and useful websites.</p>
              </div>

              <div className="stat-card">
                <span className="stat-number">04</span>
                <h4>Continuous Learning</h4>
                <p>Growing through study and practical projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section-container" id="skills">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Skills & technologies"
            description="Technologies and IT areas I have been learning and working with."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>

                <ArrowRight className="skill-arrow" size={17} />
              </div>
            ))}
          </div>

          <p className="skills-note">
            My toolkit continues to grow as I learn and build new projects.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="projects section-container" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I'm building"
            description="Practical ideas that help me turn what I learn into working solutions."
          />

          <div className="projects-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <ProjectIcon size={25} className="project-icon" />
                  </div>

                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-bottom">
                    <span className="project-status">
                      <span className="status-dot" />
                      {project.status}
                    </span>

                    <a
                      href="#contact"
                      aria-label={`Ask about ${project.name}`}
                      title="Ask about this project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education section-container" id="education">
          <SectionHeading
            eyebrow="MY LEARNING JOURNEY"
            title="Education & growth"
            description="Building a strong foundation in information technology."
          />

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <div className="education-content">
              <span className="education-label">CURRENT STUDIES</span>

              <h3>Bachelor of Science in Information Technology</h3>

              <p className="education-school">
                Tom Mboya University, Kenya
              </p>

              <p>
                Developing knowledge in programming, information systems,
                databases, computer networks, information security and
                systems analysis.
              </p>

              <div className="education-tags">
                <span>Programming</span>
                <span>Networking</span>
                <span>Information Systems</span>
              </div>
            </div>

            <span className="education-badge">Student</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section-container" id="contact">
          <div className="contact-panel">
            <div className="contact-content">
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

              <h2>
                Let's build something <span>meaningful.</span>
              </h2>

              <p>
                I'm interested in connecting with fellow developers,
                collaborators and people with ideas worth building.
                Get in touch to start a conversation.
              </p>

              <a
                className="button button-primary"
                href="mailto:wensesdann@gmail.com?subject=Portfolio%20Enquiry"
              >
                <Send size={17} /> Email Me
              </a>
            </div>

            <div className="contact-details">
              <span className="contact-label">CONTACT INFORMATION</span>

              <a href="mailto:wensesdann@gmail.com">
                <Mail size={18} />
                <span>wensesdann@gmail.com</span>
                <ArrowRight size={15} />
              </a>

              <div className="contact-location">
                <MapPin size={18} />
                <span>Kenya</span>
              </div>

              <p>Let's connect, share ideas and keep learning.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">WS</span>
          <span>
            Wenses<span className="brand-accent">.</span>
          </span>
        </a>

        <p>Designed and built by Wenses Sang.</p>

        <div className="social-links">
          <a
            href="https://github.com/Wenses-sang"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub profile"
          >
            <span className="github-text-icon">GH</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn profile"
          >
            <span className="linkedin-text-icon">in</span>
          </a>

          <a href="mailto:wensesdann@gmail.com" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
