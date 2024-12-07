
// import { useState } from 'react';
// // import { useLoaderData } from 'react-router-dom';
// import { Rating } from 'react-simple-star-rating';
// import { toast, Toaster } from 'react-hot-toast';

// const AddMovies = () => {
//     // const data = useLoaderData();
//     const [rating, setRating] = useState(0);

//     const handleRating = (rate) => {
//         setRating(rate);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const poster = e.target.poster.value;
//         const title = e.target.title.value;
//         const genre = e.target.genre.value;
//         const duration = e.target.duration.value;
//         const release = e.target.release.value;
//         const summary = e.target.summary.value;
// const movieInfo={poster,title,genre,duration,release,summary}

// fetch('http://localhost:5000/add',{
//     method:'POST',
//     headers:{
//         'content-type':"application/json"
//     },
//     body:JSON.stringify(movieInfo)
// })
// .then(res=>res.json())
// .then(data=> console.log(data))

//         // Validation checks
//         if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(poster)) {
//             toast.error('Poster must be a valid URL.');
//             return;
//         }
//         if (title.length < 2) {
//             toast.error('Title must have at least 2 characters.');
//             return;
//         }
//         if (!genre) {
//             toast.error('Genre must be selected.');
//             return;
//         }
//         if (isNaN(duration) || duration <= 60) {
//             toast.error('Duration must be a number greater than 60.');
//             return;
//         }
//         if (!release) {
//             toast.error('Release Year must be selected.');
//             return;
//         }
//         if (rating === 0) {
//             toast.error('Rating must be selected.');
//             return;
//         }
//         if (summary.length < 10) {
//             toast.error('Summary must have at least 10 characters.');
//             return;
//         }

//         console.log(poster, title, genre, duration, release, rating, summary);
//         toast.success('Movie added successfully!');

//         // Reset form
//         e.target.reset();
//         setRating(0);
//     };

//     const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance']; // Add more genres as needed
//     const years = [2024, 2023, 2022, 2021, 2020]; // Add more years as needed

//     return (
//         <div className="mx-auto my-10 p-10 bg-base-200">
//             <h2 className='text-center text-5xl'>Add Movies Form</h2>
//             <Toaster />
//             <form onSubmit={handleSubmit}>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Movie Poster</span>
//                     </label>
//                     <input type="text" placeholder="Movie poster" name="poster" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Movie Title</span>
//                     </label>
//                     <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Movie Genre</span>
//                     </label>
//                     <select name="genre" className="input input-bordered" required>
//                         <option value="">Select Genre</option>
//                         {genres.map((genre, index) => (
//                             <option key={index} value={genre}>{genre}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Movie Duration (minutes)</span>
//                     </label>
//                     <input type="number" placeholder="Duration" name="duration" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Release Year</span>
//                     </label>
//                     <select name="release" className="input input-bordered" required>
//                         <option value="">Select Year</option>
//                         {years.map((year, index) => (
//                             <option key={index} value={year}>{year}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Rating</span>
//                     </label>
//                     <Rating onClick={handleRating} ratingValue={rating} required />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Summary</span>
//                     </label>
//                     <textarea type="text" placeholder="Summary" name="summary" className="input input-bordered" required />
//                 </div>
//                 <button className="btn btn-warning w-full" type="submit">Add Movie</button>
//             </form>
//         </div>
//     );
// };

// export default AddMovies;




import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { toast, Toaster } from 'react-hot-toast';

const AddMovies = () => {
    const [rating, setRating] = useState(0); // Store the rating as a number

    // Handle star rating selection (rating will be from 0 to 10)
    const handleRating = (rate) => {
        setRating(rate / 10); // react-simple-star-rating returns a 0-100 scale, we scale it to 0-10
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const poster = e.target.poster.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const release = e.target.release.value;
        const summary = e.target.summary.value;
        const movieInfo = { poster, title, genre, duration, release, summary, rating };

        // Validation checks
        if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(poster)) {
            toast.error('Poster must be a valid URL.');
            return;
        }
        if (title.length < 2) {
            toast.error('Title must have at least 2 characters.');
            return;
        }
        if (!genre) {
            toast.error('Genre must be selected.');
            return;
        }
        if (isNaN(duration) || duration <= 60) {
            toast.error('Duration must be a number greater than 60.');
            return;
        }
        if (!release) {
            toast.error('Release Year must be selected.');
            return;
        }
        if (rating === 0) {
            toast.error('Rating must be selected.');
            return;
        }
        if (summary.length < 10) {
            toast.error('Summary must have at least 10 characters.');
            return;
        }

        // Submit movie data
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieInfo),
        })
            .then(res => res.json())
            .then(data => console.log(data));

        toast.success('Movie added successfully!');
        e.target.reset();
        setRating(0);
    };

    const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance'];
    const years = [2024, 2023, 2022, 2021, 2020];

    return (
        <div className="mx-auto my-10 p-10 bg-base-200">
            <h2 className='text-center text-5xl'>Add Movies Form</h2>
            <Toaster />
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Poster</span>
                    </label>
                    <input type="text" placeholder="Movie poster" name="poster" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Title</span>
                    </label>
                    <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Genre</span>
                    </label>
                    <select name="genre" className="input input-bordered" required>
                        <option value="">Select Genre</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Duration (minutes)</span>
                    </label>
                    <input type="number" placeholder="Duration" name="duration" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Release Year</span>
                    </label>
                    <select name="release" className="input input-bordered" required>
                        <option value="">Select Year</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="flex items-center space-x-2">
                        <Rating 
                            onClick={handleRating} 
                            ratingValue={rating * 10} // Multiply by 10 to get value between 0 and 100
                            size={25} 
                            allowHalfIcon
                        />
                        <span className="text-lg font-semibold">{rating > 0 ? rating.toFixed(1) : '0'}</span>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea type="text" placeholder="Summary" name="summary" className="input input-bordered" required />
                </div>
                <button className="btn btn-warning w-full" type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovies;
