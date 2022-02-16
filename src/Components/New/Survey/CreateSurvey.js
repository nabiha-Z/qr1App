import React from "react";
import classes from "./CreateSurvey.module.css";
import Input from "../Input";
import { Button } from "@material-ui/core";

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

        <Button
          style={{ gridColumn: "span 2" }}
          variant="contained"
          fullWidth
          id="button"
        >
          Create Survey
        </Button>
      </div>
    </div>
  );
};

export default CreateSurvey;
