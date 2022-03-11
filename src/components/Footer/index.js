import React from 'react'
import style from './style.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
    <div className={style.outerline}>
      <div className={style.innerline}></div>
      </div>
      <div className={style.menu}>
      <p>01:30/03:30 <span>Max</span></p>
      <p>1.0</p>
    </div>
    </div>
  )
}

export default Footer
