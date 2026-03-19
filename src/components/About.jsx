import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a detail-oriented administrative and operations professional transitioning into 
              software development with 6+ years of experience in customer service and data management. 
              Currently completing my Advanced Diploma in Computer Programming & Analysis at George Brown College.
            </p>
            
            <div className="experience-section">
              <h3>Professional Experience</h3>
              <div className="job">
                <div className="job-header">
                  <h4>Sales & Customer Support Representative</h4>
                  <span className="job-period">July 2019 – Present</span>
                </div>
                <p className="company">Access Abilities - Etobicoke, ON</p>
                <ul className="job-responsibilities">
                  <li>Coordinate customer requests and service orders while maintaining detailed documentation within CRM and accounting systems</li>
                  <li>Track requests from intake through resolution ensuring accuracy, compliance, and proper record management</li>
                  <li>Maintain accurate customer records and operational data to support reporting and administrative workflows</li>
                  <li>Train new staff on CRM systems, documentation procedures, and administrative processes</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h4>Administrative Intern</h4>
                  <span className="job-period">Jan 2020 – June 2020</span>
                </div>
                <p className="company">Liberty Employment Inc / Magna Security - Mississauga, ON</p>
                <ul className="job-responsibilities">
                  <li>Collected, recorded, and updated client information within security databases ensuring accuracy and confidentiality</li>
                  <li>Supported reporting procedures and administrative audits for management review</li>
                </ul>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Advanced Diploma in Computer Programming & Analysis</h4>
                <p className="school">George Brown College, Toronto, ON</p>
                <p className="period">Sept 2023 – April 2026 (Expected)</p>
              </div>
              <div className="education-item">
                <h4>Diploma in Justice Studies & Criminal Analysis</h4>
                <p className="school">Seneca College, King, ON</p>
                <p className="period">Sept 2020 – Dec 2022</p>
              </div>
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="skills-card">
              <h3>Core Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">Kotlin</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Professional Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">CRM Systems</span>
                <span className="skill-tag">Data Management</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Team Collaboration</span>
                <span className="skill-tag">Documentation</span>
                <span className="skill-tag">Customer Service</span>
              </div>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Location:</strong> Mississauga, ON</p>
              <p><strong>Phone:</strong> (437) 219-1461</p>
              <p><strong>Email:</strong> zakim1321@gmail.com</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/zzaki13" target="_blank" rel="noopener noreferrer">github.com/zzaki13</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
