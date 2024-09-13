import { Box, FormControl, Typography } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <>
      <Typography variant="h2" color="black">
        Add your List
        <span style={{ color: "red" }}>(max 24 Hrs)</span>
      </Typography>

      <Box sx={{ p: 2, border: 1, width: "800px", margin: "0 auto" }}>
        <FormControl>
          <input />
          <button>Submit</button>
        </FormControl>
      </Box>
    </>
  );
};

export default Main;
