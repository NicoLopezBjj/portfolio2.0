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
 
const proyectos = [{
    image: "./ShopCart.png",
    description: "Ecommerce realizado en equipo. Utilizamos Node para el back y ejs como motor de plantilla. Creamos la base de datos desde 0 con MongoDB y Mongoose. El crud de usuarios lo hicimos con passport y passport-local. Control de versiones con Git y GitHub.",
    link:"https://shopcart-hmte.onrender.com/" 
},
{
    image:"./Pelis-Mern.png",
    description: "Aplicacion de peliculas desarrollada con el paquete MERN y en equipo. Utilizamos una API para consumir los datos de las peliculas y MongoDB para manejar los usuarios y perfiles que pueden crear cada usuario dentro de la aplicacion. Realizamos la aplicacion en equipo y manejando las versiones con GitHub, creando pull requests y corrigiendo codigos entre los participantes del trabajo.",
    link: "https://github.com/NicoLopezBjj/pelis-mern/tree/pull-naiki"
},
{
    image:"./Blog-Mern.png",
    description:"Blog desarrollado con MERN. Los usuarios pueden crear perfiles y seguir a otros usuarios, likear posts y comentarios. Trabajo en equipo, junto a un compañero. Manejo de versiones con GitHub y pull request.",
    link:"https://github.com/NicoLopezBjj/blog-mern/tree/prbis"
},
{
    image:"./tpfinal3.png",
    description:"Proyecto personal para creacion de usuarios a traves de diferentes estrategias de passport. Los usuarios pueden iniciar sesion a traves de Google, Twitter y GitHub.",
    link:""
},
{
    image:"",
    description:"Aplicacion con React. Proyecto personal en donde realizo manejo de API. Primero busco la imagen del gato en la primer API, y renderizo la imagen junto a las primeras 3 palabras de la descripcion de la segunda API. ",
    link:"prueba-react-six.vercel.app"
},
{
    image:"./Card-Bootstrap.png",
    description: "Trabajo de una card responsive clasica hecha con HTML, CSS y Bootstrap.",
    link:"https://nicolopezbjj.github.io/bootstrapCard/"
}]

   
    return(
        <div id="lastJob" className='mt-5 mb-5 justify-content-center ancho'>
        <div className='text-center '>
            <h2 className='titleBrown mt-1'>Proyectos</h2>
            <hr />
            <p className='gris mt-3'>Trabajos realizados individualmente y en equipo</p>
        </div>
        <div className='row mt-5 d-flex flex-column w-60 '>
            {proyectos.map((proyecto, index) => (
                <div key={index} className='col-12 proyecto m-2'>
                    <div className='d-flex align-items-center imgHover'>
                        <a href={proyecto.link} target="_blank"><img className='img-fluid' src={proyecto.image} alt="" /></a>
                        <p className='colorGris ps-4 text-center d-flex align-items-center'>{proyecto.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export { Proyectos }

