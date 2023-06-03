import "../styles/App.css"
import "../styles/aboutMe.css"
import cv from "../assets/cv/cv.pdf"
import WorkCard from "./workCard.jsx"
import Button from "@material-ui/core/Button"
import DownloadIcon from "@material-ui/icons/GetApp"
import AddIcon from '@material-ui/icons/Add';

var skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "ES6",
  "Redux-Saga",
  "Jest",
  "React Testing Library",
  "CSS",
  "styled-components",
  "Material UI",
  "Sass",
  "Storybook",
  "Node.js",
  "Express.js",
  "Mocha",
  "Sequelize",
  "PostgreSQL",
  "Algorithms",
  "Data Structures",
]
var softSkills = [
  "Problem Solving",
  "High adaptability",
  "Fast Learner",
]

export default function AboutMe() {
  const renderSkillsList = (skills) => (
    <div className="skill-container">
      {skills.map((e, index) => (
        <Skill key={index} name={e} />
      ))}
    </div>
  )
  return (
    <>
      <div className="about-me-main">
        <div className="title">About Me</div>
        <div className="about-me-main-content">
          <div className="about-me-text">
            <div>
              3 years experience <strong>Front-end Developer</strong>. Experience in several projects across different types of industries such as eCommerces, video streaming, drones, and the dairy industry, with the ability to easily adapt and learn on the go.
            </div>
            <div>
              Passionate about 🙌 <strong>React</strong> and <strong>CSS</strong> 🙌, with a focus on pixel perfection, responsiveness, and UX.
              I like to challenge myself by working with the latest tech trends and stay uo-to-date with them in order to find new and better ways to perform my work.
            </div>
          </div>
        </div>
        <div>
        <Button
            variant="contained"
            color="default"
            startIcon={<DownloadIcon />}
            style={{ backgroundColor: "#ffa26d", width: "20em", alignSelf: "center", paddingBlock: "1.2vw" }}
            href={cv}
            target="_blank"
          >
            DOWNLOAD CV
          </Button>
      </div>
      </div>
      <div className="skills">
        <div className="info-column">
          <h1>Tech Skills</h1>
          {renderSkillsList(skills)}
        </div>
        <div className="info-column">
          <h1>Experience</h1>
          <div className="exp-description">
            <WorkCard
              duration="Dec 2021 - Present"
              title="Front-end Developer at CodigoDelSur"
              description={`International software factory in which we provide digital solutions for customers from the US. Several projects participating in small and large teams ranging from 3 to 30 members. Experience in dynamic enviroments, working in proactive and autonomous teams capable of organizing and coordinating tasks together to meet the goals.`}
            />
            <WorkCard
              duration="Jul 2020 - Dec 2021"
              title="Full Stack Developer at Niveltic"
              description="eCommerce for a recognized market from Argentina called “La Anonima” (laanonima.com.ar/), and other smaller sites. Front-end using React, JavaScript vanilla, jQuery and CSS."
            />
          </div>
        </div>
        <div className="info-column">
          <h1>Soft Skills</h1>
          {renderSkillsList(softSkills)}
        </div>
      </div>
    </>
  )
}

const Skill = props => {
  return (
    <div className="skill-description">
      <AddIcon style={{ color: "#f57c00", fontSize: "1.1rem" }} />
      <p>{props.name}</p>
    </div>
  )
}
