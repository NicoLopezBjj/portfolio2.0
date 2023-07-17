import React, { useState,useRef } from  'react';
import "./SectionSiete.css"
import emailjs from '@emailjs/browser';

const SectionSiete = () => {

    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [asunto,setAsunto] = useState("")
    const [mensaje,setMensaje] = useState("")

function actualizaNombre(e){
    setNombre(e.target.value)
}

function actualizaEmail(e){
    setEmail(e.target.value)
}


function actualizaAsunto(e){
    setAsunto(e.target.value)
}


function actualizaMensaje(e){
    setMensaje(e.target.value)
}

function enviarDatos(event){
event.preventDefault()
}

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8wvtw7k', 'template_a2p58cl', form.current, 'wYeIAi51ik6tEcJ2p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <section className='fondoMarron mt-5'>
            <div>
                <div className=''>
                    <h1 className='tituloEscribi'>Escribi tu mensaje</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className="center">
                    <div className="mt-1 d-flex justify-content-center w-100">
                        <input className="me-1 none ps-2" type="text" value={nombre} onChange={actualizaNombre} name="user_name" placeholder="Tu nombre"/>
                        <input className='none ps-2' type="email" value={email} onChange={actualizaEmail} name="user_email" placeholder="Tu email"/>
                    </div>
                    <div>
                        <input className="mt-1 none ps-2"  type="text" value={asunto} onChange={actualizaAsunto}  placeholder="Asunto"/>
                    </div>
                    <div>
                        <textarea className="mt-1 none ps-2 tercerInput" placeholder="Mensaje" name="message" value={mensaje} onChange={actualizaMensaje} ></textarea>
                    </div>
                </form>
            <div className='center'>
                <button className="otherBrown p-1 mt-2" onClick={sendEmail}>Enviar mensaje</button>
            </div>
        </div>
        </section>
    )  
}

export { SectionSiete }