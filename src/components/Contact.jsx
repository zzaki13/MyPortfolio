import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently looking for new opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:zakim1321@gmail.com">zakim1321@gmail.com</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+14372191461">(437) 219-1461</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Mississauga, ON</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>GitHub</h3>
              <a href="https://github.com/zzaki13" target="_blank" rel="noopener noreferrer">
                github.com/zzaki13
              </a>
            </div>
          </div>

          <div className="cta-section">
            <h3>Let's Work Together</h3>
            <p>
              I'm passionate about creating innovative software solutions and always eager to learn new technologies. 
              If you're looking for a dedicated developer with a strong foundation in full-stack development, 
              mobile applications, and modern software engineering practices, let's connect!
            </p>
            <div className="cta-buttons">
              <a href="mailto:zakim1321@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="https://github.com/zzaki13" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Zaki Mohammed. All rights reserved.</p>
            <p className="footer-tagline">Built with React & JavaScript | Hosted on Vercel</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
