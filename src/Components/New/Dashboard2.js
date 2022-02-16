import React from "react";
import UploadMenu from "./Menu/UploadMenu";
import MenuPreview from "./Menu/MenuPreview";
import AddMenuItem from "./Menu/AddMenuItem";
import CreateMenuItem from "./Menu/CreateMenuItem";

const DashBoard2 = (props) => {
  return (
    <>
      {props.menuTab === "UPLOAD_MENU" ? <UploadMenu /> : <CreateMenuItem />}

      <MenuPreview />
    </>
  );
};

export default DashBoard2;
