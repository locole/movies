import React from 'react';
import {NavLink} from 'react-router-dom'
import  ReactDOM  from 'react-dom';



const Header = () => {
  return (
    <header className="top-0 flex flex-row  gap-8 justify-center items-center pt-8 mb-8 text-white text-lg cursor-pointer z-10  ">
    <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-pink-600" : ""
        }>Home</NavLink>
    <NavLink to="/movies" className={({ isActive }) =>
          isActive ? "text-pink-600" : ""
        }>Movies</NavLink>
  </header>
  );
};

export default Header;