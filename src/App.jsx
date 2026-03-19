import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import FitQuest from './components/FitQuest'
import AcademicProjects from './components/AcademicProjects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <FitQuest />
      <AcademicProjects />
      <Contact />
    </div>
  )
}

export default App
