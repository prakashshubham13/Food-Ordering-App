import React from 'react'
import Search from '../Search';
import style from './style.module.css';
import logo from '../../images/logo.png';
const Header = ({searchBar=true}) => {
  return (
    <div className={style.header}>
    <div className={style.headercontent}>
    <img src={logo} alt="logo"/>
    <Search show={searchBar}/>
    </div>
    </div>
  )
}

export default Header;
