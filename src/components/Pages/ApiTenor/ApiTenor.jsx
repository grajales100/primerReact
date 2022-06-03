import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { useState, useEffect } from 'react'

export const ApiTenor = () => {

    
    
    const Key ="EOVK589Q9NSM";
    const [escritura, setTitle] = useState('');

    const ingresarLetras=(event) => {
        const cards = document.querySelector('.cards')
        setTitle(document.getElementById('search').value)
        
    }

    function crearCard(name, image){
        const cards = document.querySelector('.cards');
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

    function getCharacters(){
        const URL="https://g.tenor.com/v1/trending?";
        fetch(URL+'key='+Key)
        .then(res=>res.json())
        .then(data=>{
            data.results.map(element => {
                //console.log(element.content_description+' '+element.media[0].gif.url);
                crearCard(element.content_description, element.media[0].gif.url);
            });
        });
    }

    function listener(){
        const URL="https://g.tenor.com/v1/search?";
        const cards = document.querySelector('.cards');
        
        if(escritura!=''){
            while (cards.firstChild) {
                cards.removeChild(cards.firstChild);
            }
            fetch(URL+'q='+escritura+'&key='+Key)
            .then(res=>res.json())
            .then(data=>{
                data.results.map(element => {
                    //console.log(element.content_description+' '+element.media[0].gif.url);
                    crearCard(element.content_description, element.media[0].gif.url);
                });
            });
        }
    }

    useEffect(()=>{
        if(escritura===''){
            getCharacters()
        }
        listener()
    },[escritura])

    

  return (
    <div className='container'>
        <Header></Header>
        <div className='container'>
            <h2>apiTenor</h2>
            <hr className='tamano'/>
            <label for="search">Buscar</label>
            <input id="search" type="text" onKeyUp={ingresarLetras}/>
            <div className='cards'>
                
            </div>
        </div>
    </div>
  )
}
