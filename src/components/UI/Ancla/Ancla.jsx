import React from 'react'
import { Link } from 'react-router-dom'

export const Ancla = ({Style,url,texto}) => {
  return (
    <Link className={Style} to={url}>{texto}</Link>
    //<a className={Style} href={url}>{texto}</a>
  )
}
