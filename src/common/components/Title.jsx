import React from "react";
import styles from './Title.module.css'



export const Title = ({title}) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}> {title}</h2>
    </div>
  );
};
