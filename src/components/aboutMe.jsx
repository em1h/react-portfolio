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
  "Redux",
  "Storybook",
  "Jest",
  "CSS",
  "styled-components",
  "Material UI",
  "Sass",
  "Express.js",
  "Sequelize",
  "Algorithms",
  "Data Structures",
]
var softSkills = [
  "Fast Learner",
  "Problem Solving",
  "Adaptability",
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
              +2.5 years experience <strong>Front-end Developer</strong> and advanced student of <strong>Computer Engineering</strong>.
              I've participated in different industry contexts such as e-commerce products, milk production industry, video streaming, and drones; forming part of small and large teams ranging from 3 to 30 members.
            </div>
            <div>
              Passionate about 🙌 <strong>React</strong> and <strong>CSS</strong> 🙌, with a focus on pixel perfection, responsiveness, and UX.
              I love working on projects that involve modern technologies and I enjoy staying up-to-date with the latest features released and best practices in front-end development.
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
              description="Front-end development for an international software factory called Codigo del Sur in which we provide digital solutions for customers mainly from the US, but consumed all over the world."
            />
            <WorkCard
              duration="Sep 2020 - Dec 2021"
              title="Full Stack Developer at Niveltic"
              description="eCommerce for a recognized market based in Argentina called La Anonima (laanonima.com.ar/), and other smaller sites."
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
