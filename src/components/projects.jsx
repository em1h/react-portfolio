import "../styles/App.css"
import "../styles/projects.css"
import ytChallenge from "../assets/youtube-player-challenge.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Projects() {
  return (
    <>
      <div className="projects-wrapper">
        <h2>Projects</h2>
        <div className="card">
          <div className="img-card">
            <img src={ytChallenge} />
          </div>
          <div className="info-card">
            <h1>CodigoDelSur YouTube Challenge</h1>
            <p>Youtube video player using Youtube API.</p>
            <a
              className="gitBtn-wrapper"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="github-button"
                aria-hidden="true"
                icon={faGithub}
              />
              <p>Repository</p>
            </a>
          </div>
        </div>
        <div className="card-empty">
          <div className="img-card-empty">
          </div>
          <div className="empty-info-card">
            <h1>Coming Soon...</h1>
          </div>
        </div>
        <div className="card-empty">
          <div className="img-card-empty">
          </div>
          <div className="empty-info-card">
            <h1>Coming Soon...</h1>
          </div>
        </div>
      </div>
    </>
  )
}
