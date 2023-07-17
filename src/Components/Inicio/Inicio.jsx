import React from 'react';
import "./Inicio.css"
const Inicio = () => {
    const imageSrc="src/assets/mifotosinfondo.png"
    return (
        <>
        <div className="d-flex height fondo">
            <div id="inicio" className='ms-4'>
                <h1 className="empujar titleBrown ms-5">Hola mi nombre es Nico Lopez</h1>
                <p className='gris ms-5'>Estudiante de Desarrolo Web Front End en la Universidad Tecnologica Nacional</p>
                <a href="#resumen"><button className="btn btn-primary color ms-5" href="#resumen">Sobre Mi</button></a> 
            </div>
            <div>
                <img className="h-100" src={imageSrc} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

// redireccionar el boton