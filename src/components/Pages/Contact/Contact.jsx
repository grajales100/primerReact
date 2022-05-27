import React from 'react'
import { Header } from '../../Layouts/Header/Header'


export const Contact = () => {
  return (
    <div className='container'>
        <Header></Header>
        <div className='container1'>
          <h2>Contact</h2>
          <div className='formulario'>
            <label>Name</label>
            <input className='input' type="text" />
            <hr className='tamano'/>
            <label>Email</label>
            <input className='input' type="correo" />
            <hr className='tamano'/>
            <label>Message</label>
            <textarea className='inputarea' type="text" />
            <hr className='tamano'/>
            <button className="boton">Send</button>
          </div>
        </div>
    </div>
  )
}
