
import style from './Skill.module.css'

const Skill = ({title, src}) => {
  return (
    <li className={style.skill}>
        <span>{title}</span>
        <div className={style.icon}>
          <img src={src} alt="" />
        </div>
        {/* <span className={style.description}>{description}</span> */}
    </li>
  )
}

export default Skill