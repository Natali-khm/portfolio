import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const finalStyles = ({isActive}) =>  isActive ? (styles.activeLink + ' ' + styles.link) : styles.link


  return (
    <div className={styles.nav}>
      <NavLink to={"/"}         className={finalStyles}>Home</NavLink>
      <NavLink to={"/about"}    className={finalStyles}>About</NavLink>
      <NavLink to={"/projects"} className={finalStyles}>Projects</NavLink>
      <NavLink to={"/contact"}  className={finalStyles}>Contact</NavLink>
    </div>
  );
};

export default Nav;
