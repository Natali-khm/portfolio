import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project'

const text='Brief Description'
const projects = ['Todo-List', 'Social-Network', 'Portfolio', 'Counter']

const Projects = () => {
    const projectsForRender = projects.map((p, i) => <Project key={i} title={p} text={text}/>)
  return (
    <div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <h2 className = {style.title}>My Projects</h2>
            <div className={style.projects}>
               {projectsForRender}
            </div>
        </div>
    </div>
  )
}

export default Projects