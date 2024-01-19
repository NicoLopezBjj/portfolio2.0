import React from 'react';
import "./Iconos.css"

const Iconos = () => {
    return(
        <div className='ms-lg-4'>
            <a href="https://github.com/NicoLopezBjj" target='_blank' className='iconoHover'>
              <i className="bi bi-github black  me-lg-4 me-2 newIcon"></i>    
            </a>
            <a href="https://www.linkedin.com/in/nicolas-lopez-648a11279/" className='iconoHover' target='_blank'>
              <i className="bi bi-linkedin black me-lg-4 me-2 newIcon "></i>
            </a>  
            <a href="https://wa.me/5491140865132" target="_blank" className='iconoHover'>
              <i className=" bi bi-whatsapp black me-lg-4 me-2 newIcon"></i>
            </a> 
        </div>
    )
}

export { Iconos }