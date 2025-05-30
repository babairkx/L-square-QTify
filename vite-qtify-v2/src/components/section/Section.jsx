import React, { useState } from "react";
import Styles from "./Section.module.css";
import { Grid, Box } from "@mui/material";
import Card from "../../components/card/Card";
import Swipr from "../../components/swipr/Swipr";

const Section = ({ albumType, data, show }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={Styles.top}>
        <p className={Styles.albumType}>{albumType}</p>
        <p
          className={Styles.toggle}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {!show ? null : !toggle ? "Show All" : "Collapse"}
        </p>
      </div>
      {toggle ? (
        <>
          <Box>
            <Grid
              container
              spacing={6}
              sx={{
                color: "white",
                backgroundColor: "#121212",
                justifyContent: "center",
                Height: "100%",
                paddingBottom: "20px",
              }}
            >
              {data.map((ele) => (
                <Grid xs={6} md={3} lg={2} xl={1.71} item key={ele._id}>
                  <Card
                    image={ele.image}
                    follow={ele.follows}
                    songType={ele.title}
                  ></Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <Swipr dta={data} />
      )}
    </>
  );
};
export default Section;
