import React from "react";
import styles from "./English.module.scss";

export const English = () => {
  return (
    <div className={styles.engWrapper}>
      <div className={styles.box}>
        <div className={styles.boxInner}>
          <span>B1</span>
        </div>
      </div>
      <div className={styles.langTitle}>English</div>
    </div>
  );
};
