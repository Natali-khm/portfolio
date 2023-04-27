import React from "react";
import styles from "./Russian.module.scss";

export const Russian = () => {
  return (
    <div className={styles.rusWrapper}>
      <div className={styles.box}>
        <div className={styles.boxInner}>
          <span>Native</span>
        </div>
      </div>
      <div className={styles.langTitle}>Russian</div>
    </div>
  );
};
