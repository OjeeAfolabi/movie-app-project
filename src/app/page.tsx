import React from "react";

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
      ],
      rating: 4.5,
      description:
        "A group of teens are sucked into a retro video game and must win to escape.",
      genre: "Adventure",
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
          Dashboard Overview
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

    </div>
  );
};

export default Home;
