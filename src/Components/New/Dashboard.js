import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DisplayItem from "./DisplayItem";
import CreateSurvey from "./CreateSurvey";
import CreateMenuList from "./CreateMenuList";
import AddMenu from "./AddMenu";
import ViewSurvey from "./Survey/ViewSurvey";
import UploadMenu from "./Menu/UploadMenu";
import DashBoard1 from "./DashBoard1";
import DashBoard2 from "./Dashboard2";
import MenuPreview from "./Menu/MenuPreview";

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
    <div className="" style={{ zIndex: "10" }}>
      <div style={{ height: "0px" }}></div>
      <div className="grid-container">
        <div className="card-body grid-item item1">
          <div className="my-logo">
            <img
              src="../assets/images/brand/Logo_QR_2.png"
              alt="logo"
              /* style={{ width: "42px", height: "42px" }} */
            ></img>
            <h4
            /* style={{ color: "#1cb56d", textAlign: "center", height: "100px" }} */
            >
              QR it Now
            </h4>
          </div>
          <a
            className={
              activeTab === "MENU" ? "side-item activate" : "side-item"
            }
            href="#"
            onClick={menuTabHandler}
          >
            <img
              className="tab-image"
              src="../assets/images/brand/fastFood.png"
              alt="Food-item"
            />{" "}
            <span style={{ marginRight: "80px" }}> Menu</span>
          </a>
          <a
            className={
              activeTab === "SURVEY" ? "side-item activate" : "side-item"
            }
            href="#"
            onClick={surveyTabHandler}
          >
            <img
              className="tab-image"
              src="../assets/images/brand/survey.png"
              alt="Food-item"
            />
            <span>Survey</span>
          </a>
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
        {activeTab === "MENU" && altTab ? (
          <DashBoard2 menuTab={menu} />
        ) : (
          <DashBoard1
            activeTab={activeTab}
            onAltTab={setAltTab}
            onMenu={setMenu}
          />
        )}

        {/* <div className="grid-item item3">
            <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
            
            <div className="flex-row1">
              <DisplayItem />
              <DisplayItem />
              <DisplayItem />
              <DisplayItem />
            </div>
            <div className="flex-row2">
              <DisplayItem />
              <DisplayItem />
              <DisplayItem />
              <DisplayItem />
            </div>
          </div>
          {activeTab === "MENU" ? <CreateMenuList /> : <CreateSurvey />}
        {activeTab === "MENU" ? <AddMenu /> : <ViewSurvey />} */}
      </div>
      <div style={{ height: "0px" }}></div>
    </div>
  );
};

export default Dashboard;
