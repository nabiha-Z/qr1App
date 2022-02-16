import React from "react";
import "./DashBoard1.module.css";
import CreateSurvey from "./CreateSurvey";
import CreateMenuList from "./CreateMenuList";
import AddMenu from "./AddMenu";
import ViewSurvey from "./Survey/ViewSurvey";
import DisplayItem from "./DisplayItem";

const DashBoard1 = (props) => {
  return (
    <>
      <div className="grid-item item3">
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
      {props.activeTab === "MENU" ? <CreateMenuList /> : <CreateSurvey />}
      {props.activeTab === "MENU" ? (
        <AddMenu onAltTab={props.onAltTab} onMenu={props.onMenu} />
      ) : (
        <ViewSurvey />
      )}
    </>
  );
};

export default DashBoard1;
