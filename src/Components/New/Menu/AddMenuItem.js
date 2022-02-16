import React from "react";
import classes from "./AddMenuItem.module.css";

const AddMenuItem = () => {
  return (
    <div className={` ${classes.gridItem}`}>
      <h5>Upload Menu</h5>
      <div className={classes.sub1}>
        <a href="#" className={` ${classes.anchor1} ${classes.grid1}`}>
          <span className={classes.a1} style={{ color: "#1cb56d" }}>
            Upload Excel/PDF/Image
          </span>
          <a href="##" className={classes.a2} style={{ color: "#1cb56d" }}>
            {" "}
            Download Template Excel{" "}
          </a>
        </a>
        <a
          href="#"
          className={` ${classes.anchor2} ${classes.grid2}`}
          style={{ color: "#1cb56d" }}
        >
          Upload Header Image
        </a>
        <a
          href="#"
          className={` ${classes.anchor2} ${classes.grid3}`}
          style={{ color: "#1cb56d" }}
        >
          Upload Background Image
        </a>
      </div>
    </div>
  );
};

export default AddMenuItem;
