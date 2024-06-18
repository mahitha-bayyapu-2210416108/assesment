import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import "./styles.css";

const movies = [
  { title: "The Matrix", rating: 7.5, category: "Action" },
  { title: "Focus", rating: 6.9, category: "Comedy" },
  { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
  { title: "Everly", rating: 5.0, category: "Action" },
  { title: "Maps to the Stars", rating: 7.5, category: "Drama" }
];

export default function App() {
  return (
    <div className="App">
      <h1>Movie Search</h1>
      <MovieSearch movies={movies} />
    </div>
  );
}
