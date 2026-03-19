import { useState } from 'react'
import './AcademicProjects.css'

function AcademicProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Faster Than Light - Multiplayer Game",
      course: "Personal Project",
      tech: ["Python", "JavaScript", "WebSocket", "Docker", "Cloudflare Tunnel"],
      description: "Real-time multiplayer space game with lobby system, WebSocket communication, and cloud deployment via Cloudflare Tunnel.",
      highlights: [
        "Developed real-time multiplayer game engine",
        "Implemented WebSocket for live player synchronization",
        "Built lobby system supporting up to 6 players",
        "Containerized with Docker for easy deployment",
        "Integrated Cloudflare Tunnel for secure internet access",
        "Created game tick system with idle state management"
      ],
      features: [
        "Host and join multiplayer lobbies",
        "Real-time player position synchronization",
        "Connection status HUD with online player count",
        "Idle game lifecycle with automatic pause/resume",
        "No port forwarding required via Cloudflare",
        "Frontend built with Vite and modern JavaScript"
      ],
      github: "https://ftl.muhahomelab.com/"
    },
    {
      id: 2,
      title: "Wellness Microservices Platform",
      course: "COMP3095 - Web Application Development",
      tech: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Microservices", "REST API"],
      description: "Enterprise-level wellness platform built with microservices architecture featuring event management, goal tracking, and resource services.",
      highlights: [
        "Implemented 4 microservices with API Gateway pattern",
        "Containerized all services using Docker Compose",
        "Built event registration system with capacity management",
        "Integrated inter-service communication for resource linking",
        "Implemented TestContainers for integration testing",
        "Deployed using Docker with PostgreSQL database"
      ],
      features: [
        "Event Service: CRUD operations with date/location filtering",
        "Student Registration: Capacity-enforced enrollment system",
        "Resource Service: Wellness resource management",
        "Goal Tracking: User fitness goal monitoring",
        "API Gateway: Centralized routing and load balancing"
      ],
      github: "https://gitlab.com/zzaki13/comp3095-assignment2-complete"
    },
    {
      id: 3,
      title: "Restaurant Guide Android App",
      course: "COMP3074 - Mobile Development II",
      tech: ["Kotlin", "Android Studio", "Material Design", "SQLite"],
      description: "Android mobile application for discovering and managing restaurant information with modern Material Design UI.",
      highlights: [
        "Developed native Android app using Kotlin",
        "Implemented Material Design components",
        "Created local database with SQLite",
        "Built responsive UI for various screen sizes",
        "Integrated Android lifecycle management",
        "Followed MVVM architecture pattern"
      ],
      features: [
        "User-friendly restaurant browsing interface",
        "Local data persistence with SQLite",
        "Material Design UI components",
        "Responsive layouts for tablets and phones",
        "Navigation component integration",
        "Modern Android development practices"
      ],
      github: "https://github.com/zzaki13/GroupAssignment3074"
    },
    {
      id: 4,
      title: "Expense Tracker iOS App",
      course: "COMP3097 - Mobile Application Development",
      tech: ["Swift", "SwiftUI", "Core Data", "iOS"],
      description: "Comprehensive iOS expense tracking application with interactive analytics, category management, and data persistence. (Ongoing Project)",
      highlights: [
        "Built native iOS app using SwiftUI framework",
        "Implemented Core Data for local persistence",
        "Created interactive pie charts with tap interactions",
        "Developed comprehensive data validation system",
        "Designed 5 main screens with seamless navigation",
        "Implemented swipe-to-delete and search functionality",
        "Project currently in active development"
      ],
      features: [
        "Dashboard with total spending and recent activity",
        "Interactive analytics with category breakdown",
        "Custom category management with icons and colors",
        "Expense list with search and filtering",
        "Add/Edit expenses with validation",
        "Data seeding with default categories"
      ],
      github: "https://github.com/uzmashxxxikh/Expense_Tracking"
    },
    {
      id: 5,
      title: "Employee Management System",
      course: "COMP3133 - Full Stack Development",
      tech: ["Node.js", "Express", "GraphQL", "MongoDB", "Apollo Server"],
      description: "Full-stack employee management system with GraphQL API for user authentication and comprehensive CRUD operations.",
      highlights: [
        "Built GraphQL API with Apollo Server",
        "Implemented user authentication with JWT",
        "Created MongoDB schemas with Mongoose",
        "Developed queries and mutations for employee management",
        "Integrated search functionality by designation and department",
        "Deployed on MongoDB Atlas cloud database"
      ],
      features: [
        "User signup and login with secure authentication",
        "Add, view, update, and delete employees",
        "Search employees by ID, designation, or department",
        "GraphQL schema with type definitions and resolvers",
        "RESTful API integration with GraphQL"
      ],
      github: "https://github.com/zzaki13/COMP3133_101507934_Assignment1"
    }
  ]

  return (
    <section id="projects" className="academic-projects">
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <p className="section-subtitle">
          A showcase of academic projects demonstrating full-stack development, 
          mobile applications, microservices architecture, and modern software engineering practices.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className="course-badge">{project.course}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tech-badge">+{project.tech.length - 4} more</span>
                )}
              </div>
              <button className="view-details-btn">View Details →</button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              
              <h2>{selectedProject.title}</h2>
              <span className="course-badge large">{selectedProject.course}</span>
              
              <div className="modal-section">
                <h4>Description</h4>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4>Technology Stack</h4>
                <div className="tech-list">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Key Highlights</h4>
                <ul className="highlights">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Features</h4>
                <ul className="features">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {selectedProject.github && (
                <div className="modal-section">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    {selectedProject.github.includes('gitlab') 
                      ? 'View on GitLab →' 
                      : selectedProject.github.includes('muhahomelab') 
                      ? 'Play Game →' 
                      : 'View on GitHub →'}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AcademicProjects
