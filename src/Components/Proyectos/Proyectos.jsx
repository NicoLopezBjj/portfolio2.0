import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Proyectos.css"
import { useTranslation } from "react-i18next"



const Proyectos = () => {
    const { t , i18n } = useTranslation("global")
    
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
    descriptionKey: "projects.0.description",
    link:"https://shopcart-hmte.onrender.com/" 
},
{
    image:"./Pelis-Mern.png",
    descriptionKey: "projects.1.description",
    link: "https://github.com/NicoLopezBjj/pelis-mern/tree/pull-naiki"
},
{
    image:"./Blog-Mern.png",
    descriptionKey:"projects.2.description",
    link:"https://github.com/NicoLopezBjj/blog-mern/tree/prbis"
},
{
    image:"./tpfinal3.png",
    descriptionKey:"projects.3.description",
    link:""
},
{
    image:"",
    descriptionKey:"projects.4.description",
    link:"prueba-react-six.vercel.app"
},
{
    image:"./Card-Bootstrap.png",
    descriptionKey: "projects.5.description",
    link:"https://nicolopezbjj.github.io/bootstrapCard/"
}]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


   
    return(
        <div id="lastJob" className='mt-5 mb-5 justify-content-center ancho'>
        <div className='text-center '>
            <h2 className='titleBrown mt-1'>{t("project.title")}</h2>
            <hr />
            <p className='gris mt-3'>{t("project.text")}</p>
        </div>
        <Slider {...settings} className='row mt-5 d-flex flex-column w-60 p-3'>
            {proyectos.map((proyecto, index) => (
                <div key={index} className='col-12 proyecto m-2'>
                    <div className='d-flex align-items-center imgHover'>
                        <a href={proyecto.link} target="_blank"><img className='img-fluid' src={proyecto.image} alt="" /></a>
                        <p className='colorGris ps-4 text-center d-flex align-items-center'>
                            {t(proyecto.descriptionKey)}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    )
}

export { Proyectos }

