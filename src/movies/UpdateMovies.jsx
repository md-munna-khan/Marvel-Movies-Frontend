

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovies = () => {
    const { id } = useParams();
    const [rating, setRating] = useState(0); // Store the rating as a number

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
        fetch(`http://localhost:5000/add/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Movie updated successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
            });

        e.target.reset();
        setRating(0);
    };

    const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance'];
    const years = [2024, 2023, 2022, 2021, 2020];

    return (
        <div className="mx-auto my-10 p-10 bg-base-200">
            <h2 className='text-center text-3xl lg:text-5xl'>Update Movies Form</h2>
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
                    <input 
                        type="number" 
                        name="rating" 
                        className="input input-bordered" 
                        min="0" 
                        max="10" 
                        step="0.1"
                        value={rating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        required 
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea placeholder="Summary" name="summary" className="input input-bordered" required />
                </div>
                <button className="btn my-4 btn-warning w-full" type="submit">Update Movie</button>
            </form>
        </div>
    );
};

export default UpdateMovies;

