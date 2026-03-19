import './FitQuest.css'

function FitQuest() {
  return (
    <section id="fitquest" className="fitquest">
      <div className="container">
        <h2 className="section-title">FitQuest - Capstone Project</h2>
        
        <div className="fitquest-hero">
          <div className="fitquest-intro">
            <h3>Gamified Health & Fitness Mobile Application</h3>
            <p className="project-tagline">
              Bridging gaming culture with fitness motivation through XP, streaks, ranks, and cosmetic rewards
            </p>
          </div>
        </div>

        <div className="fitquest-content">
          <div className="project-overview">
            <h4>Project Overview</h4>
            <p>
              FitQuest is a mobile-first fitness application designed to motivate gamers and young adults 
              to maintain healthy lifestyles through gamification. The app combines traditional workout and 
              calorie tracking with gaming-inspired rewards like XP points, daily streaks, cosmetic unlocks, 
              and competitive ranks inspired by popular games like Valorant and Overwatch.
            </p>
          </div>

          <div className="project-details-grid">
            <div className="detail-card">
              <h4>🎯 Problem Statement</h4>
              <p>
                Sedentary lifestyles among gamers and young individuals lead to increased health risks. 
                Traditional fitness apps lack the engaging incentives that resonate with gaming culture.
              </p>
            </div>

            <div className="detail-card">
              <h4>💡 Solution</h4>
              <p>
                A gamified fitness platform that integrates workout tracking with progression systems 
                familiar to gamers, making fitness feel like leveling up in a game.
              </p>
            </div>

            <div className="detail-card">
              <h4>👥 Team</h4>
              <p>
                <strong>Team 12:</strong> Zaki Mohammed (Project Manager/UI Designer/Web Developer), 
                Dominic Frydryk (Full Stack Developer)
              </p>
            </div>

            <div className="detail-card">
              <h4>📅 Timeline</h4>
              <p>
                September 2025 - March 2026<br/>
                <strong>Status:</strong> In Development (Sprint 6)
              </p>
            </div>
          </div>

          <div className="features-section">
            <h4>Key Features</h4>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🏋️</div>
                <h5>Workout Library</h5>
                <p>Exercises categorized by muscle groups (legs, arms, chest, back, shoulders)</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🍎</div>
                <h5>Calorie Tracking</h5>
                <p>Easy meal logging with daily calorie targets and progress visualization</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <h5>XP & Streaks</h5>
                <p>Earn experience points and maintain daily streaks for consistent engagement</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎮</div>
                <h5>Game-Themed Rewards</h5>
                <p>Unlock cosmetics and ranks inspired by favorite games</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h5>Clan System</h5>
                <p>Join squads for group challenges, shared XP, and social motivation</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h5>Progress Analytics</h5>
                <p>Track fitness journey with detailed dashboards and metrics</p>
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h4>Technology Stack</h4>
            <div className="tech-tags">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Android Studio</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">Git</span>
            </div>
          </div>

          <div className="project-highlights">
            <h4>Project Highlights</h4>
            <ul className="highlights-list">
              <li>Designed comprehensive UI/UX mockups with 15+ screens</li>
              <li>Implemented gamification engine with XP calculation and streak tracking</li>
              <li>Developed user profile management with customizable avatars</li>
              <li>Created workout library with 50+ exercises across multiple muscle groups</li>
              <li>Built clan/squad feature for social engagement and group challenges</li>
              <li>Integrated persistent local storage for offline functionality (soon to be scaled onto a real database)</li>
              <li>Conducted user testing and iterative improvements based on feedback</li>
            </ul>
          </div>

          <div className="project-documents">
            <h4>Project Documentation</h4>
            <div className="documents-grid">
              <div className="doc-card">
                <h5>📋 Project Vision</h5>
                <p>Comprehensive vision document outlining goals, stakeholders, and SWOT analysis</p>
              </div>
              <div className="doc-card">
                <h5>📐 Requirements Analysis</h5>
                <p>Detailed functional and non-functional requirements with use cases and diagrams</p>
              </div>
              <div className="doc-card">
                <h5>🎨 UI/UX Mockups</h5>
                <p>Complete mockup designs for all major screens and user flows</p>
              </div>
              <div className="doc-card">
                <h5>📊 Status Reports</h5>
                <p>Regular progress updates tracking milestones and addressing challenges</p>
              </div>
            </div>
          </div>

          <div className="project-outcomes">
            <h4>Expected Outcomes</h4>
            <p>
              FitQuest aims to provide a unique fitness solution that resonates with gaming culture, 
              encouraging consistent healthy habits through engaging progression systems. The app targets 
              a niche market of gamers seeking fitness motivation, with potential for expansion into 
              broader wellness markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FitQuest
