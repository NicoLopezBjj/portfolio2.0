import React from 'react';
import "./Inicio.css"
const Inicio = () => {
    const imageSrc="src/assets/mifotosinfondo.png"
    return (
        <>
        <div className="d-flex justify-content-between height fondo">
            <div id="inicio" className='ms-4 d-flex flex-column justify-content-center'>
                <h1 className="empujar titleBrown fontSize mx-4 fs ">Hola mi nombre<br/> es Nico Lopez</h1>
                <p className='gris mx-4 fontSizeB'>Estudiante de Desarrolo Web Front End <br/> en la Universidad Tecnologica Nacional</p>
                <a href="#resumen"><button className="btn btn-primary color ms-4" href="#resumen">Sobre Mi</button></a> 
            </div>
            <div>
                <img className="h-100 d-none d-lg-block" src={imageSrc} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

// redireccionar el boton