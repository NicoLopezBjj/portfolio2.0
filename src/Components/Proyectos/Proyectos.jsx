import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../css/dark.css"
import "../../css/light.css"
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
    title: "ShopCart Ecommerce",
    descriptionKey: "projects.0.description",
    repo:"https://github.com/NicoLopezBjj/shopCart",
    deploy:"https://shopcart-hmte.onrender.com/" 
},
{
    image:"./Pelis-Mern.png",
    title:"Pelis-Mern",
    descriptionKey: "projects.1.description",
    repo: "https://github.com/NicoLopezBjj/pelis-mern/tree/pull-naiki",
    deploy:""
},
{
    image:"./Blog-Mern.png",
    title:"Blog-Mern",
    descriptionKey:"projects.2.description",
    repo:"https://github.com/NicoLopezBjj/blog-mern/tree/prbis",
    deploy:""
},
// {
//     image:"./tpfinal3.png",
//     descriptionKey:"projects.3.description",
//     link:""
// },
{
    image:"./AppGatitos.png",
    title:"App Cats",
    descriptionKey:"projects.4.description",
    repo:"https://github.com/NicoLopezBjj/pruebaReact",
    deploy:"prueba-react-six.vercel.app"
}
// {
//     image:"./Card-Bootstrap.png",
//     descriptionKey: "projects.5.description",
//     link:"https://nicolopezbjj.github.io/bootstrapCard/"
// }
]

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
        {/* <Slider {...settings} */}
         <div className='mt-5 d-flex flex-column w-60 p-3'>
            {proyectos.map((proyecto, index) => (
                    <div key={index} className='d-flex col-12 projectResponsive proyecto imgHover tamaño m-2 w-100'>
                            <img className='img-fluid img p-1' src={proyecto.image} alt="" />
                        <div className='d-flex flex-column align-items-center'>
                            <div className='d-flex justify-content-between p-2 w-100'>
                                    <h3 className='p-2'>{proyecto.title}</h3>
                                <div className='d-flex justify-content-between sizeLink'>
                                    <a href={proyecto.repo}><i class="bi bi-github black p-2 iconoHover newIcon"></i></a>                                    
                                    <a href={proyecto.deploy}><i class="bi bi-box-arrow-up-right black p-2 newIcon iconoHover"></i></a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center text-justify p-2'>
                                <p className='colorGris d-flex align-items-center'>
                                {t(proyecto.descriptionKey)}</p>                        
                            </div>
                        </div>
                    </div>
                           ))}
            </div>
        {/* </Slider> */}
    </div>
    )
}

export { Proyectos }

