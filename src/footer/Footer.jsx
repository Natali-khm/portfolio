import React from 'react'
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className = {style.title}>Khamitsevich Nataliya</h2>
            <div className={style.social}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
            <span>2023 Все права защищены</span>
        </div>
    </div>
  )
}

export default Footer