import React from "react";
import { Title } from "../../../common/components/Title";
import styles from "./Contact.module.css";
import commonStyles from "../../../common/styles/Container.module.css";
import mapIcon from "../../../assets/contact/map.png";
import envIcon from "../../../assets/contact/envelope.png";
import phoneIcon from "../../../assets/contact/phone.png";

const Contact = () => {
  return (
    <div className={commonStyles.outerContainer}>
      <div className={commonStyles.innerContainer}>
        <Title title={"Get in touch"} />
        <div className={styles.contactsWrapper}>
          <ul className={styles.left}>
            <li className={styles.item}>
              <div>
                <img src={mapIcon} alt="" />
              </div>
              <a href='https://www.google.by/maps/place/Minsk' target="_blank">Minsk, Belarus</a>
            </li>
            <li className={styles.item}>
              <div>
                <img src={envIcon} alt="" />
              </div>
              <a href='mailto:nataliyakham@gmail.com'>nataliyakham@gmail.com</a>
            </li>
            <li className={styles.item}>
              <div>
                <img src={phoneIcon} alt="" />
              </div>
              <a href='tel:+375447275199'>+375 (44) 727-51-99</a>
            </li>
          </ul>

          <div className={styles.right}>
            <form action="/" className={styles.form}>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email'  />
              <textarea name="" id=""  placeholder='Message' className={styles.textarea}></textarea>
              <button type={"submit"}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
