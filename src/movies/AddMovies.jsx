



import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import DynamicTitle from '../components/DynamicTitle';
import { AuthContext } from '../layouts/AuthProvider';
import ReactStars from 'react-stars';

const AddMovies = () => {
    const { isdark } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0);

    const onSubmit = (data) => {
        const movieInfo = { ...data, rating };

        fetch('https://movies-serversite.vercel.app/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });

        setRating(0);
    };

    const genres = ['Comedy', 'Drama', 'Horror', 'Action', 'Romance'];
    const years = [2024, 2023, 2022, 2021, 2020];

    return (
        <div className="mx-auto my-10 p-4  bg-base-200">
            <DynamicTitle title="Add Movies" />
            <h2 className={`text-center text-2xl lg:text-5xl ${isdark ? 'text-black' : ''}`}>Add Movies Form</h2>
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Poster</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Movie poster"
                        {...register('poster', {
                            required: 'Poster is required',
                            pattern: {
                                value: /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/,
                                message: 'Poster must be a valid URL'
                            }
                        })}
                        className="input input-bordered"
                    />
                    {errors.poster && <span className="text-red-500">{errors.poster.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', {
                            required: 'Title is required',
                            minLength: {
                                value: 2,
                                message: 'Title must have at least 2 characters'
                            }
                        })}
                        className="input input-bordered"
                    />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Genre</span>
                    </label>
                    <select
                        {...register('genre', { required: 'Genre is required' })}
                        className="input input-bordered"
                    >
                        <option value="">Select Genre</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                    {errors.genre && <span className="text-red-500">{errors.genre.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Movie Duration (minutes)</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Duration"
                        {...register('duration', {
                            required: 'Duration is required',
                            validate: value => value > 60 || 'Duration must be greater than 60 minutes'
                        })}
                        className="input input-bordered"
                    />
                    {errors.duration && <span className="text-red-500">{errors.duration.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Release Year</span>
                    </label>
                    <select
                        {...register('release', { required: 'Release Year is required' })}
                        className="input input-bordered"
                    >
                        <option value="">Select Year</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                    {errors.release && <span className="text-red-500">{errors.release.message}</span>}
                </div>

                {/* Rating Star */}
                <div className="form-control col-span-1">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="flex items-center">
                        <ReactStars
                            count={5}
                            value={rating}
                            onChange={setRating}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <span className="ml-2 text-sm">{rating}</span>
                    </div>
                    {errors.rating && <span className="text-red-500">{errors.rating.message}</span>}
                </div>

                <div className="form-control col-span-1">
                    <label className="label">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea
                        placeholder="Summary"
                        {...register('summary', {
                            required: 'Summary is required',
                            minLength: {
                                value: 10,
                                message: 'Summary must have at least 10 characters'
                            }
                        })}
                        className="input input-bordered"
                    />
                    {errors.summary && <span className="text-red-500">{errors.summary.message}</span>}
                </div>
                
              
               <button className="btn my-4 btn-warning w-full" type="submit">Add Movie</button>
              
            </form>
        </div>
    );
};

export default AddMovies;
