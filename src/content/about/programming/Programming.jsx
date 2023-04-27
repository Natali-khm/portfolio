import React from "react";
import styles from "./Programming.module.scss";
import Skill from "./skill/Skill";
import { Title } from "../../../common/components/Title";
import reactIcon from "../../../assets/images/skills/react.png";
import reduxIcon from "../../../assets/images/skills/redux.png";
import typeScriptIcon from "../../../assets/images/skills/typescript.png";
import storybookIcon from "../../../assets/images/skills/storybook.png";
import sassIcon from "../../../assets/images/skills/sass.png";
import restAPIIcon from "../../../assets/images/skills/restAPI.png";
import htmlIcon from "../../../assets/images/skills/html.png";
import cssIcon from "../../../assets/images/skills/css.png";
import gitIcon from "../../../assets/images/skills/git.png";
import formikIcon from "../../../assets/images/skills/formik.png";
import unitTestsIcon from "../../../assets/images/skills/unit_tests.png";
import muiIcon from "../../../assets/images/skills/mui.png";
import jsIcon from "../../../assets/images/skills/js.png";
import axiosIcon from "../../../assets/images/skills/axios.png";
import commonStyles from '../../../common/styles/Container.module.css'


// const description = "Lorem ipsum dolor sit amet";

const skills = [
  { title: "React", src: reactIcon },
  { title: "Redux", src: reduxIcon },
  { title: "TypeScript", src: typeScriptIcon },
  { title: "Storybook", src: storybookIcon },
  { title: "SASS", src: sassIcon },
  { title: "REST API", src: restAPIIcon },
  { title: "HTML", src: htmlIcon },
  { title: "CSS", src: cssIcon },
  { title: "Git", src: gitIcon },
  { title: "Formik", src: formikIcon },
  { title: "Unit tests", src: unitTestsIcon },
  { title: "MUI", src: muiIcon },
  { title: "JS", src: jsIcon },
  { title: "Axios", src: axiosIcon },
];

export const Programming = () => {
  const skillsForRender = skills.map((s, i) => (
    <Skill key={i} title={s.title} src={s.src} />
  ));

  return (
    <div className={commonStyles.innerContainer}>
      <Title title={"Programming"} />
      <ul className={styles.skills}>
        {skillsForRender}
      </ul>
    </div>
  );
};
