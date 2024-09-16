import { Box, FormControl, Typography } from "@mui/material";
import React, { useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      name: event.target.elements["name"].value,
      hours: event.target.elements["hours"].value,
    };
    const combinedData = (prevDatas) => {
      return [...prevDatas, newData];
    };
    setData(combinedData);
    event.target.reset();
  };
  console.log(data);
  return (
    <>
      <Typography variant="h2" color="black">
        Add your List
        <span style={{ color: "red" }}>(max 24 Hrs)</span>
      </Typography>

      <Box sx={{ p: 2, border: 1, width: "800px", margin: "0 auto" }}>
        <form onSubmit={submitHandler}>
          <FormControl>
            <label>Please put your task name</label>
            <input name="name" />
            <label>Please put your hours</label>
            <input name="hours" />
            <input type="submit" />
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Main;
