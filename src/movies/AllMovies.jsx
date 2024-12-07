



import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import DynamicTittle from "../components/DynamicTitle";

const AllMovies = () => {
    const data = useLoaderData();
    const [allMovies, setAllMovies] = useState(data);
    const [search, setSearch] = useState('');

    // Fetching movie data with search functionality
    useEffect(() => {
        fetch(`http://localhost:5000/add?search=${search}`)
            .then(res => res.json())
            .then(data => setAllMovies(data))
            .catch(error => console.error("Error fetching movies:", error));
    }, [search]);

    return (
        <>
            {/* Search Bar */}
            <div className="w-[400px] mx-auto mb-6">
                <DynamicTittle></DynamicTittle>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search for movies..."
                    className="input input-bordered w-full p-4 rounded-xl shadow-md transition-all hover:shadow-xl focus:outline-none"
                    required
                />
            </div>

            {/* Movies Display */}
            <div className="w-11/12 mx-auto my-10">
                <h2 className="text-4xl font-bold text-center my-8 text-gray-800 ">All Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allMovies.map((movie) => (
                        <div key={movie._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            {/* Movie Poster */}
                            <img className="w-full h-[300px] object-cover" src={movie.poster} alt={movie.title} />

                            {/* Movie Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{movie.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">Genre: {movie.genre}</p>
                                <p className="text-sm text-gray-600 mb-2">Duration: {movie.duration} minutes</p>
                                <p className="text-sm text-gray-600 mb-2">Release Year: {movie.release}</p>
                                
                                {/* Rating Section */}
                                <div className="flex items-center mb-2">
                                    <Rating
                                        readonly={true}
                                        initialValue={movie.rating}
                                        size={20}
                                        fillColor="gold"  // Set the stars to gold color
                                    />
                                    <span className="ml-2 text-sm text-gray-600">{movie.rating}</span>
                                </div>
                                
                                {/* Movie Details Link */}
                                <Link
                                    to={`/detail/${movie._id}`}
                                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Link to See All Movies */}
                <div className="text-center mt-8">
                    <Link
                        to="/all-movies"
                        className="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                    >
                        See all movies
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AllMovies;
