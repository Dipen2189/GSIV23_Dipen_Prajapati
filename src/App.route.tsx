import React from "react";
import { Route, Routes } from 'react-router-dom';
const MovieList = React.lazy(() => import("./components/movieList"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/:id" element={<MovieList />} />
    </Routes>
  );
}

export default Routers;