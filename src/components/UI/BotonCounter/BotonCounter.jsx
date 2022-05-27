import React from 'react'

export const BotonCounter = ({style, event, textButton="Sumar"}) => {
  return (
    <button className={style} onClick={event}>{textButton}</button>
  )
}
