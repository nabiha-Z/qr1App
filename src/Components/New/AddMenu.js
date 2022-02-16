import React from "react";
import classes from "./AddMenu.module.css";

const ViewSurvey = (props) => {
  const uploadMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("UPLOAD_MENU");
  };
  const createMenuHandler = () => {
    props.onAltTab(true);
    props.onMenu("CREATE_MENU");
  };

  return (
    <div className={`${["card-body"]} ${classes.gridItem}`}>
      <div className={classes.sub1}>
        <h6 style={{ color: "#1cb56d" }}>Add Menu</h6>
        <a href="#" className={classes.anchor} onClick={uploadMenuHandler}>
          <span className={classes.a1} style={{ color: "#1cb56d" }}>
            Upload Menu Items
          </span>
          <a href="##" className={classes.a2} style={{ color: "#1cb56d" }}>
            {" "}
            Download Template Excel{" "}
          </a>
        </a>
        <h6 style={{ textAlign: "center" }}>OR</h6>
        <a
          href="#"
          className={classes.anchor}
          style={{ color: "#1cb56d" }}
          onClick={createMenuHandler}
        >
          Create Menu Items
        </a>
      </div>
    </div>
  );
};

export default ViewSurvey;
