import React from "react";
import { Title } from "../../../common/components/Title";
import { English } from "./English";
import { Russian } from "./Russian";
import styles from './Language.module.css'
import commonStyles from "../../../common/styles/Container.module.css";


export const Language = () => {
  return (
    <div className={commonStyles.rightContainer}>
      <Title title={"Language"} />
      <div className={styles.diagrWrapper}>
        <English />
        <Russian />
      </div>
    </div>
  );
};
