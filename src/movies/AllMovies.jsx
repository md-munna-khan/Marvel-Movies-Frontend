import { useLoaderData } from "react-router-dom";


const AllMovies = () => {
    const data= useLoaderData()
    return (
        <div>
            all movies {data.length}
        </div>
    );
};

export default AllMovies;