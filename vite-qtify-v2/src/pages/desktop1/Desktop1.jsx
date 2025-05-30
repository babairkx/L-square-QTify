import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import SongSection from "../../components/songSection/SongSection";
import Section from "../../components/section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchFilters } from "../../api/Api";

const Desktop1 = () => {
  const [topAlbumData, setTopAlbumData] = useState(null);
  const [loadingTop, setLoadingTop] = useState(false);
  const [newAlbumData, setNewAlbumData] = useState(null);
  const [loadingNew, setLoadingNew] = useState(false);
  const [genre, setGenre] = useState(null);
  const [loadingGenre, setLoadingGenre] = useState(false);
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
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchFilters();
        setGenre(result);
        setLoadingGenre(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <Hero />
      {loadingTop && (
        <Section albumType="Top Albums" data={topAlbumData} show />
      )}
      {loadingNew && (
        <Section albumType="New Albums" data={newAlbumData} show />
      )}
      {loadingGenre && (
        <SongSection albumType="Songs" data={genre} show={false} />
      )}
    </>
  );
};
export default Desktop1;
