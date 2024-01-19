import React, {useState} from 'react';
import { Iconos } from '../Iconos/Iconos';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
      const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top marron ">
        <div className="container-fluid justify-content-evenly ">
            <a className="navbar-brand mx-md-5 me-1">NLDev</a>
            <button className="navbar-toggler" type="button"  onClick={toggleMenu}
                    aria-expanded={isMenuOpen} aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                <div className="navbar-nav margin px-1">
                    <a className="nav-link active " aria-current="page" href="#inicio" onClick={handleLinkClick} >Inicio</a>
                    <a className="nav-link " href="#resumen" onClick={handleLinkClick}>Resumen sobre mi</a>
                    <a className="nav-link " href="#lastJob" onClick={handleLinkClick}>Ultimo trabajo</a>
                    <a className="nav-link " href="#contactame" onClick={handleLinkClick}>Contactame</a>
                </div>
            </div>
                <div className={`justify-content-end ${isMenuOpen ? "d-none" : "d-flex"}`}>
                    <Iconos/>
                </div>
        </div>
    </nav>
        
    )
}

export { Header }