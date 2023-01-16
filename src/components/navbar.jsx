import "../styles/navbar.css"

export default function Navbar() {
    return (
        <div className="nav">
            <div className="name">
                <div className="pop-in-animation">Emiliano Caballero</div>
            </div>
            <div className="links">
                <div className="pop-in-animation">
                    <a href="#home-section">Home</a>
                </div>
                <div className="pop-in-animation">
                    <a href="#about-me-section">About</a>
                </div>
                    <div className="pop-in-animation">
                <a href="#projects-section">Projects</a>
                    </div>
                <div className="pop-in-animation">
                    <a href="#contact-section">Contact</a>
                </div>
            </div>
        </div>
    )
}