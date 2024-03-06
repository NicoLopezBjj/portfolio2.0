import React from 'react';
import "./SobreMi.css"
const SobreMi = () => {
    const imageCertificado = "./certificado.jpg"

    return(
        <div id="resumen" className="px-5 pt-4 mt-md-5 text-center ancho">
            <h2 className='titleBrown'>Resumen sobre mi</h2>
            <hr />
            <div className=" flex-md-row text-center text-justify align-items-center centrado ">
                <div>
                    <p className='textoGris'>Hola soy Nicolas Lopez, de la ciudad de Quilmes, provincia de Buenos Aires, Argentina. Soy Desarrollador Full Stack, comprometido a ofrecer soluciones de alta calidad en el ambito del desarrollo de software.<br/> 
                    Programo en Javascript, utilizando React y Node como framework, junto a MongoDB como base de datos. Estoy en continuo aprendizaje y crecimiento como desarrollador y emocionado por participar y contribuir a proyectos innovadores y equipos de trabajo.</p>
                </div>
                <div className='ps-md-4 d-flex flex-column justify-content-center text-center'>
                    <p className='textoGris'><span className='marronLetra bold pad'>Termine la Diplomatura en Programacion Web Full Stack</span> en la Universidad Tecnologica Nacional.</p>
                    <div className='d-flex'>
                    <a href=""><button className="me-3 btn btn-primary color border-0 px-4 py-2 mb-2 x-large" href="#cv">Ver Certificado</button></a> 
                    <a href="#resumen"><button className="btn btn-primary color px-3 py-2  border-0 x-large" href="#cv">Ver CV</button></a> 
                    </div>
                </div>
            </div>
                    {/* <img className='imgCertificado' src={imageCertificado} alt="" /> */}
                    
        </div>
    )
}

export { SobreMi }


