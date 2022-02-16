import React from "react";
import CreateSurvey from "./CreateSurvey";
import DashBoard1 from "../DisplayItemList";
import ViewSurvey from "./ViewSurvey";

const Survey = () => {
  return (
    <>
      <DashBoard1 text="Survey" />
      <CreateSurvey />
      <ViewSurvey />
    </>
  );
};

export default Survey;
