import React from "react";
import "./DisplayItem.css";

const DisplayItem = (props) => {
  return (
    <div className="flex-item">
      <img src="../assets/images/brand/menu.png" alt="Food-item" />
      <div style={{ width: "60%", float: "right" }}>
        <p
          style={{
            margin: "10px 0 0",

            padding: "0",
          }}
        >
          {props.text}
        </p>
        <p style={{ margin: "0", padding: "0", fontSize: "x-small" }}>
          12 jan 2022
        </p>
        <a href="#" style={{ marginRight: "10px" }}>
          edit
        </a>
        <a href="#">delete</a>
      </div>
    </div>
  );
};

export default DisplayItem;
