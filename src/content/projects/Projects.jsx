import React from "react";
import style from "./Projects.module.scss";
import Project from "./project/Project";
import commonStyles from "../../common/styles/Container.module.css";
import { Title } from "../../common/components/Title";
import todo_imgUrl from '../../assets/images/todo.png'
import soc_network_imgUrl from '../../assets/images/soc_network.jpg'

const projects = [
  {title: "Todo-List", href: 'https://github.com/Natali-khm/social_network', src: 'Github', style: {backgroundImage: 'url(' + todo_imgUrl + ')'}},
  {title: "Social-Network", href: 'https://github.com/Natali-khm/social_network', src: 'Github', style: {backgroundImage: 'url(' + soc_network_imgUrl + ')'}},
  {title: "Portfolio", href: 'https://github.com/Natali-khm/portfolio', src: 'Github', style: {backgroundImage: 'url(' + soc_network_imgUrl + ')'}},
  {title: "Counter", href: 'https://github.com/Natali-khm/counter', src: 'Github', style: {backgroundImage: 'url(' + soc_network_imgUrl + ')'}},
 ];

export const Projects = () => {
  
  const projectsForRender = projects.map((p, i) => (
    <Project key = {i} 
             title = {p.title} 
             href = {p.href} 
             src = {p.src} 
             style = {p.style}
    />
  ))


  return (
    <div className={commonStyles.outerContainer}>
      <div className={commonStyles.innerContainer}>
        <Title title={"My Projects"} />
        <div className={style.projects}>{projectsForRender}</div>
      </div>
    </div>
  );
};
