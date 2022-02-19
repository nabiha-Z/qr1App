import React from "react";
import classes from "./ViewSurveyItem.module.css";
import List from "../List";
import ViewSurvey from "./ViewSurvey";

const ViewItems = (props) => {
  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h4>View Survey</h4>

        <div className={classes.flexCol}>
          <List text="Survey" />
          <List text="Survey" />
        </div>
      </div>
      <div className={classes.flexCol}>
        <ViewSurvey />
      </div>
    </>
  );
};

export default ViewItems;
