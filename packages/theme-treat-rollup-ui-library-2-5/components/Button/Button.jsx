import React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./Button.treat";

const Button= ({ children }) => {
  // debugger;

  let styles;
  // if (useTheme()) {
    styles = useStyles(styleRefs);
  // } else {
    // styles = { button: styleRefs.buttonDefault };
  // }
  return <button className={styles.button}>Im a BUTTON{children}</button>;
};

export default Button;