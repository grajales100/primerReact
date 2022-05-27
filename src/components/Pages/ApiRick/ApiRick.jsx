import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { useState, useEffect } from 'react'

export const ApiRick = () => {
    
    const URL="https://rickandmortyapi.com/api/character";
    //window.addEventListener('load',getCharacters);
    const [escritura, setTitle] = useState('')
    const cards = document.querySelector('.cards');

    const ingresarLetras=(event) => {
        if(event.key ==='Enter'){ 
            setTitle(document.getElementById('search').value)
            if(document.getElementById('search').value === ''){
                while (cards.firstChild) {
                    cards.removeChild(cards.firstChild);
                }
            }
        }
        
    }

    /* function getCharacters(){
        if(escritura.length!=''){
            fetch(URL)
            .then(res=>res.json())
            .then(data=>{
                data.results.forEach(element => {
                    crearCard(element.name, element.image);
                });
            });
        } 
    } */

    useEffect(()=>{
        console.log(escritura)
        listener()
    },[escritura])

    
    
    function crearCard(name, image){
        
        const card = document.createElement('div');
        const title = document.createElement('h3');
        title.textContent = name;
        const imagecard = document.createElement('img');
        imagecard.setAttribute('src',image);
        imagecard.setAttribute('alt',name);
        card.appendChild(imagecard);
        card.appendChild(title);
        card.classList.add('cardBack');
        cards.appendChild(card);
    }

    function listener(){
        if(escritura.length!=''){
            while (cards.firstChild) {
                cards.removeChild(cards.firstChild);
            }
            fetch(`${URL}/?name=${escritura}`)
            .then(res=>res.json())
            .then(data=>{
                data.results.forEach(element => crearCard(element.name, element.image)
                );
            });
        }
    }

  return (
    <div className='container'>
        <Header></Header>
        <div className='container'>
            <h2>apiRick</h2>
            <hr className='tamano'/>
            <label for="search">Buscar</label>
            <input id="search" type="text" onKeyUp={ingresarLetras}/>
            <div className='cards'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
