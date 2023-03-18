import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill'

const  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."
const skills = ['JS', 'CSS', 'React', 'TS', 'Redux']

const Skills = () => {
  const skillsForRender = skills.map((s, i) => <Skill key={i} title={s} description={description}/>)

  return (
    <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>My Skills</h2>
            <div className={style.skills}>
              {skillsForRender}
            </div>
        </div>
    </div>
  )
}

export default Skills


