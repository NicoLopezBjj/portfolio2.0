import React, {useState} from 'react';



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
      const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid ">
            <a className="navbar-brand mx-md-5 me-1">NLDev</a>
            <button className="navbar-toggler" type="button"  onClick={toggleMenu}
                    aria-expanded={isMenuOpen} aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                <div className="navbar-nav margin px-1 overFlow w-100">
                    <a className="nav-link " aria-current="page" href="#inicio" onClick={handleLinkClick} >Inicio</a>
                    <a className="nav-link " href="#resumen" onClick={handleLinkClick}>Sobre mi</a>
                    <a className="nav-link " href="#lastJob" onClick={handleLinkClick}>Proyectos</a>
                    <a className="nav-link " href="#contactame" onClick={handleLinkClick}>Contacto</a>
                </div>
            </div>
                <div className={`justify-content-end ${isMenuOpen ? "d-none" : "d-flex"}`}>
                </div>
        </div>
    </nav>
        
    )
}

export { Header }