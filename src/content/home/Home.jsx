import React from 'react'
import style from './Home.module.scss'
import { NavLink } from 'react-router-dom'

 export const Home = () => {

  return (
      <div className={style.homeOuterContainer}>
            <div className={style.homeInnerContainer}>
                <h1   className={style.name}>Nataliya Khamitsevich</h1>
                <span className={style.line}></span>
                <div  className={style.job}>
                  <span>Frontend <b>Developer</b></span>
                </div>
                <div className={style.linkButton}>
                  <NavLink to="/about">Learn More</NavLink>
                </div>
            </div>
      </div>
  )
}

