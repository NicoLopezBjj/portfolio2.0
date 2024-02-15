import React from 'react';
import "./SobreMi.css"
const SobreMi = () => {
    const imageCertificado = "./certificado.jpg"

    return(
        <div id="resumen" className="px-5 pt-4 mt-md-5 text-center">
            <h2 className='titleBrown'>Resumen sobre mi</h2>
            <hr />
            <div className=" flex-md-row text-center text-justify  w-50 align-items-center centrado ">
                <div>
                    <p className='textoGris'><span>S</span>oy Desarrollador Full Stack, me especializo en React y Node. En base de datos prefiero las no relacionales, utilizando MongoDB como principal herramienta.<br/> 
                    Tambien soy profesor de Brazilian Jiu Jitsu y de Acroyoga, formado en la escuela FLAY(Formacion Latinoamericana de Acroyoga). Mi pasion por las artes marciales y el movimiento me impulsaron y motivaron a seguir estudiando y sumando herramientas en mi vida. Y acompañar a otros/as a descubrirlas.</p>
                </div>
                <div className='ps-md-4 d-flex flex-column justify-content-center'>
                    <h2 className='titleBlack'>Mi carrera</h2>
                    <p className='textoGris'> Hace 8 años practico Jiu Jitsu, soy cinturon Marron, profesor, competidor activo y arbitro profesional. Tambien participe y participo en multiples eventos nacionales de acroyoga. Mi objetivo para este año 2024 es insertarme en el mundo laboral IT para perfeccionarme como programador, ganar experencia y seguir creciendo como profesional.</p>
                    <h2 className='titleBlack'>Mi educacion</h2>
                    <p className='textoGris'><span className='marronLetra bold pad'>Termine la Diplomatura en Programacion Web Full Stack</span> en la Universidad Tecnologica Nacional.</p>
                    <a href=""><button className="btn btn-primary color border-0 px-4 py-2 mb-2 x-large" href="#cv">Ver Certificado</button></a> 
                </div>
            </div>
                    {/* <img className='imgCertificado' src={imageCertificado} alt="" /> */}
                    
        </div>
    )
}

export { SobreMi }


