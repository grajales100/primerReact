import React from 'react'
import { useState, useEffect } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { BotonCounter } from '../../UI/BotonCounter/BotonCounter'
import { Icono } from '../../UI/Icono/Icono'
import logo from '../../../images/voley.jpg';


export const CambiarFondo = () => {

    const [modeDark, setModeDark] = useState(false);
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('Dark Mode');

    const handleOn = () => {
        setModeDark(!modeDark);
    }

    const handleAdd = () => {
        setCounter(counter + 10)
    }
    const handleSubstract = () => {
        setCounter(counter - 10)
    }
    const handleReset = () => {
        setCounter(0)
    }

    useEffect(()=>{
        if(counter >=100){
            document.querySelector('#voley').classList.remove('opaca');
            document.querySelector('#voley').classList.add('Noopaca');
        }else{
            document.querySelector('#voley').classList.remove('Noopaca');
            document.querySelector('#voley').classList.add('opaca');
        }
    },[counter])

    useEffect(()=>{
        if(modeDark) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            setTitle('Light Mode');
        }else{
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            setTitle('dark-mode');
        }
    },[modeDark])

  return (
    <div className='container'>
        <Header></Header>
        <div className="container">
            <hr  className='tamano'/>
            <div className='espacio'>
                <BotonCounter style="btn" event={handleOn} textButton={title}></BotonCounter>
            </div>
            <hr  className='tamano'/>
            <h2 id='numero'>{counter}</h2>
            <Icono logo={logo} style="opaca" id="voley"></Icono>
            <div className='espacio'>
                <BotonCounter style="btn" event={handleAdd} textButton="Plus"></BotonCounter>
                <BotonCounter style="btn" event={handleReset} textButton="Reset"></BotonCounter>
                <BotonCounter style="btn" event={handleSubstract} textButton="Resta"></BotonCounter>
            </div>
        </div>
    </div>
  )
}
