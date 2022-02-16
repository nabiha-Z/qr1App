import React from "react";
import { Button } from "@material-ui/core";
import classes from "./CreateMenuItem.module.css";
import Input1 from "../Input1";

const CreateMenuItem = () => {
  return (
    <div className={` ${classes.gridItem}`}>
      <h5>Create Menu</h5>
      <div className={classes.sub1}>
        <div className={` ${classes.anchor1} ${classes.grid1}`}>
          <Input1 text="Item Name" />
          <Input1 text="Item Price" />

          <div
            style={{
              width: "100%",
              border: "2px solid #1cb56d ",
              borderRadius: "12px",
              padding: "5px 20px",
              marginBottom: "10px",
            }}
          >
            <h6>Description</h6>
            <textarea
              style={{ width: "100%", height: "100px", border: "none" }}
              placeholder="Enter Here"
            />
          </div>
        </div>
        <label
          className={`${classes.anchor2} ${classes.grid2}`}
          style={{ color: "#1cb56d" }}
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
          style={{ color: "#1cb56d" }}
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
        <div style={{ gridColumn: "span 2" }}>
          <Button variant="contained" fullWidth id="button">
            Add Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateMenuItem;
