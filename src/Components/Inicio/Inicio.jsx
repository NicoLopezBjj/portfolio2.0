import React from 'react';
import "./Inicio.css"
import { Iconos } from '../Iconos/Iconos';


const Inicio = () => {

    const imagePerfil = "/FotoPerfil.jpg"
    
    return (
        <>
        <div className="d-flex justify-content-between height fondo ps-lg-5">
            <div id="inicio" className='ms-5 d-flex flex-column justify-content-center'>
                <h1 className="empujar titleBrown fontSize mx-4 pb-2">Nicolas Lopez</h1>
                <p className='gris mx-4 fontSizeB pb-2'>Desarrollador Full Stack <br/> de la Universidad Tecnologica Nacional</p>
                <div className='d-flex justify-content-between ms-lg-4'>
                    <a href="#resumen"><button className="btn btn-primary color  border-0 px-4 py-2  x-large" href="#cv">Ver CV</button></a> 
                    <a href="https://github.com/NicoLopezBjj" target='_blank' className='iconoHover'>
                        <i className="bi bi-github black  me-lg-4 mx-2 newIcon"></i>    
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-lopez-648a11279/" className='iconoHover' target='_blank'>
                         <i className="bi bi-linkedin black me-lg-4 me-2 newIcon "></i>
                    </a>  
                    <a href="https://wa.me/5491140865132" target="_blank" className='iconoHover'>
                        <i className=" bi bi-whatsapp black me-lg-4 me-2 newIcon"></i>
                    </a> 
                </div>
            </div>
            <div>
                <img className="imagePerfil d-none d-lg-block" src={imagePerfil} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

