import "./App.css";

// ==============================
// PROJECT IMAGES
// ==============================

// SmartHire
import smarthireLogin from "./assets/projects/smarthire-login.png";
import smarthireDashboard from "./assets/projects/smarthire-dashboard.png";

// Employee Attendance
import attendanceDashboard from "./assets/projects/attendance-dashboard.png";
import attendanceEmployees from "./assets/projects/attendance-employees.png";
import attendanceChatbot from "./assets/projects/attendance-chatbot.png";

// College Event Management
// IMPORTANT: These filenames include .png.jpeg
import collegeEventDashboard from "./assets/projects/college-event-dashboard.png.jpeg";
import collegeEventPending from "./assets/projects/college-event-pending.png.jpeg";
import collegeEventCreate from "./assets/projects/college-event-create.png.jpeg";

function App() {
  return (
    <div className="app">
      {/* =========================================
          NAVBAR
      ========================================= */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="logo">
            Teena<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>
        </div>
      </header>

      {/* =========================================
          HERO
      ========================================= */}
      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="availability-badge">
                <span className="status-dot"></span>
                OPEN TO WORK
              </div>

              <p className="hero-intro">HELLO, I'M TEENA G</p>

              <h1 className="hero-title">
                FULL STACK
                <span>DEVELOPER</span>
              </h1>

              <p className="hero-roles">
                Frontend Developer <b>•</b> Backend Developer <b>•</b>{" "}
                Full Stack Developer <b>•</b> Software Engineer
              </p>

              <p className="hero-description">
                MCA graduate and Full Stack Developer Intern with hands-on
                experience building modern web applications using React.js,
                JavaScript, ASP.NET Core, C#, Node.js, REST APIs and SQL
                databases.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Projects
                  <span>→</span>
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                  <span>→</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View Resume
                  <span>↗</span>
                </a>
              </div>

              <div className="hero-tech">
                <span>React.js</span>
                <span>ASP.NET Core</span>
                <span>C#</span>
                <span>Node.js</span>
                <span>SQL Server</span>
              </div>
            </div>

            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="window-title">developer.js</div>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-blue">const</span>{" "}
                  <span className="code-white">developer</span> = {"{"}
                </p>

                <p className="indent">
                  <span className="code-purple">name:</span>{" "}
                  <span className="code-green">"Teena G"</span>,
                </p>

                <p className="indent">
                  <span className="code-purple">roles:</span> [
                </p>

                <p className="double-indent code-green">
                  "Frontend Developer",
                </p>
                <p className="double-indent code-green">
                  "Backend Developer",
                </p>
                <p className="double-indent code-green">
                  "Full Stack Developer",
                </p>
                <p className="double-indent code-green">
                  "Software Engineer"
                </p>

                <p className="indent">],</p>

                <p className="indent">
                  <span className="code-purple">frontend:</span>{" "}
                  <span className="code-green">"React.js"</span>,
                </p>

                <p className="indent">
                  <span className="code-purple">backend:</span>{" "}
                  <span className="code-green">"ASP.NET Core"</span>,
                </p>

                <p className="indent">
                  <span className="code-purple">database:</span>{" "}
                  <span className="code-green">"SQL Server"</span>,
                </p>

                <p className="indent">
                  <span className="code-purple">experience:</span>{" "}
                  <span className="code-green">"Full Stack Internship"</span>
                </p>

                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            ABOUT
        ========================================= */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">ABOUT ME</p>
              <h2>
                Building applications
                <span> with purpose.</span>
              </h2>
              <p>
                I enjoy turning ideas and requirements into practical,
                user-friendly web applications.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  I am an MCA graduate and Full Stack Developer Intern with
                  hands-on experience in developing web applications using
                  React.js, ASP.NET Core, C#, Node.js and SQL databases.
                </p>

                <p>
                  During my internship, I have worked on real-world
                  application development involving frontend interfaces,
                  backend REST APIs, authentication, role-based access,
                  database integration, CRUD operations, reporting,
                  pagination and responsive UI development.
                </p>

                <p>
                  I am particularly interested in building clean full-stack
                  applications where the frontend, backend and database work
                  together efficiently.
                </p>

                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">01</span>
                    <div>
                      <h3>Frontend Development</h3>
                      <p>
                        React.js interfaces with reusable components,
                        responsive layouts and API integration.
                      </p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <span className="highlight-icon">02</span>
                    <div>
                      <h3>Backend Development</h3>
                      <p>
                        REST APIs using ASP.NET Core, C#, Node.js and
                        Express.js.
                      </p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <span className="highlight-icon">03</span>
                    <div>
                      <h3>Database Development</h3>
                      <p>
                        SQL Server and MySQL database design, CRUD operations
                        and data integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <strong>01</strong>
                  <span>MCA Graduate</span>
                </div>

                <div className="stat-card">
                  <strong>04+</strong>
                  <span>Major Projects</span>
                </div>

                <div className="stat-card">
                  <strong>02+</strong>
                  <span>Full Stack Applications</span>
                </div>

                <div className="stat-card">
                  <strong>10+</strong>
                  <span>Development Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SKILLS
        ========================================= */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="section-label">TECHNICAL SKILLS</p>
              <h2>
                Technologies I <span>work with.</span>
              </h2>
              <p>
                A practical full-stack development toolkit built through
                academic projects, internship experience and hands-on
                development.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-number">01</div>
                <h3>Frontend</h3>

                <div className="skill-tags">
                  <span>React.js</span>
                  <span>JavaScript ES6+</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>React Router</span>
                  <span>React Hooks</span>
                  <span>Axios</span>
                  <span>Responsive Design</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-number">02</div>
                <h3>Backend</h3>

                <div className="skill-tags">
                  <span>ASP.NET Core</span>
                  <span>C#</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>REST APIs</span>
                  <span>JWT</span>
                  <span>Authorization</span>
                  <span>RBAC</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-number">03</div>
                <h3>Database</h3>

                <div className="skill-tags">
                  <span>SQL Server</span>
                  <span>MySQL</span>
                  <span>Entity Framework Core</span>
                  <span>CRUD</span>
                  <span>Database Integration</span>
                  <span>Filtering</span>
                  <span>Pagination</span>
                  <span>Reporting</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-number">04</div>
                <h3>Tools & Development</h3>

                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Swagger</span>
                  <span>Postman</span>
                  <span>Jira</span>
                  <span>npm</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECTS
        ========================================= */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">SELECTED PROJECTS</p>
              <h2>
                Things I have <span>built.</span>
              </h2>
              <p>
                A selection of full-stack applications and technical projects
                demonstrating my development experience.
              </p>
            </div>

            {/* =====================================
                PROJECT 1 - SMARTHIRE
            ===================================== */}
            <article className="project-card featured-project">
              <div className="project-top">
                <div>
                  <span className="project-type">FEATURED PROJECT</span>
                  <h3>SmartHire</h3>
                  <p className="project-subtitle">
                    Full Stack Recruitment Platform
                  </p>
                </div>

                <div className="project-index">01</div>
              </div>

              <div className="project-gallery two-images">
                <div className="project-image-frame">
                  <img
                    src={smarthireLogin}
                    alt="SmartHire login page"
                    className="project-image"
                  />
                </div>

                <div className="project-image-frame">
                  <img
                    src={smarthireDashboard}
                    alt="SmartHire dashboard"
                    className="project-image"
                  />
                </div>
              </div>

              <div className="project-content-grid">
                <div>
                  <p className="project-description">
                    SmartHire is a full-stack recruitment platform designed to
                    manage the hiring workflow between recruiters and
                    candidates. The application includes authentication,
                    recruitment management, job postings, candidate
                    management, assessments and interview workflows.
                  </p>

                  <p className="project-description">
                    The application was developed using React.js for the
                    frontend and ASP.NET Core with C# for the backend, with
                    SQL Server used for persistent data management.
                  </p>
                </div>

                <div>
                  <h4>Key Features</h4>

                  <ul className="feature-list">
                    <li>Candidate and recruiter workflows</li>
                    <li>Job posting and candidate management</li>
                    <li>Assessment and interview workflows</li>
                    <li>JWT authentication and role-based access</li>
                    <li>REST API integration</li>
                    <li>CRUD operations and data management</li>
                    <li>Search, filtering and pagination</li>
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  <span>React.js</span>
                  <span>ASP.NET Core</span>
                  <span>C#</span>
                  <span>SQL Server</span>
                  <span>JWT</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://smarthire-full-stack-recruitment-pl.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link primary-link"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/teenag015-ai/smarthire-full-stack-recruitment-platform"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="demo-box">
                <div className="demo-heading">
                  <span>DEMO ACCOUNTS</span>
                  <small>For recruiters to explore the application</small>
                </div>

                <div className="credentials-grid">
                  <div className="credential">
                    <strong>Candidate</strong>
                    <p>Email: ananya.reddy@gmail.com</p>
                    <p>Password: Candidate@123</p>
                  </div>

                  <div className="credential">
                    <strong>Recruiter</strong>
                    <p>Email: ananya.sharma@smarthire.com</p>
                    <p>Password: Recruiter@123</p>
                  </div>
                </div>
              </div>
            </article>

            {/* =====================================
                PROJECT 2 - EMPLOYEE ATTENDANCE
            ===================================== */}
            <article className="project-card">
              <div className="project-top">
                <div>
                  <span className="project-type">FULL STACK APPLICATION</span>
                  <h3>Employee Meeting Attendance System</h3>
                  <p className="project-subtitle">
                    Meeting Management & Attendance Tracking Platform
                  </p>
                </div>

                <div className="project-index">02</div>
              </div>

              <div className="project-gallery three-images">
                <div className="project-image-frame">
                  <img
                    src={attendanceDashboard}
                    alt="Employee attendance dashboard"
                    className="project-image"
                  />
                </div>

                <div className="project-image-frame">
                  <img
                    src={attendanceEmployees}
                    alt="Employee management screen"
                    className="project-image"
                  />
                </div>

                <div className="project-image-frame">
                  <img
                    src={attendanceChatbot}
                    alt="Attendance chatbot"
                    className="project-image"
                  />
                </div>
              </div>

              <div className="project-content-grid">
                <div>
                  <p className="project-description">
                    A role-based employee meeting and attendance management
                    system developed using React.js, ASP.NET Core, C# and SQL
                    Server.
                  </p>

                  <p className="project-description">
                    The system provides separate workflows for Admin, Manager
                    and Employee users. It supports meeting management,
                    attendance tracking and monthly attendance reporting.
                  </p>
                </div>

                <div>
                  <h4>Key Features</h4>

                  <ul className="feature-list">
                    <li>Admin, Manager and Employee roles</li>
                    <li>Department, manager and employee management</li>
                    <li>Meeting creation and calendar management</li>
                    <li>Meeting-wise attendance tracking</li>
                    <li>Monthly attendance reports</li>
                    <li>Search and pagination</li>
                    <li>Automated manager daily meetings</li>
                    <li>Indian public holiday exclusion</li>
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  <span>React.js</span>
                  <span>ASP.NET Core</span>
                  <span>C#</span>
                  <span>SQL Server</span>
                  <span>JWT</span>
                  <span>REST API</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://employee-meeting-attendance-system-pink.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link primary-link"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/teenag015-ai/employee-meeting-attendance-system"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="demo-box">
                <div className="demo-heading">
                  <span>DEMO ACCOUNTS</span>
                  <small>For recruiters to explore the application</small>
                </div>

                <div className="credentials-grid">
                  <div className="credential">
                    <strong>Manager</strong>
                    <p>Email: rahul.sharma@technoforte.com</p>
                    <p>Password: Rahul@123</p>
                  </div>

                  <div className="credential">
                    <strong>Employee</strong>
                    <p>Email: rakshitha@company.com</p>
                    <p>Password: raksh@123</p>
                  </div>
                </div>
              </div>
            </article>

            {/* =====================================
                PROJECT 3 - COLLEGE EVENT
            ===================================== */}
            <article className="project-card">
              <div className="project-top">
                <div>
                  <span className="project-type">FULL STACK APPLICATION</span>
                  <h3>College Event Management System</h3>
                  <p className="project-subtitle">
                    Event Planning and Registration Platform
                  </p>
                </div>

                <div className="project-index">03</div>
              </div>

              <div className="project-gallery three-images">
                <div className="project-image-frame">
                  <img
                    src={collegeEventDashboard}
                    alt="College Event Management dashboard"
                    className="project-image"
                  />
                </div>

                <div className="project-image-frame">
                  <img
                    src={collegeEventPending}
                    alt="College Event pending events screen"
                    className="project-image"
                  />
                </div>

                <div className="project-image-frame">
                  <img
                    src={collegeEventCreate}
                    alt="College Event create event screen"
                    className="project-image"
                  />
                </div>
              </div>

              <div className="project-content-grid">
                <div>
                  <p className="project-description">
                    A role-based college event management application
                    developed to simplify event creation, approval,
                    registration and participant management.
                  </p>

                  <p className="project-description">
                    The application provides different workflows for Admin,
                    Dean, Department, Teacher and Student users.
                  </p>
                </div>

                <div>
                  <h4>Key Features</h4>

                  <ul className="feature-list">
                    <li>Multiple role-based user workflows</li>
                    <li>Event creation and management</li>
                    <li>Event approval workflow</li>
                    <li>Student event registration</li>
                    <li>Participant management</li>
                    <li>Search and filtering</li>
                    <li>Event reporting</li>
                    <li>Calendar-based event management</li>
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/teenag015-ai/college-event-system"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link primary-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>

            {/* =====================================
                PROJECT 4 - APPLE QUALITY
            ===================================== */}
            <article className="project-card apple-project">
              <div className="project-top">
                <div>
                  <span className="project-type">DEEP LEARNING RESEARCH</span>
                  <h3>Apple Quality Detection</h3>
                  <p className="project-subtitle">
                    Fresh & Rotten Apple Classification
                  </p>
                </div>

                <div className="project-index">04</div>
              </div>

              <div className="apple-project-grid">
                <div>
                  <p className="project-description">
                    A deep learning research project for classifying apples as
                    fresh or rotten using CNN-based approaches and transfer
                    learning.
                  </p>

                  <p className="project-description">
                    The project compares a Custom CNN with VGG19, MobileNet
                    and EfficientNet models to evaluate their performance for
                    apple quality classification.
                  </p>

                  <div className="methodology-box">
                    <h4>Approach</h4>

                    <div className="methodology-list">
                      <div>
                        <span>01</span>
                        <p>Image dataset preparation</p>
                      </div>

                      <div>
                        <span>02</span>
                        <p>Training and testing deep learning models</p>
                      </div>

                      <div>
                        <span>03</span>
                        <p>Model performance comparison</p>
                      </div>

                      <div>
                        <span>04</span>
                        <p>Fresh vs rotten classification</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="results-panel">
                  <div className="results-header">
                    <span>MODEL RESULTS</span>
                    <small>Test Accuracy</small>
                  </div>

                  <div className="result-row best-result">
                    <div>
                      <strong>EfficientNet</strong>
                      <small>Best observed result</small>
                    </div>
                    <span>99.63%</span>
                  </div>

                  <div className="result-row">
                    <div>
                      <strong>MobileNet</strong>
                      <small>Test accuracy</small>
                    </div>
                    <span>97.11%</span>
                  </div>

                  <div className="result-row">
                    <div>
                      <strong>VGG19</strong>
                      <small>Test accuracy</small>
                    </div>
                    <span>96.37%</span>
                  </div>

                  <div className="result-row">
                    <div>
                      <strong>Custom CNN</strong>
                      <small>Baseline model</small>
                    </div>
                    <span>Baseline</span>
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  <span>Python</span>
                  <span>CNN</span>
                  <span>VGG19</span>
                  <span>MobileNet</span>
                  <span>EfficientNet</span>
                  <span>Deep Learning</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* =========================================
            EXPERIENCE
        ========================================= */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="section-label">EXPERIENCE</p>
              <h2>
                Where I am <span>growing.</span>
              </h2>
            </div>

            <div className="timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <span className="experience-type">
                        INTERNSHIP · FULL TIME
                      </span>

                      <h3>Full Stack Developer Intern</h3>

                      <p className="company-name">
                        Technoforte Software Pvt. Ltd.
                      </p>
                    </div>

                    <span className="experience-date">
                      June 2026 – Present
                    </span>
                  </div>

                  <p className="experience-description">
                    Working on full-stack web application development using
                    React.js, ASP.NET Core, C#, SQL Server and JWT
                    authentication.
                  </p>

                  <div className="experience-points">
                    <div>
                      <span>→</span>
                      <p>
                        Developed frontend interfaces using React.js and
                        reusable components.
                      </p>
                    </div>

                    <div>
                      <span>→</span>
                      <p>
                        Built and integrated REST APIs using ASP.NET Core and
                        C#.
                      </p>
                    </div>

                    <div>
                      <span>→</span>
                      <p>
                        Worked with SQL Server for application data and
                        reporting.
                      </p>
                    </div>

                    <div>
                      <span>→</span>
                      <p>
                        Implemented authentication, role-based workflows,
                        search and pagination.
                      </p>
                    </div>

                    <div>
                      <span>→</span>
                      <p>
                        Worked on the Employee Meeting Attendance System and
                        recruitment application development.
                      </p>
                    </div>
                  </div>

                  <div className="project-tech">
                    <span>React.js</span>
                    <span>ASP.NET Core</span>
                    <span>C#</span>
                    <span>SQL Server</span>
                    <span>JWT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            EDUCATION
        ========================================= */}
        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">EDUCATION</p>
              <h2>
                Academic <span>background.</span>
              </h2>
            </div>

            <div className="education-grid">
              <div className="education-card">
                <span className="education-year">2024 – 2026</span>

                <h3>Master of Computer Applications</h3>

                <p className="education-institute">
                  Jyoti Nivas College (Autonomous)
                </p>

                <p className="education-location">Bengaluru, Karnataka</p>

                <div className="education-status">
                  Expected completion: October 2026
                </div>
              </div>

              <div className="education-card">
                <span className="education-year">2021 – 2024</span>

                <h3>Bachelor of Computer Applications</h3>

                <p className="education-institute">
                  Krupanidhi Degree College
                </p>

                <p className="education-location">Bengaluru, Karnataka</p>

                <div className="education-status">Percentage: 89%</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CERTIFICATIONS
        ========================================= */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="section-label">CERTIFICATIONS</p>
              <h2>
                Continuous <span>learning.</span>
              </h2>
            </div>

            <div className="certification-grid">
              <div className="certification-card">
                <span>01</span>
                <h3>Data Science</h3>
                <p>Imarticus Learning</p>
              </div>

              <div className="certification-card">
                <span>02</span>
                <h3>Full Stack Development</h3>
                <p>Udemy</p>
              </div>

              <div className="certification-card">
                <span>03</span>
                <h3>Python Programming</h3>
                <p>Udemy</p>
              </div>

              <div className="certification-card">
                <span>04</span>
                <h3>Cloud Computing</h3>
                <p>NPTEL</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            OPEN TO OPPORTUNITIES
        ========================================= */}
        <section className="opportunity-section">
          <div className="container">
            <div className="opportunity-card">
              <div>
                <p className="section-label">OPEN TO OPPORTUNITIES</p>

                <h2>
                  Ready to build something
                  <span> meaningful.</span>
                </h2>

                <p>
                  I am currently looking for full-time opportunities as a Full
                  Stack Developer, React Developer or Software Engineer.
                </p>
              </div>

              <div className="opportunity-actions">
                <a href="#contact" className="btn btn-primary">
                  Let's Connect →
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            CONTACT
        ========================================= */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-intro">
                <p className="section-label">GET IN TOUCH</p>

                <h2>
                  Let's work
                  <span> together.</span>
                </h2>

                <p>
                  Whether you have an opportunity, project idea or simply want
                  to connect, feel free to reach out.
                </p>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary contact-resume"
                >
                  View My Resume ↗
                </a>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:teenag015@gmail.com"
                  className="contact-card"
                >
                  <div className="contact-card-icon">@</div>

                  <div>
                    <span>Email</span>
                    <strong>teenag015@gmail.com</strong>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/teena-g-1a3a723b0"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card-icon">in</div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>View Profile</strong>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  href="https://github.com/teenag015-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card-icon">&lt;/&gt;</div>

                  <div>
                    <span>GitHub</span>
                    <strong>View Projects</strong>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a href="#home" className="logo">
              Teena<span>.</span>
            </a>

            <p>Full Stack Developer · Bengaluru, India</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Teena G. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;