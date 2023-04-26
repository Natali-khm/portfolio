import React from "react";
import { Title } from "../../common/components/Title";
import styles from "./Strength.module.css";
import puzzleIcon from "../../assets/skills/puzzle.png";
import teamIcon from "../../assets/skills/team.svg";
import codeIcon from "../../assets/skills/code.svg";
import birdIcon from "../../assets/skills/bird.svg";
import bookIcon from "../../assets/skills/book.png";
import commonStyles from "../../common/styles/Container.module.css";


export const Strength = () => {
  return (
    <div className={commonStyles.leftContainer}>
      <Title title={"Strength"} />
      <ul>
        <li className={styles.value}>
          <span className={styles.first}>
            <img src={puzzleIcon} alt="" />
          </span>
          <span className={styles.second}>Logical thinking</span>
        </li>
        <li className={styles.value}>
          <span className={styles.first}>
            <img src={teamIcon} alt="" />
          </span>
          <span className={styles.second}>Teamwork</span>
        </li>
        <li className={styles.value}>
          <span className={styles.first}>
            <img src={codeIcon} alt="" />
          </span>
          <span className={styles.second}>Clean code</span>
        </li>
        <li className={styles.value}>
          <span className={styles.first}>
            <img src={birdIcon} alt="" />
          </span>
          <span className={styles.second}>Independence</span>
        </li>
        <li className={styles.value}>
          <span className={styles.first}>
            <img src={bookIcon} alt="" />
          </span>
          <span className={styles.second}>
            Like to explore new things, develop, get new knowledge
          </span>
        </li>
      </ul>
    </div>
  );
};
