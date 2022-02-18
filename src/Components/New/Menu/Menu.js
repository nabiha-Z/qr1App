import React from "react";
import AddMenu from "./AddMenu";
import CreateMenuList from "./CreateMenuList";
import DisplayList from "../DisplayList";

const Menu = () => {
  return (
    <>
      <DisplayList text="Restaurant menu 1" />
      <CreateMenuList />
      <AddMenu />
    </>
  );
};

export default Menu;
