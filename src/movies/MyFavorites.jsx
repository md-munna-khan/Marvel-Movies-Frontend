

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../layouts/AuthProvider";
// import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const MyFavorites = () => {
    // const data = useLoaderData()
    // const {id} = useParams()
    const {user}=useContext(AuthContext)
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/favorites/${user.email}`)
            .then(res => res.json())
            .then(data => setFavorites(data))
            .catch(error => console.error("Error fetching favorite movies:", error));
    }, []);



    const handleDeleteFavorite = async (_id) => {

        try {
            const response = await fetch(`http://localhost:5000/favorites/${_id}`, { method: "DELETE" });
            const data = await response.json();
            if (data.deletedCount > 0) {
                setFavorites(favorites.filter(movie => movie._id !== _id));
            }
        } catch (error) {
            console.error("Error deleting favorite movie:", error);
        }
    };

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-4xl text-center my-4">My Favorite Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map(movie => (
                    <div key={movie._id} className="bg-base-200 shadow-md p-4">
                        <img className="w-full h-[300px] object-cover mb-4" src={movie.poster} alt={movie.title} />
                        <h3 className="text-2xl font-semibold mb-2">{movie.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Genre: {movie.genre}</p>
                        <p className="text-sm text-gray-600 mb-2">Duration: {movie.duration} minutes</p>
                        <p className="text-sm text-gray-600 mb-2">Release Year: {movie.releaseYear}</p>
                        <p className="text-sm text-gray-600 mb-2">Rating: {movie.rating}</p>
                        <button onClick={() => handleDeleteFavorite(movie._id)} className="btn btn-error mt-2">Delete Favorite</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyFavorites;
