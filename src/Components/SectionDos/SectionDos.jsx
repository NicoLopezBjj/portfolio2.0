import React from 'react';
import "./SectionDos.css"
const SectionDos = () => {
    const imageCertificado = "./certificado.jpg"

    return(
        <div id="resumen" className="px-5 pt-4 mt-md-5">
            <h2 className='titleBrown'>Resumen sobre mi</h2>
            <hr />
            <div className="d-flex flex-md-row flex-column text-justify  ">
                <div>
                    <p className='colorGris'><span className='cuadrado'>S</span>oy Desarrollador Full Stack, me especializo en React y Node. En base de datos prefiero las no relacionales, utilizando MongoDB como principal herramienta, y sin problema de adaptarme a base de datos relacionales como MySQL.<br/> 
                    Tambien soy profesor de Brazilian Jiu Jitsu y de Acroyoga, formado en la escuela FLAY(Formacion Latinoamericana de Acroyoga). Mi pasion por las artes marciales y el movimiento me impulsaron y motivaron a seguir estudiando y sumando herramientas en mi vida. Y acompañar a otros/as a descubrirlas.</p>
                </div>
                <div className='ps-md-4 d-flex flex-column'>
                    <h2 className='titleBlack'>Mi carrera</h2>
                    <p className='colorGris'> Hace 8 años practico Jiu Jitsu, soy cinturon Marron, profesor, competidor activo y arbitro profesional. Tambien participe y participo en multiples eventos nacionales de acroyoga. Mi objetivo para este año 2024 es insertarme en el mundo laboral IT para perfeccionarme como programador, ganar experencia y seguir creciendo como profesional.</p>
                    <h2 className='titleBlack'>Mi educacion</h2>
                    <p className='colorGris'><span className='marronLetra bold pad'>En estos momentos</span> me encuentro cursando y estudiando en la Universidad Nacional Tecnologica (UTN) la diplomatura en Programacion Web Full Stack.</p>
                    <a href=""><button className="btn btn-primary color border-0 px-4 py-2 mb-2 x-large" href="#cv">Ver Certificado</button></a> 

                </div>
            </div>
                    {/* <img className='imgCertificado' src={imageCertificado} alt="" /> */}
                    
        </div>
    )
}

export { SectionDos }


