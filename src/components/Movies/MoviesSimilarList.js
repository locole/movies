import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr'
import { fetcher, imgPath, key } from '../config';
import SimilarCard from "./SimilarCard"
// https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=${key}
const MoviesSimilarList = (props) => {
    const [similar, setSimilar]= useState([]);
    const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=${key}`, fetcher);
    useEffect(() => {
     if(data && data.results)
     {
       setSimilar(data.results);
     }
    }, [data])
  
    return (
        <div className='w-[750px] absolute left-10 bottom-32'>
        <h2 className='text-2xl font-bold text-white mb-5 '>Similar</h2>
        <Swiper
        grabCursor={"true"}
          spaceBetween={10}
          slidesPerView={3} >
          {
            similar.length > 0 && similar.map( item => (
                <SwiperSlide key={item.id}>
                    <SimilarCard id={item.id} poster={item.backdrop_path}></SimilarCard>
                </SwiperSlide>
            ))
          }
          </Swiper>
            
        </div>
    );
};

export default MoviesSimilarList;