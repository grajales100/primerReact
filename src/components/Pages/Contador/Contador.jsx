import React from 'react'
import { useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { BotonCounter } from '../../UI/BotonCounter/BotonCounter';




export const Contador = () => { 

    const [counter,setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubstract = () => {
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }
    

    let numero = 0;

   function aumentar(){
       document.getElementById('numero').textContent = numero = numero+1;
   }
   function disminuir(){
    document.getElementById('numero').textContent = numero = numero-1;
   }
   function reiniciar(){
    document.getElementById('numero').textContent = numero = 0;
   }

  return (
    <div className='container'>
        <Header></Header>
        <div className="container">
            <h2 id='numero'>{counter}</h2>
            <hr  className='tamano'/>
            <div className='espacio'>
                {/* <button className='btn' onClick={aumentar}>(+)</button>
                <button className='btn' onClick={reiniciar}>(Reset)</button>
                <button className='btn' onClick={disminuir}>(-)</button> */}
                <BotonCounter style="btn" event={handleAdd} textButton="Plus"></BotonCounter>
                <BotonCounter style="btn" event={handleReset} textButton="Reset"></BotonCounter>
                <BotonCounter style="btn" event={handleSubstract} textButton="Resta"></BotonCounter>
            </div>
        </div>
    </div>
  )
}
