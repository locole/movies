import React from 'react';
const imgPath ="https://image.tmdb.org/t/p/w45/";
const ActorItem = (props) => {
    return (
        <div className=' flex flex-col justify-between items-center '>
            <div className='w-[80px] h-[80px] rounded-full border-[2px] border-solid border-slate-400 cursor-pointer'>
            <img src={`${props.img === null ? "https://www.shutterstock.com/shutterstock/photos/516777415/display_1500/stock-vector-customer-vector-icon-flat-smooth-blue-symbol-pictogram-is-isolated-on-a-white-background-516777415.jpg" : `${imgPath}${props.img}`}`} alt="" className='w-full h-full object-cover rounded-full' />
            </div>
            <span className='text-white text-xs mt-4 text-center '>{props.name}</span>
        </div>
    );
};

export default ActorItem;