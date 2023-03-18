import React from 'react'
import style from './Project.module.css'

const Project = ({title, text}) => {
  return (
    <div className={style.project}>
        <div className={style.imgContainer}>
            <a href='' className={style.more}>See more</a>
        </div>
        <div>
            <h4 className={style.title}>{title}</h4>
            <span className={style.text}>{text}</span>
        </div>
        </div>
  )
}

export default Project