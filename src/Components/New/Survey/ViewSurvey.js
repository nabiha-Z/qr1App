import React from "react";
import classes from "./ViewSurvey.module.css";

const ViewSurvey = () => {
  return (
    <div className={classes.gridItem}>
      <h6 style={{ color: "#1cb56d", marginBottom: "10px" }}>View Survey</h6>
      <div className={classes.sub1}>
        <div className={classes.item1} style={{ marginLeft: "15px" }}>
          Image
        </div>
        <div className={classes.item1} style={{ marginLeft: "25px" }}>
          Description
        </div>
        <div className={classes.item1}>Select Vote</div>
        <div className={classes.item}>
          <img
            src="../assets/images/brand/picnic.jpg"
            alt="img"
            style={{
              width: "70px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p style={{ width: "220px", marginTop: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <input
            type={"checkbox"}
            style={{ width: "50px", marginRight: "30px" }}
          />
        </div>
        <div className={classes.item}>
          <img
            src="../assets/images/brand/picnic.jpg"
            alt="img"
            style={{
              width: "70px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p style={{ width: "220px", marginTop: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <input
            type={"checkbox"}
            style={{ width: "50px", marginRight: "30px" }}
          />
        </div>
        <div className={classes.item}>
          <img
            src="../assets/images/brand/picnic.jpg"
            alt="img"
            style={{
              width: "70px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p style={{ width: "220px", marginTop: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <input
            type={"checkbox"}
            style={{ width: "50px", marginRight: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewSurvey;
