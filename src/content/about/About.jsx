import React from "react";
import styles from "./About.module.css";
import commonStyles from "../../common/styles/Container.module.css";
import { Biography } from "./biography/Biography";
import { Programming } from "./programming/Programming";
import { Language } from "./language/Language";
import { Strength } from "./Strength";
import { Title } from "../../common/components/Title";

export const About = () => {
  return (
    <div className={commonStyles.outerContainer}>
      <Biography />
      <div className={commonStyles.innerContainer}>
        <div className={styles.wrapper}>
          <Strength />
          <Language />
        </div>
      </div>
      <Programming />
      <Title title={"Certificates"} />
    </div>
  );
};
