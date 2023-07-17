import React from 'react';
import "./SectionSeis.css"
const SectionSeis = () => {
    return(
        <section id="contactame" className='m-5'>
            <div className='d-flex flex-column align-items-center m-5'>
                <h2 className='tituloSeis mt-5'>vamos a conocernos y hablar</h2>
                <h2 className='tituloSeis'>llamame +54 911 40 86 51 32</h2>
                <a href="mailto:lopeznnr@gmail.com"><button className='btn btn-primary color mt-4 mb-5'>Enviame un email</button></a>
            </div>
        </section>
    )
}

export { SectionSeis }