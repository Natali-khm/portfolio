import React from "react";
import styles from "./Project.module.css";

const Project = ({ title, href, src, style }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer} style={style}>
        <a href={href} className={styles.more}></a>
        <div className={styles.details}>
          <h3>{title}</h3>
          <span>{src}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
