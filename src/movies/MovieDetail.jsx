

// import { useNavigate, useLoaderData, Link } from 'react-router-dom';
// import { Rating } from 'react-simple-star-rating';

// const MovieDetail = () => {
//     const movieData = useLoaderData();
//     const navigate = useNavigate();

//     const handleDelete = _id => {
//         fetch(`http://localhost:5000/add/${_id}`, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.deletedCount > 0) {
//                 navigate('/all-movies');
//             }
//         });
//     };

//     const addFavorite = id => {
//         fetch(`http://localhost:5000/favorites`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(movieData)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if (data.insertedId) {
//                 navigate('/add-favorites');
//             }
//         });
//     };

//     return (
//         <div className="w-11/12 mx-auto my-10">
//             <h2 className="text-4xl text-center my-4">Movie Details</h2>
//             <div className="flex flex-col lg:flex-row items-center justify-center bg-base-200 shadow-md p-4">
//                 <img className="w-full lg:w-1/2 lg:h-[600px] object-cover mb-4 lg:mb-0" src={movieData.poster} alt={movieData.title} />
//                 <div className="lg:ml-8 p-4 text-center lg:text-left">
//                     <h3 className="text-2xl font-semibold mb-2">{movieData.title}</h3>
//                     <p className="text-sm text-gray-600 mb-2">Genre: {movieData.genre}</p>
//                     <p className="text-sm text-gray-600 mb-2">Duration: {movieData.duration} minutes</p>
//                     <p className="text-sm text-gray-600 mb-2">Release Year: {movieData.releaseYear}</p>
//                     <div className="text-sm text-gray-600 mb-2">
//                         Rating: <Rating readonly ratingValue={movieData.rating * 10} size={20} />
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">Details: {movieData.summary}</p>
//                     <div className="space-x-3 mb-4">
//                         <button onClick={() => handleDelete(movieData._id)} className="btn btn-error">Delete</button>
//                         <button onClick={() => addFavorite(movieData._id)} className="btn btn-success">Add to Favorite</button>
//                         <Link to={`update-movies/${movieData._id}`} className="btn btn-warning ">Update Movies</Link>
//                     </div>
//                     <button onClick={() => navigate('/all-movies')} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//                         See All Movies
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MovieDetail;

import { useNavigate, useLoaderData, Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../layouts/AuthProvider';

const MovieDetail = () => {

    const {user}=useContext(AuthContext)
    const movieDataFromLoader = useLoaderData();
    const [movieData, setMovieData] = useState(movieDataFromLoader);
    
    const navigate = useNavigate();

    // Update movie state if movieData is updated from the loader or other actions
    useEffect(() => {
        setMovieData(movieDataFromLoader);
    }, [movieDataFromLoader]);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/add/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    navigate('/all-movies');
                }
            });
    };

    const addFavorite = () => {

        const poster = movieData.poster ;
        const title =movieData.title ;
        const genre =movieData.genre;
        const duration =movieData.duration;
        const release = movieData.release;
        const summary = movieData.summary;
        const rating = movieData.rating;
        const email = user.email
        
        const movieInfo = { poster, title, genre, duration, release, summary, email,rating};


        fetch(`http://localhost:5000/favorites`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(movieInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    navigate('/favorites');
                }
            });
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-4xl text-center my-4">Movie Details</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-base-200 shadow-md p-4">
                <img
                    className="w-full lg:w-1/2 lg:h-[600px] object-cover mb-4 lg:mb-0"
                    src={movieData.poster}
                    alt={movieData.title}
                />
                <div className="lg:ml-8 p-4 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold mb-2">{movieData.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Genre: {movieData.genre}</p>
                    <p className="text-sm text-gray-600 mb-2">Duration: {movieData.duration} minutes</p>
                    <p className="text-sm text-gray-600 mb-2">Release Year: {movieData.releaseYear}</p>
                    <div className="text-sm text-gray-600 mb-2">
                        Rating: <Rating readonly ratingValue={movieData.rating * 10} size={20} />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Details: {movieData.summary}</p>
                    <div className="space-x-3 mb-4">
                        <button onClick={() => handleDelete(movieData._id)} className="btn btn-error">Delete</button>
                        {/* <Link to={'/add-favorites'} className="btn btn-success">Add to Favorite</Link> */}
                      <Link to='/favorites'>    <button onClick={addFavorite}  className="btn btn-success">Add to Favorite</button></Link>
                        <Link to={`/update-movies/${movieData._id}`} className="btn btn-warning ">Update Movies</Link>
                    </div>
                    <button onClick={() => navigate('/all-movies')} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        See All Movies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
