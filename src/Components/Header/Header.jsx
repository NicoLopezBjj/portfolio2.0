import React, {useState} from 'react';
import { Iconos } from '../Iconos/Iconos';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
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
                <div className="navbar-nav margin">
                    <a className="nav-link active mx-2 maxAncho" aria-current="page" href="#inicio">Inicio</a>
                    <a className="nav-link mx-2 maxAncho" href="#resumen">Resumen sobre mi</a>
                    <a className="nav-link mx-2 maxAncho" href="#logros">Logros</a>
                    <a className="nav-link mx-2 maxAncho" href="#lastJob">Ultimo trabajo</a>
                    <a className="nav-link mx-2 maxAncho" href="#habilidades">Habilidades</a>
                    <a className="nav-link mx-2 maxAncho" href="#contactame">Contactame</a>
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