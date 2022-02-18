import React from "react";
import DisplayItem from "./DisplayItem";

const List = (props) => {
  return (
    <>
      <DisplayItem text={props.text} />
      <DisplayItem text={props.text} />
      <DisplayItem text={props.text} />
      <DisplayItem text={props.text} />
    </>
  );
};

export default List;
