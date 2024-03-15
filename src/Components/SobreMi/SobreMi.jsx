import React from 'react';
import "../../css/dark.css"
import "../../css/light.css"
import { useTranslation } from "react-i18next"
import imagePerfil from "/FotoPerfil.jpg"


const SobreMi = () => {
    const { t , i18n } = useTranslation("global")

    const imageCertificado = "./certificado.jpg"

    return(
        <div id="resumen" className=" py-5 mt-md-5 text-center ancho ">
            <h2 className='titleBrown'>{t("aboutMe.title")}</h2>
            <hr />
            <div className=" flex-md-row text-center text-justify align-items-center centrado p-4">
                <div>
                    <p className='textoGris pt-2'>{t("aboutMe.text1")}</p>
                </div>
                <div className='ps-md-4 d-flex flex-column justify-content-center text-center'>
                    <p className='textoGris'><span className='marronLetra bold pad'>{t("aboutMe.text2")}</span> {t("aboutMe.text3")}</p>
                    <div className='d-flex'>
                    <a href="https://drive.google.com/file/d/17Te_6K4G1O00FRxH8zJcQTWRa_Z3qgf0/view?usp=sharing" target='_blank'><button className="me-3 btn btn-primary color btnCv border-0 px-4 py-2 mb-2 x-large" href="#cv">{t("aboutMe.button1")}</button></a> 
                    <a href="https://drive.google.com/file/d/1nXK_GQs4O4KTGVIX5lMJ73ex6Wq1TfGS/view?usp=sharing" target='_blank'><button className="btn btn-primary color btnCv px-3 py-2  border-0 x-large" href="#cv">{t("aboutMe.button2")}</button></a> 
                    </div>
                </div>
            </div>  
        </div>
    )
}

export { SobreMi }


