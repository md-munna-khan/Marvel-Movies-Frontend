


import { useLoaderData, Link,  useNavigate } from "react-router-dom";

const MovieDetail = () => {
    const movieData = useLoaderData();
   const navigate = useNavigate()
 const handleDelete = _id=>{
    fetch(`http://localhost:5000/add/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount>0){
       navigate('/all-movies')
       }
    })
 }

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-4xl text-center my-4">Movie Details</h2>
            <div className="bg-base-200 items-center justify-center shadow-md p-4">
                <img className="w-[400px] lg:h-[600px] mx-auto object-cover" src={movieData.poster} alt={movieData.title} />
                <div className="p-4 text-center">
                    <h3 className="text-2xl font-semibold">{movieData.title}</h3>
                    <p className="text-sm text-gray-600">Genre: {movieData.genre}</p>
                    <p className="text-sm text-gray-600">Duration: {movieData.duration} minutes</p>
                    <p className="text-sm text-gray-600">Release Year: {movieData.releaseYear}</p>
                    <p className="text-sm text-gray-600">Rating: {movieData.rating}</p>
                    <p className="text-sm text-gray-600">Details: {movieData.summary}</p>
                  <div className="space-x-3 space-y-2">
                  <button onClick={()=>handleDelete(movieData._id)} className="btn btn-error">Delete</button>
                  <button className="btn btn-success">Add to Favorite </button>
                  </div>
                    <Link to="/all-movies" className="mt-8  inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        See All Movies
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default MovieDetail;
