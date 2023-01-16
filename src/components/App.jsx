import '../styles/App.css'
import Navbar from "./navbar.jsx"
import Landing from "./landing.jsx"
import AboutMe from "./aboutMe.jsx"
import Projects from "./projects.jsx"
import ContactInfo from "./contactInfo.jsx"

function App() {
  return (
    <>
      <div className="welcome-wrapper">
        <div className="welcome-title">
          WELCOME <span>:)</span>
        </div>
      </div>
      <div id="home-section" className="orange-slider"></div>
      <div className="home">
        <Navbar />
        <Landing />
      </div>
      <div className="about-me" id="about-me-section">
        <AboutMe />
      </div>
      <div className="projects" id="projects-section">
        <Projects />
      </div>
      <div className="contact" id="contact-section">
        <ContactInfo />
      </div>
    </>
  )
}

export default App
