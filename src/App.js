import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Home/Main";
import HomePage from "./components/Home/HomePage";
import MoviePage from "./components/Movies/MoviePage"
import MovieDetailPage from "./components/Movies/MovieDetailPage"

function App() {
  
  return (
   <Fragment>
     <Routes>
     <Route  element={<Main></Main>}>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
      <Route path="/movie/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
     </Route>
    
    </Routes>
   </Fragment>
  );
}

export default App;
