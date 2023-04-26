import React from "react";
import styles from "./Programming.module.css";
import Skill from "./skill/Skill";
import { Title } from "../../../common/components/Title";
import reactIcon from "../../../assets/skills/react.png";
import reduxIcon from "../../../assets/skills/redux.png";
import typeScriptIcon from "../../../assets/skills/typescript.png";
import storybookIcon from "../../../assets/skills/storybook.png";
import sassIcon from "../../../assets/skills/sass.png";
import restAPIIcon from "../../../assets/skills/restAPI.png";
import htmlIcon from "../../../assets/skills/html.png";
import cssIcon from "../../../assets/skills/css.png";
import gitIcon from "../../../assets/skills/git.png";
import formikIcon from "../../../assets/skills/formik.png";
import unitTestsIcon from "../../../assets/skills/unit_tests.png";
import muiIcon from "../../../assets/skills/mui.png";
import jsIcon from "../../../assets/skills/js.png";
import axiosIcon from "../../../assets/skills/axios.png";
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
