import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";
import { Navigation, Pagination } from "swiper";
import MoviesCard from "./MoviesCard";
import { fetcher } from "../config";
const key = "fa3b541007757962bd1a544230464536";
// https://api.themoviedb.org/3/movie/now_playing?api_key={key}

const MoviesList = ({ title, ...props }) => {
  
  const [movies, setMovies] = useState([]);
  //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>
  //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${props.status}?api_key=${key}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  console.log(movies);
  return (
    <section className="movies-list mb-12 mx-auto max-w-[1200px] px-2">
      <h2 className="capitalize font-bold text-3xl mb-5 text-white ">
        {title}
      </h2>
      <div className="movie-list">
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={4}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MoviesCard
                  title={item.title}
                  point={item.vote_average}
                  date={item.release_date}
                  poster={item.poster_path}
                  id={item.id}
                ></MoviesCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MoviesList;
