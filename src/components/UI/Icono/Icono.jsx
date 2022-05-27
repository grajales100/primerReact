import React from 'react';


export const Icono = ({logo,style,id="img"}) => {
  return (
    <img id={id} className={style} src={logo} alt="icono"/>
  )
}
