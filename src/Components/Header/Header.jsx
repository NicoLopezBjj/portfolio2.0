import React from 'react';
import { Iconos } from '../Iconos/Iconos';


const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top marron ">
        <div className="container-fluid justify-content-evenly">
            <a className="navbar-brand mx-5">NLDev</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-      target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav margin">
                    <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                    <a className="nav-link" href="#resumen">Resumen sobre mi</a>
                    <a className="nav-link" href="#logros">Logros</a>
                    <a className="nav-link" href="#lastJob">Ultimo trabajo</a>
                    <a className="nav-link" href="#habilidades">Habilidades</a>
                    <a className="nav-link" href="#contactame">Contactame</a>
                </div>
            </div>
                <div className='d-flex justify-content-end'>
                    <Iconos />
                </div>
        </div>
    </nav>
        
    )
}

export { Header }