import React from 'react';
import "../../css/dark.css"
import "../../css/light.css"
import { useTranslation } from "react-i18next"
// import gif from "/gif-for-presentation-64.gif"
import imagePerfil from "/FotoPerfil.jpg"



const Inicio = () => {
    const { t , i18n } = useTranslation("global")
    
    
    return (
        <>
        <div className="d-flex justify-content-between height fondo ancho heroResponsive">
            <div id="inicio" className='d-flex flex-column justify-content-center text-center'>
                <h1 className="titleBrown pb-2">Nicolás López</h1>
                <p className='gris  strong '>{t("inicio.title")}</p>
                <div className='d-flex justify-content-center'>
                    <a href="https://github.com/NicoLopezBjj" target='_blank' className='iconoHover'>
                        <i className="bi bi-github black mx-3 me-lg-4  newIcon"></i>    
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-lopez-648a11279/" className='iconoHover' target='_blank'>
                         <i className="bi bi-linkedin black me-lg-4 me-3 newIcon "></i>
                    </a>  
                    <a href="https://wa.me/5491140865132" target="_blank" className='iconoHover'>
                        <i className=" bi bi-whatsapp black me-lg-4 me-3 newIcon"></i>
                    </a> 
                </div>
            </div>
            <div className='d-flex justify-content-center text-center align-items-center perfilResponsive'>
                <img className="imagePerfil " src={imagePerfil} alt="" />
            </div>
        </div>
        </>

        
    )
}

export { Inicio }

