import React from 'react'
import { Ancla } from '../../UI/Ancla/Ancla'


export const Nav = () => {
  return (
    <nav className='navBar'>
        <Ancla Style='ancla' url="/" texto="Home"></Ancla>
        <Ancla Style='ancla' url="/about" texto="abaut"></Ancla>
        <Ancla Style='ancla' url="/contact" texto="Contact"></Ancla>
        <Ancla Style='ancla' url="/contador" texto="Contador"></Ancla>
        <Ancla Style='ancla' url="/cambiarFondo" texto="CambioFondo"></Ancla>
        <Ancla Style='ancla' url="/apiRick" texto="apiRick"></Ancla>
        <Ancla Style='ancla' url="/apiTenor" texto="apiTenor"></Ancla>
    </nav>
  )
}
