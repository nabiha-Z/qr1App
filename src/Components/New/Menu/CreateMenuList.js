import React from "react";
import classes from "./CreateMenuList.module.css";
import Input from "../Input";

const CreateMenuList = () => {
  return (
    <div className={classes.gridItem}>
      <h6
        style={{
          margin: "5px 0 5px 20px",
          height: "fit-content",
          color: "#1cb56d",
        }}
      >
        Create Menu
      </h6>
      <p style={{ margin: "0 0 5px 20px", height: "fit-content" }}>
        Restaurant Details
      </p>
      <div className={classes.item4}>
        <Input
          imageSrc="../assets/images/brand/fork.png"
          text="Restaurant Name"
          span="2"
        />
        <Input
          imageSrc="../assets/images/brand/pin.png"
          text="Address"
          span="2"
        />
        <Input
          imageSrc="../assets/images/brand/building.png"
          text="City"
          span="1"
        />
        <Input
          imageSrc="../assets/images/brand/telephone.png"
          text="Phone Number"
          span="1"
        />
        <Input
          imageSrc="../assets/images/brand/bars.png"
          text="Menu Name"
          span="2"
        />
      </div>
    </div>
  );
};

export default CreateMenuList;
