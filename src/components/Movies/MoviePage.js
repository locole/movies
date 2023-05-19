import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MoviesCard from "./MoviesCard";
import ReactPaginate from 'react-paginate';
const key = "fa3b541007757962bd1a544230464536";
const itemsPerPage = 20;
const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [keyWord, setKeyWord]= useState("Marvel");
  const [search, setSearch] = useState(`https://api.themoviedb.org/3/search/movie?api_key=fa3b541007757962bd1a544230464536&query='Marvel'&page=1`);
  const { data, error } = useSWR(
    search,
    fetcher
  );
 
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
      
    }
  }, [data]);
  // console.log(movies);



  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
 
useEffect(() => {
  if(!data || !data.total_results){
      return;
    }
    setPageCount(Math.ceil(data.total_results/ itemsPerPage));
}, [data])
// console.log(pageCount);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setSearch(`https://api.themoviedb.org/3/search/movie?api_key=fa3b541007757962bd1a544230464536&query='${keyWord}'&page=${event.selected + 1}`);
    
  };



  return (
    <>
      <div className="max-w-[600px] mx-auto my-10 flex justify-between">
        <input
          type="text"
          className="w-[500px] mx-auto py-3 p-5 outline-none border-solid border-[2px] border-gray-500 rounded-full bg-slate-800 text-white  focus:border-slate-300"
          placeholder="Enter your Film" onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
        <div className="text-white flex justify-center items-center p-4 bg-pink-600 rounded-full cursor-pointer" onClick={() => {
          setSearch( ` https://api.themoviedb.org/3/search/movie?api_key=fa3b541007757962bd1a544230464536&query='${keyWord}'&page=1`)
        }}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-8 ">
        {movies.length > 0 &&
          movies.map((item) => (
            <MoviesCard key={item.id}
              title={item.title}
              point={item.vote_average}
              date={item.release_date}
              poster={item.poster_path}
              id={item.id}
            ></MoviesCard>
          ))}
      </div>
      <div className="w-[500px] mx-auto mt-16 mb-40 flex justify-center text-white pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  );
};

export default MoviePage;
