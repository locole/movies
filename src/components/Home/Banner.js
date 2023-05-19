import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import BannerItem from './BannerItem';
import useSWR from 'swr'


const key = "fa3b541007757962bd1a544230464536";
const Banner = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const [movies , setMovies ] = useState([]);
    //https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>
  //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
    const { data, error} = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`, fetcher);
    useEffect(()=> {
        if(data && data.results){
            setMovies(data.results);
        }
    }, [data]);
    console.log(movies);
    return (
        <section className="banner max-w-[1200px] h-[600px] mt-5 mx-auto mb-12 ">
          <Swiper modules={[Navigation, Pagination, Autoplay]}
          grabCursor={"true"}  slidesPerView={1}
          navigation
          autoplay={ {delay: 5000}}
          pagination={{ clickable: true }}>
           {
           movies.length > 0 && movies.map(item => ((
            <SwiperSlide key={item.id} >
                <BannerItem poster={item.backdrop_path
} title={item.title} id={item.id}></BannerItem>
            </SwiperSlide>
           )))
           }
         
          </Swiper>
      </section>
    );
};

export default Banner;