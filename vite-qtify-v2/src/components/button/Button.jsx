import React from "react";
import Btn from "@mui/material/Button";
import Styles from "../button/Button.module.css";

const Button = (props) => {
  return (
    <Btn variant="contained" className={Styles[`${props.comp}`]}>
      {props.children}
    </Btn>
  );
};
export default Button;
