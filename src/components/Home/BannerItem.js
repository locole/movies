import React from 'react';
import { useNavigate } from 'react-router-dom';

const BannerItem = (props) => {
    const imgPath ="https://image.tmdb.org/t/p/w1280/";
    const navigate = useNavigate();
    return (
        <div className="w-full h-full rounded-lg relative ">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src={`${imgPath}${props.poster}`}
            className=" w-full h-full object-fill rounded-lg"
            alt=""
          />
          <h2 className="capitalize text-white font-bold text-4xl absolute bottom-1/3 left-8 cursor-pointer">
            {props.title}
          </h2>
          <div className="flex flex-row gap-8 absolute bottom-[120px] left-8">
            <span className="px-4 py-2 border-[2px] border-solid border-slate-300 rounded-lg text-white cursor-pointer">
              Action
            </span>
            <span className="px-4 py-2 border-[2px] border-solid border-slate-300 rounded-lg text-white cursor-pointer">
              Adventure
            </span>
            <span className="px-4 py-2 border-[2px] border-solid border-slate-300 rounded-lg text-white cursor-pointer">
              Drama
            </span>
          </div>
          <div className="text-white px-8 py-4 rounded-full bg-pink-600 absolute bottom-5 left-8 cursor-pointer flex justify-center item-center gap-3" onClick={() => navigate(`/movie/${props.id}`)}>
            <span className="text-center flex justify-center items-center">
              Watch now{" "}
            </span>
            <div className="flex justify-center items-center border-white border-solid border-[2px] rounded-full p-2">
              <i class="fa-solid fa-play  text-white text-[16px]"></i>
            </div>
          </div>
        </div>
    );
};

export default BannerItem;