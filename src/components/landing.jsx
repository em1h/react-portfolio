import { useCallback } from "react";
import "../styles/App.css"
import arrowDown from "../assets/arrowDown.png" //TODO: use other icon??
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Landing() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <div className="landing-wrapper">
        <div className="landing-left landing-left-slide-animation">
          <div className="landing-left-content">Hi! My name is <strong>Emiliano Caballero</strong> and I am a <b>FrontEnd Developer</b>.</div>
        </div>
        <div className="landing-right">
          <div className="landing-photo"></div>
        </div>
        <div className="landing-down-arrow">
          <a href="#about-me-section"> 
            <img src={arrowDown} width="50" />
          </a>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // fpsLimit: 120,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "repulse", 
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                grab: {
                  distance: 300,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#111111",
              },
              links: {
                color: "#555555",
                distance: 170,
                enable: true,
                opacity: 0.45,
                width: 2.2,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 0,
                },
                value: 49,
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 4,
                },
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
                anim: {
                  enable: true,
                  speed: 20,
                  size_min: 0.1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  )
}
