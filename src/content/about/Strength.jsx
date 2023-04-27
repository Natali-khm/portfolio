import React from "react";
import { Title } from "../../common/components/Title";
import styles from "./Strength.module.scss";
import puzzleIcon from "../../assets/images/skills/puzzle.png";
import teamIcon from "../../assets/images/skills/team.svg";
import codeIcon from "../../assets/images/skills/code.svg";
import birdIcon from "../../assets/images/skills/bird.svg";
import bookIcon from "../../assets/images/skills/book.png";
import commonStyles from "../../common/styles/Container.module.css";

export const Strength = () => {
  return (
    <div className={commonStyles.leftContainer}>
      <Title title={"Strength"} />
      <ul className={styles.valueList}>
        <li>
          <span className={styles.first}><img src={puzzleIcon}/></span>
          <span className={styles.second}>Logical thinking</span>
        </li>
        <li>
          <span className={styles.first}><img src={teamIcon}/></span>
          <span className={styles.second}>Teamwork</span>
        </li>
        <li>
          <span className={styles.first}><img src={codeIcon}/></span>
          <span className={styles.second}>Clean code</span>
        </li>
        <li>
          <span className={styles.first}><img src={birdIcon}/></span>
          <span className={styles.second}>Independence</span>
        </li>
        <li>
          <span className={styles.first}><img src={bookIcon}/></span>
          <span className={styles.second}>Like to explore new things, develop, get new knowledge</span>
        </li>
      </ul>
    </div>
  );
};
