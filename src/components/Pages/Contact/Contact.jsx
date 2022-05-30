import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const sendEmail=(event)=>{

    event.preventDefault();

    emailjs.sendForm('service_z8t442f','template_y651ugh',event.target,'WaN1WUEZKzqPq5FmN')
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

  }

  return (
    <div className='container'>
        <Header></Header>
        <div className='container1'>
          <h2>Contact</h2>
          <form className='formulario' onSubmit={sendEmail}>
            <label>Name</label>
            <input className='input' type="text" name='user_name'/>
            <hr className='tamano'/>
            <label>Email</label>
            <input className='input' type="correo" name='user_email'/>
            <hr className='tamano'/>
            <label>Message</label>
            <textarea className='inputarea' name='user_message' />
            <hr className='tamano'/>
            <button className="boton">Send</button>
          </form>
        </div>
    </div>
  )
}
