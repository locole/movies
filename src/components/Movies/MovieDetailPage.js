import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ActorsList from "../Actors/ActorsList";
import MoviesSimilarList from "./MoviesSimilarList";
const key = "fa3b541007757962bd1a544230464536";
const imgPath = "https://image.tmdb.org/t/p/original/";
const imgPosterPath = "https://image.tmdb.org/t/p/w500/";
//http://api.themoviedb.org/3/movie/{id}/casts?api_key={api_key}
const MovieDetailPage = () => {
  const { movieId } = useParams();

  // `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${movieId}`
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [movie, setMovie] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);

  const { backdrop_path, poster_path, genres, title, overview } = movie;
  // console.log(actors);
  return (
    <Fragment>
      <div className="movie w-[97%] mx-auto rounded-xl h-[800px] relative overflow-hidden mb-10">
        <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.5)] rounded-lg"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${imgPath}${backdrop_path})`,
          }}
        ></div>
        <div className=" absolute inset-0 flex">
          <div className="w-[55%] flex flex-col relative ">
            <span className="w-[200px] text-base text-slate-200 text-center  font-medium mt-14 ml-8">
              {title}
            </span>
            <div className="absolute left-10 bottom-1/2 flex flex-col gap-6 ">
              <h2 className=" text-center text-3xl text-white font-bold">
                {title}
              </h2>
              <div className=" flex flex-row  ">
                {genres &&
                  genres.map((item) => (
                    <div
                      key={item.id}
                      className="text-white text-sm font-extralight ml-5 py-2 px-5 border-solid border-[2px] border-purple-500 rounded-xl cursor-pointer"
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>
            
            <MoviesSimilarList id={movieId}></MoviesSimilarList>
          </div>
          <div className="movie-details w-[45%] flex flex-col gap-5">
            <div className="movie-details-poster w-[400px] mx-auto h-[200px] rounded-lg mt-10  relative ">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
              <img
                src={`${imgPosterPath}${poster_path}`}
                alt=""
                className="w-full h-full object-scale-down rounded-lg"
              />
              <div className="absolute w-full bottom-5   flex flex-col gap-3 ">
                <h3 className="w-full text-white text-center font-semibold ">
                  {title}
                </h3>
                <span className="w-full text-center text-sm font-thin text-white">
                  Watch movies online
                </span>
              </div>
            </div>
            <div className="bg-white w-[500px] mx-auto h-1 rounded-full"></div>
            <p className="text-slate-400 leading-5 font-thin text-xs w-[500px] mx-auto">
              {overview}
            </p>
            <ActorsList id={movieId} api_key={key}></ActorsList>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetailPage;
