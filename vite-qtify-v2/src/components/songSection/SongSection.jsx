import React, { useState } from "react";
import Styles from "./SongSection.module.css";
import TabSection from "../tabSection/TabSection";

const SongSection = ({ albumType, data, show }) => {
  console.log(data);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={Styles.container}>
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
      {!show && <TabSection genre={data.data} />}
    </div>
  );
};
export default SongSection;
