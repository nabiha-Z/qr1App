import React, { useState, useEffect } from "react";
import classes from "./ViewSurveyItem.module.css";
import List from "../List";
import Cookies from 'js-cookie';
import { fetchUserSurveys } from '../../../APIs/api';
import ViewSurvey from "./ViewSurvey";

const ViewItems = () => {
  const [surveys, setsurveys] = useState([]);
  const [error, seterror] = useState("");

  useEffect(async () => {

    await fetchUserSurveys({
      uid: Cookies.get('id')
    })
      .then(function (response) {
        //   console.log(response);
        if (response.data.message === true) {
          console.log("res menu:", response.data)
          try {
            seterror("");
            setsurveys(response.data.menu);

          } catch (e) {
            return null;
          }
        } else if (response.data.message === false) {
          seterror(response.data.error)
        }

      })
      .catch(function (error) {
        console.log("error:", error.message)
      });

  }, [])
  return (
    <>
      <div className={` ${classes.gridItem}`}>
        <h4>View Survey</h4>

        <div className={classes.flexCol}>
          <List lists={surveys} />
          
        </div>
      </div>
      <div className={classes.flexCol}>
        <ViewSurvey />
      </div>
    </>
  );
};

export default ViewItems;
