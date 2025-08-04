import Link from "next/link";
import React from "react";
import { FaComment } from "react-icons/fa";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "The Silent Horizon",
      comments: ["Beautifully shot", "Loved the twist", "Very emotional"],
      rating: 4.1,
      description:
        "A mysterious journey through the Arctic where silence speaks louder than words.",
      genre: "Drama",
    },
    {
      id: 2,
      title: "Neon Dreams",
      comments: [
        "Amazing visuals",
        "Great soundtrack",
        "Felt like Blade Runner vibes",
        "A visual masterpiece",
      ],
      rating: 4.8,
      description:
        "A cyberpunk thriller exploring memory and identity in a neon-lit future city.",
      genre: "Sci-Fi",
    },
    {
      id: 3,
      title: "Echoes of War",
      comments: [
        "Intense battle scenes",
        "Historically accurate",
        "Very gripping",
        "A must-watch for war movie fans",
        "Emotional depth",
        "the film captures the brutal reality of war and the resilience of the human spirit.",
      ],
      rating: 4.4,
      description:
        "A powerful retelling of forgotten soldiers in World War II.",
      genre: "War",
    },
    {
      id: 4,
      title: "Moonlit Melody",
      comments: [
        "Soundtrack is top-tier",
        "A feel-good movie",
        "Charming lead actress",
      ],
      rating: 4.0,
      description:
        "A struggling musician rediscovers love and inspiration under the Paris moonlight.",
      genre: "Romance",
    },
    {
      id: 5,
      title: "Pixel Raiders",
      comments: [
        "So much fun!",
        "Great for gamers",
        "80s nostalgia everywhere",
        "Loved the retro graphics",
      ],
      rating: 4.5,
      description:
        "A group of teens are sucked into a retro video game and must win to escape.",
      genre: "Adventure",
    },
    {
      id: 6,
      title: "Whispers in the Fog",
      comments: [
        "Eerie atmosphere!",
        "Loved the plot twist.",
        "A slow burn but worth it.",
        "Perfect for mystery lovers",
        "The cinematography is stunning.",
        "The film's haunting visuals and suspenseful storytelling create an unforgettable experience.",
        "A gripping tale that keeps you guessing until the end.",
      ],
      rating: 4.3,
      description:
        "A detective uncovers dark secrets in a quiet coastal town shrouded in mist.",
      genre: "Mystery",
    },
  ];
  const totalMovies = movies.length;
  const totalComments = movies.reduce(
    (sum, movie) => sum + movie.comments.length,
    0
  );
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);
  // console.log(movies);
  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Movie Statistics
        </h2>
        <div className="grid grid-cols-3 sm-grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-2 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-2xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg flex flex-col items-center ">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-2xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Ratings</p>
            <p className="text-2xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-white">Movie List</h2>
      <ul className="grid grid-cols-3 sm:grid-cols-2 lg:grid:cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover-shadow-2xl transition-all duration-300"
          >
            <Link
              href={`/movies/${movie.id}`}
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
            <p className="text-gray-400 mt-2">{movie.description}</p>
            <p className="text-yellow-400 mt-2">
              Rating: {movie.rating}
              <span className="ml-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  const rounded = Math.round(movie.rating * 2) / 2;
                  if (i + 1 <= Math.floor(rounded)) {
                    return <span key={i}>⭐</span>; // full star
                  } else if (i + 0.5 === rounded) {
                    return <span key={i}>🟊</span>; // half star (or use a half-star emoji/svg)
                  } else {
                    return <span key={i}>☆</span>; // empty star
                  }
                })}
              </span>
            </p>
            <p className="text-gray-400 mt-2">Genre: {movie.genre}</p>
            <div className="flex items-center justify-end">
              <div className="flex items-center mt-4 text-gray-300">
                <FaComment className="mr-1" />
                <span className="text-sm">{movie.comments.length} </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
