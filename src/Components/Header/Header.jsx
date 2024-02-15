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
            <div className={`justify-content-end collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                <div className="d-flex justify-content-end margin mx-5 px-1 overFlow w-100">
                    <a className="nav-link mx-2" aria-current="page" href="#inicio" onClick={handleLinkClick} >Inicio</a>
                    <a className="nav-link mx-2" href="#resumen" onClick={handleLinkClick}>Sobre mi</a>
                    <a className="nav-link mx-2" href="#lastJob" onClick={handleLinkClick}>Proyectos</a>
                    <a className="nav-link mx-2" href="#contactame" onClick={handleLinkClick}>Contacto</a>
                </div>
            </div>
                <div className={`justify-content-end ${isMenuOpen ? "d-none" : "d-flex"}`}>
                </div>
        </div>
    </nav>
        
    )
}

export { Header }