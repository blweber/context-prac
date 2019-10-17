import React, { Component, useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ActivityContext from "../../context/activities/ActivityContext";

const CreateActivity = () => {
  const activityContext = useContext(ActivityContext);
  const { activities, filtered, getActivities } = activityContext;

  useEffect(() => {
    try {
      getActivities()
    } catch(err) {
      console.log('ERROR DUDE!');
    }
  }, []);

  return (
    <div>JOEYYYYY</div>
  );
}

export default CreateActivity;