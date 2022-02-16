import React from "react";
import classes from "./CreateSurvey.module.css";
import Input from "./Input";

const CreateSurvey = () => {
  return (
    <div className={classes.gridItem}>
      <h6>Create Survey</h6>
      <div className={classes.item4}>
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/survey.png"
          text="Survey Name"
          span="2"
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/pin.png"
          text="Address"
          span="2"
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/building.png"
          text="City"
          span="2"
        />
        <Input
          className={classes.sub1}
          imageSrc="../assets/images/brand/bars.png"
          text="Description"
          span="2"
        />
        {/* <div className={`${classes.createMenu} ${classes.sub1}`}>
          <img
            className={classes.icon}
            src="../assets/images/brand/survey.png"
            alt=""
          />
          <p className={classes.label}>Survey Name</p>
          <p>Enter Here</p>
        </div> */}
        {/* <div className={`${classes.createMenu} ${classes.sub2}`}>
          <img
            className={classes.icon}
            src="../assets/images/brand/pin.png"
            alt=""
          />
          <p className={classes.label}>Address</p>
          <p>Enter Here</p>
        </div>
        <div className={`${classes.createMenu} ${classes.sub3}`}>
          <img
            className={classes.icon}
            src="../assets/images/brand/building.png"
            alt=""
          />
          <p className={classes.label}>City</p>
          <p>Enter Here</p>
        </div>
        <div className={`${classes.createMenu} ${classes.sub4}`}>
          <img
            className={classes.icon}
            src="../assets/images/brand/bars.png"
            alt=""
          />
          <p className={classes.label}>Description</p>
          <p>Enter Here</p>
        </div> */}
        <div className={`${classes.button}`}>Create survey</div>
      </div>
    </div>
  );
};

export default CreateSurvey;
