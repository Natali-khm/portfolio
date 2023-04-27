import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./about/About";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";
import styles from './Content.module.scss'
import Contact from "./about/contact/Contact";
import { Navigate } from "react-router-dom";


const Content = () => {
  return (
    <div className={styles.contentBlock}>
      <Routes>
        <Route path="/home"     element={<Home />}></Route>
        <Route path="/about"    element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact"  element={<Contact />}></Route>
        <Route path="*"         element={<Navigate to={'/home'} />}></Route>
      </Routes>
    </div>
  )
}

export default Content;
