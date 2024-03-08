import React, {useState} from 'react';
import "./Header.css"
import { useTranslation } from "react-i18next"




const Header = () => {
    const { t , i18n } = useTranslation("global")
    const [ language, setLanguage] = useState("es")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  
    const toggleLanguage = (lang) =>{
      setLanguage(lang)
      i18n.changeLanguage(lang)
    }
  

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
      const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return(
        <nav className='d-flex justify-content-between mt-4 gris'>
            {/* Icono de hamburguesa para pantallas pequeñas */}
            <div className='d-flex d-md-none'>
                <button className='btn btn-menu' onClick={toggleMenu}>
                    <i className={`btn btnChange bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                </button>
            </div>
            <div className={`d-md-flex ${isMenuOpen ? 'flex-column align-items-center' : 'd-none d-md-flex'}`}>
                <a className="nav-link mx-2" aria-current="page" href="#inicio" onClick={handleLinkClick} >{t("header.link1")}</a>
                <a className="nav-link mx-2" href="#resumen" onClick={handleLinkClick}>{t("header.link2")}</a> 
                <a className="nav-link mx-2" href="#lastJob" onClick={handleLinkClick}>{t("header.link3")}</a>
                <a className="nav-link mx-2" href="#contactame" onClick={handleLinkClick}>{t("header.link4")}</a>
            </div> 
            <div className='d-flex'>
                <button className='mx-1 btn btnChange'><i class="bi bi-moon"></i></button>
                
                {language === 'es' && (
                    <button className='mx-1 btn btnChange' onClick={() => toggleLanguage('en')}>EN</button>
                     )}
                {language === 'en' && (
                    <button className='mx-1 btn btnChange' onClick={() => toggleLanguage('es')}>ES</button>
                    )}
            </div>
        </nav>
       
       
       
       
       
       
        // <nav className=' navbar-expand-lg mt-3 '>
        //      <button className="navbar-toggler" type="button"  onClick={toggleMenu}
        //              aria-expanded={isMenuOpen} aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
        //      <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
        //         <div className="d-flex justify-content-center overFlow">
        //             <a className="nav-link mx-2" aria-current="page" href="#inicio" onClick={handleLinkClick} >Inicio</a>
        //              <a className="nav-link mx-2" href="#resumen" onClick={handleLinkClick}>Sobre mi</a>
        //              <a className="nav-link mx-2" href="#lastJob" onClick={handleLinkClick}>Proyectos</a>
        //              <a className="nav-link mx-2" href="#contactame" onClick={handleLinkClick}>Contacto</a>
        //         </div>
        //         <div className='d-flex  '>
        //             <button className='mx-1 btn btnChange'><i class="bi bi-moon"></i></button>
        //             <button className='mx-1 btn btnChange'>EN</button>
        //         </div>
        //         <div className={`justify-content-end ${isMenuOpen ? "d-none" : "d-flex"}`}>
        //         </div>
        //     </div>    
        // </nav>



    // <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top d-flex justify-content-center">
    //     <div className="container-fluid ">
    //         <a className="navbar-brand mx-md-5 me-1">NLDev</a>
    //         <button className="navbar-toggler" type="button"  onClick={toggleMenu}
    //                 aria-expanded={isMenuOpen} aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className={`justify-content-end collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
    //             <div className="d-flex justify-content-end margin mx-5 px-1 overFlow w-100">
    //                 <a className="nav-link mx-2" aria-current="page" href="#inicio" onClick={handleLinkClick} >Inicio</a>
    //                 <a className="nav-link mx-2" href="#resumen" onClick={handleLinkClick}>Sobre mi</a>
    //                 <a className="nav-link mx-2" href="#lastJob" onClick={handleLinkClick}>Proyectos</a>
    //                 <a className="nav-link mx-2" href="#contactame" onClick={handleLinkClick}>Contacto</a>
    //             </div>
    //         </div>
    //             <div className={`justify-content-end ${isMenuOpen ? "d-none" : "d-flex"}`}>
    //             </div>
    //     </div>
    // </nav>
        
    )
}

export { Header }