import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
// import Card from "../../components/card/Card";
// import TrialImage from "../../assets/trial_pic.jpg";
import Section from "../../components/section/Section";
import { fetchTopAlbums } from "../../api/Api";
import { fetchNewAlbums } from "../../api/Api";

const Desktop1 = () => {
  // return <Hero />;
  // return <Card image={TrialImage} follow={100} songType="New English Songs" />;
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://qtify-backend-labs.crio.do/albums/top")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);
  const [topAlbumData, setTopAlbumData] = useState(null);
  const [loadingTop, setLoadingTop] = useState(false);
  const [newAlbumData, setNewAlbumData] = useState(null);
  const [loadingNew, setLoadingNew] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchTopAlbums();
        setTopAlbumData(result);
        setLoadingTop(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchNewAlbums();
        setNewAlbumData(result);
        setLoadingNew(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <Hero />
      {loadingTop && <Section albumType="Top Albums" data={topAlbumData} />}
      {loadingNew && <Section albumType="New Albums" data={newAlbumData} />}
    </>
  );
};
export default Desktop1;
