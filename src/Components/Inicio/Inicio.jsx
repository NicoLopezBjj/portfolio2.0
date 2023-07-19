import React from 'react';
import "./Inicio.css"
import imageSrc from "/mifotosinfondo.png"

const Inicio = () => {
    
    return (
        <>
        <div className="d-flex justify-content-between height fondo ps-lg-5">
            <div id="inicio" className='ms-5 d-flex flex-column justify-content-center'>
                <h1 className="empujar titleBrown fontSize mx-4 pb-2">Hola<br/> mi nombre<br/> es Nico Lopez</h1>
                <p className='gris mx-4 fontSizeB pb-2'>Estudiante de Desarrolo Web Front End <br/> en la Universidad Tecnologica Nacional</p>
                <a href="#resumen"><button className="btn btn-primary color ms-4 border-0" href="#resumen">Sobre Mi</button></a> 
            </div>
            <div>
                <img className="h-100 d-none d-lg-block" src={imageSrc} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

