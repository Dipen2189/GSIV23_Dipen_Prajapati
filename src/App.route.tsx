import React from "react";
import { Route, Routes } from 'react-router-dom';
const MovieList = React.lazy(() => import("./components/movieList"));
const MovieDetail = React.lazy(() => import("./components/movieDetail"))

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default Routers;