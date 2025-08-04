import React from "react";
import { FaStar } from "react-icons/fa";
// import Link from "next/link";

const MovieDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id: movieId } = await params;
  const movies = [
    {
      id: "1",
      title: "The Silent Horizon",
      comments: ["Beautifully shot", "Loved the twist", "Very emotional"],
      rating: 4.1,
      description:
        "A mysterious journey through the Arctic where silence speaks louder than words.",
      genre: "Drama",
    },
    {
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
      title: "Whispers in the Fog",
      comments: [
        "Loved the plot twist.",
        "Eerie atmosphere!",
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
  const movie = movies.find((m) => m.id === movieId);
  return (
    <div className="p-8 bg-gray-900 space-y-8 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 t0-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-gray-300 text-lg">{movie?.description}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl text-gray-300">Comments:</p>
              <p className="text-xl font-semibold text-white">{`${movie?.comments.length}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">
          <ul className="space-y-4">
            {movie?.comments.map((comment: string, index: number) => (
              <li
                key={index}
                className="bg-gray-800 p-2 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-300 text-sm">{comment}</p>
              </li>
            ))}
          </ul>
        </h3> 
      </div>
    </div>
  );
};

export default MovieDetails;
