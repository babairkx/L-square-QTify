import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Swipr from "../swipr/Swipr";
import Styles from "./TabSection.module.css";
import { fetchSongs } from "../../api/Api";

const TabSection = ({ genre }) => {
  const [value, setValue] = React.useState(0);
  const [songs, setSongs] = useState(null);
  const [loader, setLoader] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchSongs();
        setSongs(result);
        setLoader(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#121212" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All" sx={{ color: "white" }}></Tab>
          {genre.map((ele) => (
            <Tab key={ele.key} label={ele.label} sx={{ color: "white" }}></Tab>
          ))}
        </Tabs>
      </Box>
      <div>{value === 0 && loader ? <Swipr dta={songs} /> : null}</div>
    </>
  );
};

export default TabSection;
