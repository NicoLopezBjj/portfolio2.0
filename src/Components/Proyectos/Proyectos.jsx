import React, { useState } from 'react';
import "./Proyectos.css"


const Proyectos = () => {
    
    const [contador,setContador]= useState([400])
    const [contador1,setContador1]= useState([317])
    const [contador2,setContador2]= useState([279])

const incrementarContador = (index) => {
  const newContador = [...contador]
  newContador[index] = newContador[index] + 1;
  setContador(newContador);
}

const incrementarContador1 = (index) => {
  const newContador = [...contador1]
  newContador[index] = newContador[index] + 1;
  setContador1(newContador);
}

const incrementarContador2 = (index) => {
  const newContador = [...contador2]
  newContador[index] = newContador[index] + 1;
  setContador2(newContador)
}
 
    const image1 = "./ShopCart.png"
    const image2 = "./Pelis-Mern.png"
    const image3 = "./tpfinal3.png"
   
    return(
        
        <div id="lastJob" className='px-5 mt-5 mb-5  justify-content-center ancho'>
            <div className='text-center '>
                <h2 className='titleBrown mt-1 '>Proyectos</h2>
                <hr />
                <p className='gris mt-3'>Trabajos realizados individualmente y en equipo</p>
            </div>
            <div className='row mt-5 d-flex flex-column w-60'>
                <div className='col-12'>
                    <div className='d-flex align-items-center proyecto'>
                    <a href="https://nicolopezbjj.github.io/TercerTP/" target="_blank"><img className='img-fluid imgHover' src={image1} alt="" /></a>
                    <p className='colorGris ps-4 text-center d-flex align-items-center'>Ecommerce realizado en equipo. Utilizamos Node para el back y ejs como motor de plantilla. Creamos la base de datos desde 0 con MongoDB y Mongoose. El crud de usuarios lo hicimos con passport y passport-local. Control de versiones con Git y GitHub.</p>
                    </div>
                    {/* <div className='d-flex mt-3'>
                        <p className='bold'>Ecommerce Shopcart</p>
                            <div className='d-flex me-lg-4'>
                                <button onClick={()=> incrementarContador(0)} className='botonCorazon'><svg className='marronLetra tamaño mb-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                            viewBox="0 0 16 16">
                                <path
                                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                </svg></button>
                            <p className=' bold'>{contador[0]}</p>
                        </div>
                    </div> */}
                </div>
                <div className='col-12 pt-5'>
                    <div className='d-flex align-items-center proyecto'>
                    <a href="https://nicolopezbjj.github.io/TercerTP/" target="_blank" ><img className='img-fluid imgHover' src={image2} alt="" /></a>
                    <p className='colorGris ps-4 text-center d-flex align-items-center'>Aplicacion de peliculas desarrollada con el paquete MERN y en equipo. Utilizamos una API para consumir los datos de las peliculas y MongoDB para manejar los usuarios y perfiles que pueden crear cada usuario dentro de la aplicacion. Realizamos la aplicacion en equipo y manejando las versiones con GitHub, creando pull requests y corrigiendo codigos entre los participantes del trabajo.</p>
                    </div>
                    {/* <div className='d-flex justify-content-between mt-3'>
                        <p className='bold'>Movies Hub</p>
                            <div className="d-flex">
                                <button onClick={()=> incrementarContador1(0)} className='botonCorazon'><svg className='marronLetra tamaño mb-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                            viewBox="0 0 16 16">
                                <path
                                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                </svg></button>
                                <p className='bold'>{contador1[0]}</p>
                            </div>
                    </div> */}
                </div>
                <div className='col-12 pt-5'>
                    <div className='d-flex align-items-center proyecto'>
                        <a href="https://nicolopezbjj.github.io/TercerTP/" target="_blank"><img className='img-fluid imgHover'  src={image3} alt="" /></a>
                        <p className='colorGris ps-4 text-center d-flex align-items-center'>Proyecto personal para creacion de usuarios a traves de diferentes estrategias de passport. Los usuarios pueden iniciar sesion a traves de Google, Twitter y GitHub.</p>
                    </div>
                    {/* <div className='d-flex justify-content-between mt-3'>
                        <p className='bold'>Estrategias Passport</p>
                        <div className="d-flex">
                            <button onClick={()=> incrementarContador2(0)} className='botonCorazon'><svg className='marronLetra tamaño mb-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                            viewBox="0 0 16 16">
                            <path
                                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg></button>
                            <p className='bold'>{contador2[0]}</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>    
    )
}

export { Proyectos }

