import React from 'react'

export const Title = ({Style,text='hola mundo'}) => {
  return (
    <h1 className={Style}>{text}</h1>
  )
}
