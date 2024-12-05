import { useLoaderData, Link } from "react-router-dom";

const AllMovies = () => {
    const data = useLoaderData();

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-4xl text-center my-4">All Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((movie) => (
                    <div key={movie._id} className="bg-base-200 shadow-md p-4">
                        <img className="w-full h-[300px] object-cover" src={movie.poster} alt={movie.title} />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold">{movie.title}</h3>
                            <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
                            <p className="text-sm text-gray-600">Duration: {movie.duration} minutes</p>
                            <p className="text-sm text-gray-600">Release Year: {movie.releaseYear}</p>
                            <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
                            <Link to={`/details/${movie._id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/all-movies" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                    See all movies
                </Link>
            </div>
        </div>
    );
};

export default AllMovies;
