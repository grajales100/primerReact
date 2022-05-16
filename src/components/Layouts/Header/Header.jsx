import React from 'react'
import { Icono } from '../../UI/Icono/Icono'
import { Title } from '../../UI/Title/Title'
import { Nav } from '../Nav/Nav'

export const Header = () => {
  return (
    <header>
        <Icono></Icono>
        <Title text='Primera Pagina'></Title>
        <Nav></Nav>
    </header>
  )
}
