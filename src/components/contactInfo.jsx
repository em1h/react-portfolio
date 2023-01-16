import React from "react"
import "../styles/App.css"
import "../styles/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Snackbar from "@material-ui/core/Snackbar"
import Slide from '@material-ui/core/Slide';
import MuiAlert from "@material-ui/lab/Alert"

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function ContactInfo() {
  const [open, setOpen] = React.useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText("emiliano.caballero.beisso@gmail.com")
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <h1 className="contact-title">It doesn't have to end here, let's connect!</h1>
      <ul>
        <li className="git-li">
          <a
            href="https://github.com/em1h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons git"
              icon={faGithub}
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="mail-li">
          <a
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons mail"
              icon={faEnvelope}
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="ln-li">
          <a
            href="https://www.linkedin.com/in/emiliano-caballero-beisso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icons ln"
              icon={faLinkedin}
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
      <h1 className="contact-title text">I will be back to you as soon as I can :)</h1>
      <Snackbar open={open} TransitionComponent={SlideTransition} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          My email has been copied to your clipboard!
        </MuiAlert>
      </Snackbar>
    </>
  )
}
