import React from "react";
import classes from "./input1.module.css";
const Input1 = (props) => {
  return (
    <div className={classes.container}>
      <h6>{props.text}</h6>
      <input className={classes.input} placeholder="Enter Here" />
    </div>
  );
};

export default Input1;
