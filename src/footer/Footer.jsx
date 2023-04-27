import React from 'react'
import styles from './Footer.module.scss'
import tgIcon from './telegram.svg'
import githubIcon from './github.svg'
import liIcon from './linkedin.svg'
import instIcon from './instagram.svg'


const Footer = () => {
  return (
     <div className={styles.footer}>
            <div className={styles.social}>
                <div className={styles.icon}><a href="/"><img src={tgIcon} alt="" /></a></div>
                <div className={styles.icon}><a href="/"><img src={githubIcon} alt="" /></a></div>
                <div className={styles.icon}><a href="/"><img src={liIcon} alt="" /></a></div>
                <div className={styles.icon}><a href="/"><img src={instIcon} alt="" /></a></div>
            </div>
     </div>
  )
}

export default Footer