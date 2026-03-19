import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-image-container">
            <img 
              src="/profile.jpg" 
              alt="Zaki Mohammed" 
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Zaki Mohammed</span>
            </h1>
            <h2 className="hero-subtitle">
              Computer Programming & Analysis Student
            </h2>
            <p className="hero-description">
              Passionate about building innovative software solutions with expertise in 
              full-stack development, microservices architecture, and mobile applications. 
              Currently completing my Advanced Diploma at George Brown College.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Academic Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
