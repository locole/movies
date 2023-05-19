import React from 'react';
import { useNavigate } from 'react-router-dom';
import { imgPath } from '../config';

const MoviesCard = (props) => {

  const navigate = useNavigate();
 
    return (
        
          <div className="movies-card flex flex-col p-3 rounded-lg bg-slate-800 gap-3 h-full">
            <div className="w-full h-[250px]">
              <img
                src={`${imgPath}${props.poster}`}
                className="w-full h-full object-cover rounded-lg "
                alt=""
              />
            </div>
            <div className='flex flex-col gap-3 '>
            <h3 className="text-base text-center font-medium text-white ">
              {props.title}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-sm font-extralight text-gray-400">
              {props.date}
              </span>
              <span className="text-sm font-extralight text-gray-400">{props.point}</span>
            </div>
            </div>
            <div className="text-white w-full py-4 rounded-2xl bg-pink-600 cursor-pointer flex justify-center item-center gap-3 mt-auto" onClick={() => navigate(`/movie/${props.id}`)}>
              <span className="text-center text-xl font-semibold flex justify-center items-center">
                Watch now
              </span>
              <div className="flex justify-center items-center border-white border-solid border-[2px] rounded-full p-2">
                <i class="fa-solid fa-play  text-white text-[16px]"></i>
              </div>
            </div>
          </div>
        
    );
};

export default MoviesCard;