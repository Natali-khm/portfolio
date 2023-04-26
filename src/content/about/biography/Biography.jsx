import React from "react";
import { Title } from "../../../common/components/Title";
import styles from "./Biography.module.css";
import commonStyles from "../../../common/styles/Container.module.css";

export const Biography = () => {
  return (
    <div className={commonStyles.innerContainer}>
      <Title title={"About me"} />

      <div className={styles.biographyContaier}>
        <div className={commonStyles.leftContainer}>
          <p>
            My name is Nataliya. I'm a Front-end Developer. I have passion for
            web development.
          </p>
          <p>
            <b>Let's build something great together.</b>
          </p>
        </div>

        <div className={commonStyles.rightContainer}>
          <ul>
            <li>
              <span className={styles.first}>Name:</span>
              <span className={styles.second}>Nataliya Khamitsevich</span>
            </li>
            <li>
              <span className={styles.first}>Age:</span>
              <span className={styles.second}>28 Years</span>
            </li>
            <li>
              <span className={styles.first}>Address:</span>
              <span className={styles.second}>Minsk, Belarus</span>
            </li>
            <li>
              <span className={styles.first}>Study:</span>
              <span className={styles.second}>IT-Incubator</span>
            </li>
            <li>
              <span className={styles.first}>Mail:</span>
              <span className={styles.second}>nataliyakham@gmail.com</span>
            </li>
            <li>
              <span className={styles.first}>Phone:</span>
              <span className={styles.second}>+375 (44) 727-51-99</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
