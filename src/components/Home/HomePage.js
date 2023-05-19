import React, { Fragment } from "react";
import MoviesList from "../Movies/MoviesList";
import Banner from "../Home/Banner"

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <MoviesList status="now_playing" title="Trending"></MoviesList>
      <MoviesList status="upcoming" title="Upcoming"></MoviesList>
      <MoviesList status="top_rated" title="Top Rated"></MoviesList>

    </Fragment>
  );
};

export default HomePage;
