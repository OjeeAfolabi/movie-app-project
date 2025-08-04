import React from "react";
import Link from "next/link";

const MoviePage = () => {
  const movies = [
    {
      id: 1,
      title: "The Silent Horizon",
    },
    {
      id: 2,
      title: "Neon Dreams",
    },
    {
      id: 3,
      title: "Echoes of War",
    },
    {
      id: 4,
      title: "Moonlit Melody",
    },
    {
      id: 5,
      title: "Pixel Raiders",
    },
    {
      id: 6,
      title: "Whispers in the Dark",
    },
  ];
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded">
            <Link
              className="text-blue-400 hover:text-blue-600 "
              href={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;
