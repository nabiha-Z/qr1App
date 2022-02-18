import { Button } from "@material-ui/core";
import React from "react";
import Input from "../Input";

import classes from "./EditMenu.module.css";

import MenuPreview from "./MenuPreview";

const EditMenu = () => {
  return (
    <>
      <div className={classes.gridItem}>
        <h6
          style={{
            margin: "5px 0 5px 20px",
            height: "fit-content",
            color: "#1cb56d",
          }}
        >
          Edit Menu
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
          <p
            style={{
              margin: "0 0 5px 0px",
              height: "fit-content",
              gridColumn: "span 2",
            }}
          >
            Menu Item Details
          </p>
          <Input imageSrc="" text="Item Name" span="1" />
          <Input imageSrc="" text="Item Price" span="1" />
          <div
            style={{
              width: "100%",
              border: "2px solid #1cb56d ",
              borderRadius: "12px",
              padding: "5px 20px",
              marginBottom: "10px",
              gridColumn: "span 2",
            }}
          >
            <h6>Description</h6>
            <textarea
              style={{ width: "100%", height: "50px", border: "none" }}
              placeholder="Enter Here"
            />
          </div>
          <label
            className={`${classes.anchor2} ${classes.grid2}`}
            style={{
              color: "#1cb56d",
              border: "2px dashed #1cb56d",
              borderRadius: "4px",
              textAlign: "center",
              padding: "4px 6px",
            }}
          >
            <input
              className={` ${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              /* onChange={(e) => handleFileUpload(e)} */
            />
            Upload Header Image
          </label>
          <label
            className={` ${classes.anchor2} ${classes.grid3}`}
            style={{
              color: "#1cb56d",
              border: "2px dashed #1cb56d",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <input
              className={` ${classes.anchor1} ${classes.grid1}`}
              type="file"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              style={{ display: "none" }}
              /* onChange={(e) => handleFileUpload(e)} */
            />
            Upload Background Image
          </label>
          <div
            style={{
              gridColumn: "span 2",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" style={{ width: "48%" }} id="button">
              Update Item
            </Button>
            <Button variant="contained" style={{ width: "48%" }} id="button">
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <MenuPreview />
    </>
  );
};

export default EditMenu;
