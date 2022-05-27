import React from 'react'
import { Icono } from '../../UI/Icono/Icono'
import { Title } from '../../UI/Title/Title'
import { Nav } from '../Nav/Nav'
import logo from '../../../images/logo192.png'

export const Header = () => {
  return (
    <header>
        <Icono logo={logo} style="imagenIcono"></Icono>
        <Title text='Primera Pagina'></Title>
        <Nav></Nav>
    </header>
  )
}
