import React from 'react';
import "./SectionTres.css"
const SectionTres = () => {
    return(
        <section id="logros" className='text-center py-2 my-md-5 py-md-5'>
            <div>
                <h2 className='titleBrown otroFondo py-5 mb-0'>Mis logros</h2>
            </div>
            <div className='d-flex justify-content-center fondo py-5 px-3'>
                <div className='py-5 me-5'>
                    <h2 className='titleBlack bold size'>5</h2>
                    <p className='marronDos bold'>proyectos</p>
                    <p className='colorGris'>Diseños que desarrolle en la cursada de la UTN</p>
                </div>
                <div className='py-5 ms-5'>
                    <h2 className='titleBlack bold size'>1</h2>
                    <p className='marronDos bold'>año de experencia</p>
                    <p className='colorGris'>HTML, CSS, JavaScript, ReactJS, Bootstrap y CrakraUI</p>
                </div>
            </div>
        </section>
    )
}

export { SectionTres }
