import React, { useState } from "react";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("MENU");
  const [altTab, setAltTab] = useState(false);
  const [menu, setMenu] = useState("");

  const menuTabHandler = () => {
    setActiveTab("MENU");
  };
  const surveyTabHandler = () => {
    setActiveTab("SURVEY");
  };

  return (
    <div className="main" style={{ zIndex: "10" }}>
      <div className="grid-container">
        <div className=" grid-item item1">
          <div className="my-logo">
            <img src="../assets/images/brand/Logo_QR_2.png" alt="logo"></img>
            <h4>QR it Now</h4>
          </div>
          <Link
            className={
              activeTab === "MENU" ? "side-item activate" : "side-item"
            }
            to="/dashboard/menu"
            onClick={menuTabHandler}
          >
            <img
              className="tab-image"
              src="../assets/images/brand/fastFood.png"
              alt="Food-item"
            />{" "}
            <span style={{ marginRight: "80px" }}> Menu</span>
          </Link>
          <Link
            className={
              activeTab === "SURVEY" ? "side-item activate" : "side-item"
            }
            to="/dashboard/survey"
            onClick={surveyTabHandler}
          >
            <img
              className="tab-image"
              src="../assets/images/brand/survey.png"
              alt="Food-item"
            />
            <span>Survey</span>
          </Link>
          <Link className="side-item side3" to="/">
            <img
              src="../assets/images/brand/logout.png"
              alt=""
              style={{ height: "40px", marginBottom: "5px" }}
            />
            Logout
          </Link>
        </div>
        <div className="grid-item item2">
          <h4 style={{ color: "#1cb56d", paddingLeft: "20px" }}>Menus</h4>
          <div
            style={{
              width: "18%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="../assets/images/brand/user.jpg"
              alt=""
              style={{
                borderRadius: "100%",
                paddingBottom: "10px",
                height: "60px",
                width: "60px",
              }}
            />
            <span style={{ marginRight: "20px" }}>Josh Wq</span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
