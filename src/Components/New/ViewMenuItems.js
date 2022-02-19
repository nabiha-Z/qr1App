import React from "react";
import classes from "./ViewMenuItem.module.css";
import MenuPreview from "./Menu/MenuPreview";
import DisplayItem from "./DisplayItem";
import List from "./List";
import CreateMenuList from "./Menu/CreateMenuList";
import CreateMenuItem from "./Menu/CreateMenuItem";
import ViewSurvey from "./Survey/ViewSurvey";

const ViewItems = (props) => {
  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h4>View Menu</h4>

        <div className={classes.flexCol}>
          <List text="Restaurant" />
          <List text="Restaurant" />
        </div>
      </div>
      <MenuPreview />
    </>
  );
};

export default ViewItems;
