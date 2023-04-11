import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

export default function Nav(props) {
  return (
    <div className={style.nav}>
        <Link to='/about'>about</Link>
        <Link to='/home'>home</Link>
        <Link to='/favs'>favs</Link>
        <SearchBar onSearch={props.onSearch}/></div>
  )
}
