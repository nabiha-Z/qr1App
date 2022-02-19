import React from "react";
import classes from "./Qr.module.css";

const Qr = () => {
  return (
    <div className={`${classes.gridItem} ${classes.item3}`}>
      <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
      <div className={classes.flexRow1}>{/* <List text={props.text} /> */}</div>
      <div className={classes.flexRow2}>{/* <List text={props.text} /> */}</div>
    </div>
  );
};

export default Qr;
