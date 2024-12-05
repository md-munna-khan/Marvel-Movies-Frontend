
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import movie1 from '../assets/movie1.png';
import movie2 from '../assets/movie2.png';
import movie3 from '../assets/movie3.png';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const sortedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className='w-11/12 mx-auto my-10'>
      <section className="banner mx-auto">
        <div className="flex items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="relative">
                <img src={movie1} alt="Movie 1" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Lorem ipsum</h2>
                    <p className="mt-4 text-lg md:text-xl">A brief description of Movie 1. This could include a tagline or a short synopsis.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={movie2} alt="Movie 2" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Spider Man</h2>
                    <p className="mt-4 text-lg md:text-xl">A brief description of Movie 2. This could include a tagline or a short synopsis.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={movie3} alt="Movie 3" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Amazon jungle</h2>
                    <p className="mt-4 text-lg md:text-xl">A brief description of Movie 3. This could include a tagline or a short synopsis.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-4xl text-center my-4">Featured Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {sortedMovies.map(movie => (
            <div className="card" key={movie._id}>
              <div className="bg-base-200 items-center justify-center shadow-md">
                <img className="w-[400px] lg:h-[400px] mx-auto object-cover p-4" src={movie.poster} alt={movie.title} />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
                  <p className="text-sm text-gray-600">Duration: {movie.duration}</p>
                  <p className="text-sm text-gray-600">Release Year: {movie.releaseYear}</p>
                  <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
                  <Link to={`details/${movie._id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
     <div className='mx-auto text-center'>
     <Link to="/all-movies" className="mt-4  inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        See All Movies
                    </Link>
     </div>
    </div>
  );
};

export default Home;
