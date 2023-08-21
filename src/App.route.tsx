import React from "react";
import { Route, Routes } from 'react-router-dom';
import MovieList from "./components/movieList";

export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<MovieList />} />
  </Routes>
  );
}
