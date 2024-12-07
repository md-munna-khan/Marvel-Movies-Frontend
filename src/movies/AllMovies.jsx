
import { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";  // Importing ReactStars for ratings
import DynamicTittle from "../components/DynamicTitle";
import { AuthContext } from "../layouts/AuthProvider";

const AllMovies = () => {
    const { isdark } = useContext(AuthContext);
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
                <DynamicTittle />
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
                <h2 className={`text-4xl font-bold text-center my-8 text-gray-800 ${isdark ? 'text-white' : ''}`}>All Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allMovies.map((movie) => (
                        <div key={movie._id} className="relative bg-black text-bg-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                            {/* Movie Poster */}
                            <img className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" src={movie.poster} alt={movie.title} />

                            {/* Movie Badge */}
                            <div className="absolute top-0 left-0 bg-red-500 text-black px-2 py-1 text-xs font-bold">
                                Dual Audio ORG
                            </div>

                            {/* Movie Content */}
                            <div className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-70 p-4">
                                <h3 className="text-lg font-semibold truncate">{movie.title}</h3>

                                <div className="flex justify-between text-sm text-gray-300 mt-2">
                                    <div>
                                        <p>Genre: {movie.genre}</p>
                                        <p>Release Year: {movie.release}</p>
                                    </div>
                                    <div>
                                        <p>Duration: {movie.duration} mins</p>
                                        <div className="flex items-center">
                                            <span className="bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-bold mr-2">
                                                {movie.rating}
                                            </span>
                                            {/* ReactStars Rating Component */}
                                            <ReactStars
                                                count={5}
                                                value={parseFloat(movie.rating)}
                                                size={22}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <Link
                                    to={`/detail/${movie._id}`}
                                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllMovies;
