import React from 'react';
import "./Inicio.css"



const Inicio = () => {

    const imagePerfil = ".././FotoPerfil.jpg"
    
    return (
        <>
        <div className="d-flex  height fondo  ancho">
            <div id="inicio" className=' d-flex flex-column justify-content-center'>
                <h1 className="empujar titleBrown  pb-2">Nicolas Lopez</h1>
                <p className='gris mx-4 strong pb-2'>Desarrollador Full Stack</p>
                <div className='d-flex justify-content-between align-items-center ms-lg-4'>
                    <a href="#resumen"><button className="btn btn-primary color  border-0 px-3 py-2  x-large" href="#cv">Ver CV</button></a> 
                    <a href="https://github.com/NicoLopezBjj" target='_blank' className='iconoHover'>
                        <i className="bi bi-github black  ms-3 me-lg-4 mx-2 newIcon"></i>    
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-lopez-648a11279/" className='iconoHover' target='_blank'>
                         <i className="bi bi-linkedin black me-lg-4 me-2 newIcon "></i>
                    </a>  
                    <a href="https://wa.me/5491140865132" target="_blank" className='iconoHover'>
                        <i className=" bi bi-whatsapp black me-lg-4 me-2 newIcon"></i>
                    </a> 
                </div>
            </div>
            <div className='d-flex justify-content-center text-center align-items-center'>
                <img className="imagePerfil " src={imagePerfil} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

