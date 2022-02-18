import React from "react";
import classes from "./DisplayList.module.css";
import DisplayItem from "./DisplayItem";
import List from "./List";

const DisplayItemList = (props) => {
  return (
    <>
      <div className={`${classes.gridItem} ${classes.item3}`}>
        <h5 style={{ paddingLeft: "20px" }}> All Menus</h5>
        <div className={classes.flexRow1}>
          <List text={props.text} />
        </div>
        <div className={classes.flexRow2}>
          <List text={props.text} />
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
