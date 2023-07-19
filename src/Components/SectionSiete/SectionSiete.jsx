import React, { useState,useRef } from  'react';
import "./SectionSiete.css"
import emailjs from '@emailjs/browser';

const SectionSiete = () => {

    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [asunto,setAsunto] = useState("")
    const [mensaje,setMensaje] = useState("")
    const [enviado, setEnviado] = useState(false)

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

const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

     if (!email.includes("@")) {
        alert("Por favor ingresa un email válido con el símbolo @.");
        return;
    }

    if (nombre && email && asunto && mensaje) {
        emailjs.sendForm('service_8wvtw7k', 'template_a2p58cl', form.current, 'wYeIAi51ik6tEcJ2p')
            .then((result) => {
                console.log(result.text)
                setEnviado(true)
                setNombre("")
                setEmail("")
                setAsunto("")
                setMensaje("")
                setTimeout(() => {
                    setEnviado(false)
                }, 5000);
            })
            .catch((error) => {
                console.log(error.text)
            })
    } else {
        alert("Por favor completa todos los campos antes de enviar el formulario.")
    }
}

    return(
        <section className='fondoMarron pb-4'>
            <div>
                <div className='p-4'>
                    <h1 className='tituloEscribi'>Escribi tu mensaje</h1>
                </div>
                {enviado && <div className='alert alert-info mt-3 d-flex justify-content-center' style={{ textAlign: "center" }} role="alert">
                            Mensaje enviado correctamente.
                        </div>}
            <div className='formulario mx-auto'>
                <form ref={form} onSubmit={sendEmail} className="center">
                    <div className="mt-1 d-flex justify-content-center w-100">
                        <input className="me-1 none ps-2 w-100" type="text" value={nombre} onChange={actualizaNombre} name="user_name" placeholder="Tu nombre"/>
                        <input className='none ps-2 w-100' type="email" value={email} onChange={actualizaEmail} name="user_email" placeholder="Tu email"/>
                    </div>
                    <div className='w-100'>
                        <input className="mt-1 none ps-2 w-100"  type="text" value={asunto} onChange={actualizaAsunto}  placeholder="Asunto"/>
                    </div>
                    <div>
                        <textarea className="mt-1 none ps-2 tercerInput w-100" placeholder="Mensaje" name="message" value={mensaje} onChange={actualizaMensaje} ></textarea>
                    </div>
                </form>
            </div>            
                
            <div className='center'>
                <button className="otherBrown p-1 mt-2 border-0" onClick={sendEmail}>Enviar mensaje</button>
            </div>
            
        </div>
        </section>
    )  
}

export { SectionSiete }