import React from "react";
import "./DisplayItemList.module.css";
import DisplayItem from "./DisplayItem";

const DisplayItemList = (props) => {
  return (
    <>
      <div className="grid-item item3">
        <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
        <div className="flex-row1">
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
        </div>
        <div className="flex-row2">
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
          <DisplayItem text={props.text} />
        </div>
      </div>

      {/* {props.activeTab === "MENU" ? <CreateMenuList /> : <CreateSurvey />} */}
      {/* {props.activeTab === "MENU" ? (
        <AddMenu onAltTab={props.onAltTab} onMenu={props.onMenu} />
      ) : (
        <ViewSurvey />
      )} */}
    </>
  );
};

export default DisplayItemList;
