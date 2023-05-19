import React from 'react';
import { useNavigate } from 'react-router-dom';
import { imgPath } from '../config';

const SimilarCard = (props) => {
    const navigate = useNavigate();
    
    return (
        <div className='w-[240px] h-[150px] rounded-lg border-[2px] border-solid border-pink-400'>
                        <img  src={`${imgPath}${props.poster}`} alt=""  className='w-full h-full object-cover rounded-lg cursor-pointer' onClick= {() =>{
                            navigate(`/movie/${props.id}`)
                        }}/>
                    </div>
    );
};

export default SimilarCard;