import React from "react";
import CreateSurvey from "./CreateSurvey";
import DisplayList from "../DisplayList";
import ViewSurvey from "./ViewSurvey";

const Survey = () => {
  return (
    <>
      <DisplayList text="Survey" />
      <CreateSurvey />
      <ViewSurvey />
    </>
  );
};

export default Survey;
