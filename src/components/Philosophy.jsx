import './Philosophy.css'

function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="container">
        <h2 className="section-title">Philosophy & Career Vision</h2>
        <div className="philosophy-content">
          <div className="quote-section">
            <blockquote className="main-quote">
              "We are the facilitators of our own creative evolution"
              <cite>— Bill Hicks</cite>
            </blockquote>
          </div>

          <div className="philosophy-text">
            <h3>My Approach to Software Development</h3>
            <p>
              I believe that as developers, we are not just writing code—we are facilitating innovation 
              and creating solutions that evolve with the needs of users and society. Every line of code 
              is an opportunity to solve real problems, improve lives, and push the boundaries of what's possible.
            </p>

            <div className="belief-cards">
              <div className="belief-card">
                <h4>💡 Motivation</h4>
                <p>
                  My journey into software development stems from a desire to create meaningful impact. 
                  Whether it's building a gamified fitness app to combat sedentary lifestyles or developing 
                  microservices that streamline business operations, I'm driven by the potential to make a 
                  difference through technology.
                </p>
              </div>

              <div className="belief-card">
                <h4>🎯 Belief in Self</h4>
                <p>
                  I've learned that growth comes from embracing challenges and continuously evolving my skills. 
                  Transitioning from administrative work to software development wasn't easy, but it reinforced 
                  my belief that with dedication and the right mindset, we can master any domain. I approach 
                  every project as an opportunity to learn, improve, and prove that persistence pays off.
                </p>
              </div>

              <div className="belief-card">
                <h4>🌟 Belief in My Role</h4>
                <p>
                  As a developer, I see myself as a problem-solver and a bridge between ideas and implementation. 
                  My role is to understand user needs deeply, translate them into elegant solutions, and deliver 
                  software that not only works but delights. I believe in writing clean, maintainable code that 
                  future developers (including myself) will appreciate.
                </p>
              </div>
            </div>

            <div className="journey-section">
              <h3>My Journey & Future Ambitions</h3>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker past"></div>
                  <div className="timeline-content">
                    <h4>Past Experience</h4>
                    <p>
                      My 6+ years in customer service and CRM systems taught me the importance of user experience, 
                      attention to detail, and clear communication. Managing customer data and coordinating complex 
                      workflows gave me a strong foundation in understanding how systems should work from the user's 
                      perspective—a skill that directly translates to building intuitive software.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker present"></div>
                  <div className="timeline-content">
                    <h4>Current State</h4>
                    <p>
                      Today, I'm completing my Advanced Diploma in Computer Programming & Analysis at George Brown College, 
                      where I've developed expertise in full-stack development, mobile applications, and microservices 
                      architecture. I've built projects ranging from GraphQL APIs to iOS apps, each one expanding my 
                      technical capabilities and reinforcing my passion for creating innovative solutions.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker future"></div>
                  <div className="timeline-content">
                    <h4>Future Ambitions</h4>
                    <p>
                      My goal is to join a forward-thinking team where I can contribute to projects that make a real 
                      impact. I'm particularly interested in roles that combine technical challenges with user-centered 
                      design—whether that's building scalable backend systems, crafting engaging mobile experiences, or 
                      developing innovative web applications. I want to continue learning cutting-edge technologies while 
                      mentoring others and contributing to open-source communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="closing-statement">
              <p>
                Ultimately, I believe that the best software comes from developers who care deeply about their craft, 
                understand their users, and never stop learning. I'm committed to being that kind of developer—one who 
                facilitates creative evolution through thoughtful, well-crafted code that solves real problems and 
                creates lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
