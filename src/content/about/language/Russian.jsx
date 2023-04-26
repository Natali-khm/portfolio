import React from "react";
import styles from "./Russian.module.css";

export const Russian = () => {
  return (
    <div className={styles.rusWrapper}>
      <div className={styles.box}>
        <div className={styles.boxInner}>
          <span>C1</span>
        </div>
      </div>
      <div className={styles.langTitle}>Russian</div>
    </div>
  );
};
