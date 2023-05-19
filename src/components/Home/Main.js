import React, { Fragment, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from './Header';
import useSWR from 'swr';
const key = "fa3b541007757962bd1a544230464536";
const imgPath ="https://image.tmdb.org/t/p/original";
const Main = () => {
    return (
        <Fragment>
           <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Main;