import React from "react";
import AddMenu from "./AddMenu";
import CreateMenuList from "./CreateMenuList";
import DisplayItemList from "../DisplayItemList";

const Menu = () => {
  return (
    <>
      <DisplayItemList text="Restaurant Menu 1" />
      <CreateMenuList />
      <AddMenu />
    </>
  );
};

export default Menu;
