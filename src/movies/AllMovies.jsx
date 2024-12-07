
// import { useEffect, useState } from "react";
// import { useLoaderData, Link } from "react-router-dom";
// import { Rating } from "react-simple-star-rating";

// const AllMovies = () => {
//     const data = useLoaderData();
//     const [allMovies,setAllMovies]=useState(data)
// const [search,setSearch]=useState('')
// useEffect(()=>{
//     fetch(`http://localhost:5000/add?search=${search}`)
//     .then(res=>res.json())
//     .then(data=>setAllMovies(data))
// },[search])
//     return (
// <>
// <div className="w-[400px] mx-auto mb-4">
//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           name="search"
//           placeholder="search"
//           className="input input-bordered w-full"
//           required
//         />
//       </div>
        
//         <div className="w-11/12 mx-auto my-10">
//             <h2 className="text-4xl text-center my-4">All Movies</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {allMovies.map((movie) => (
//                     <div key={movie._id} className="bg-base-200 shadow-md p-4">
//                         <img className="w-full h-[300px] object-cover" src={movie.poster} alt={movie.title} />
//                         <div className="p-4">
//                             <h3 className="text-2xl font-semibold">{movie.title}</h3>
//                             <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
//                             <p className="text-sm text-gray-600">Duration: {movie.duration} minutes</p>
//                             <p className="text-sm text-gray-600">Release Year: {movie.releaseYear}</p>
//                             {/* <p className="text-sm text-gray-600">Rating: {movie.rating}</p> */}

//                              {/* Rating */}
//                              <div className="flex items-center mb-2">
//                              <span className="ml-2 text-sm text-gray-600">Rating:{movie.rating}</span>
//                                 <Rating readonly={true} initialValue={movie.rating} size={20} />
                              
//                             </div>
//                             <Link to={`/detail/${movie._id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//                                 View Details
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="text-center mt-8">
//                 <Link to="/all-movies" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
//                     See all movies
//                 </Link>
//             </div>
//         </div>
//         </>
//     );
// };

// export default AllMovies;



import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

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
                <h2 className="text-4xl font-bold text-center my-4 text-gray-800">All Movies</h2>
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
                                <p className="text-sm text-gray-600 mb-2">Release Year: {movie.releaseYear}</p>
                                
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
