import React from 'react';
import "./SectionDos.css"
const SectionDos = () => {
    return(
        <div id="resumen" className="px-5 pt-4 mt-md-5">
            <h2 className='titleBrown'>Resumen sobre mi</h2>
            <hr />
            <div className="d-flex flex-md-row flex-column text-justify  ">
                <div>
                    <p className='colorGris'><span className='cuadrado'>S</span>oy profesor de Brazilian Jiu Jitsu y facilitador de Acroyoga, formado en la escuela FLAY(Formacion Latinoamericana de Acroyoga). Coordino, junto a un grupo de amigas, un espacio autogestivo cultural,de acrobacias y movimiento corporal en la ciudad de Quilmes Oeste, Buenos Aires. Mi pasion por las artes marciales y el movimiento me impulsaron y motivaron a seguir estudiando y sumando herramientas en mi vida. Y acompañar a otros/as a descubrirlas.</p>
                    <h2 className='titleBlack'>Mi educacion</h2>
                    <p className='colorGris'><span className='marronLetra bold pad'>En estos momentos</span> me encuentro cursando y estudiando en la Universidad Nacional Tecnologica (UTN) la diplomatura en Programacion Web Full Stack.</p>
                </div>
                <div className='ps-md-4'>
                    <h2 className='titleBlack'>Mi carrera</h2>
                <p className='colorGris'> Hace 8 años practico Jiu Jitsu, soy cinturon Marron, profesor, competidor activo y arbitro profesional. Tambien participe y participo en multiples eventos nacionales de acroyoga. Mi objetivo para este año es terminar el curso en la UTN. Perfeccionarme y prepararme para en el 2024 trabajar como programador, para ganar experencia y seguir creciendo en el ambito laboral y profesional.</p>
                </div>
            </div>
        </div>
    )
}

export { SectionDos }


