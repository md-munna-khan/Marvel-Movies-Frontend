
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
  const [comingMovies,setComingMovies]=useState([])

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const sortedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 6);


  useEffect(()=>{
    fetch('http://localhost:5000/coming-movies')
    .then(res=>res.json())
    .then(data=>setComingMovies(data))
  },[])

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
                  <div className="text-center text-bg-black px-4">
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
                  <div className="text-center text-bg-black px-4">
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
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 shadow-md ">
    {sortedMovies.map(movie => (
      <div className="relative bg-black text-bg-black shadow-lg rounded-lg overflow-hidden" key={movie._id}>
        <img
          className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
          src={movie.poster}
          alt={movie.title}
        />
        <div className="absolute top-0 left-0 bg-red-500 text-black px-2 py-1 text-xs font-bold">
          Dual Audio ORG
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black text-white bg-opacity-70 ">
          <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
          
          <div className="flex justify-between text-sm text-gray-300 mt-2 ">
            <div>
              <p>Genre: {movie.genre}</p>
              <p>Release Year: {movie.releaseYear}</p>
            </div>
            <div className="text-right ">
              <p>Duration: {movie.duration} mins</p>
              <p className="text-yellow-400">Rating: {movie.rating}</p>
            </div>
          </div>

          {/* <Link
            to={`details/${movie._id}`}
            className="p-2 inline-block bg-blue-500 text-bg-black   rounded hover:bg-blue-700 transition"
          >
            View Details
          </Link> */}

<Link to={`/detail/${movie._id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                                View Details
                            </Link>
        </div>
      </div>
    ))}
  </div>
</section>


     <div className='mx-auto text-center'>
     <Link to="/all-movies" className="mt-4  inline-block bg-blue-500 text-bg-black py-2 px-4 rounded hover:bg-blue-700 transition">
                        See All Movies
                    </Link>
     </div>

     <section className='my-10'>
  <h2 className='text-5xl text-center text-red-600 mb-8'>Coming Soon Movies</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shadow-md p-2  text-white">
    {comingMovies.map(coming => (
      <div className="relative bg-black text-bg-black shadow-lg rounded-lg overflow-hidden" key={coming._id}>
        <img src={coming.Poster} alt={coming.Title} className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" />
        <div className="absolute top-0 left-0 bg-red-500 text-bg-black px-2 py-1 text-xs font-bold">
          Dual Audio ORG
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 ">
          <h3 className="text-lg font-semibold truncate">{coming.Title}</h3>
          <p className="text-sm">{coming.ReleaseYear}</p>
          <div className="flex items-center mt-2">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-bold mr-2">{coming.Rating}</span>
            <span className="text-xs">{coming.ReleaseYear}</span>
          </div>
          <div className='flex justify-between items-center p-2'>
          <p className="mt-2 text-sm">Genre: {coming.Genre}</p>
          <p className="mt-1 text-sm">Duration: {coming.Duration} mins</p>
          </div>
          {/* <p className="mt-2 text-sm">{coming.Summary}</p> */}
        </div>
      </div>
    ))}
  </div>
</section>
<section className="py-10 bg-base-200 text-bg-black p-4 rounded-md">
      <h2 className="text-4xl text-center text-red-500 my-6">Movies Related Questions</h2>

      <div className="collapse collapse-plus text-bg-black">
        <input type="radio" name="my-accordion" id="faq-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the difference between a movie's genre and its rating?
        </div>
        <div className="collapse-content">
          <p>
            A movie's genre refers to its category based on its content, such as action, drama, comedy, thriller, etc.
            The rating, on the other hand, represents how suitable the movie is for different audiences based on content like violence, language, or nudity.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-bg-black">
        <input type="radio" name="my-accordion" id="faq-2" />
        <div className="collapse-title text-xl font-medium">
          How are movie release dates determined?
        </div>
        <div className="collapse-content">
          <p>
            Movie release dates are often decided based on factors like production schedules, marketing strategies, and
            competition with other film releases. Studios may choose to release movies during holidays or specific seasons
            to attract a larger audience.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-2">
        <input type="radio" name="my-accordion" id="faq-3" />
        <div className="collapse-title text-xl font-medium">
          What does Dual Audio mean for a movie?
        </div>
        <div className="collapse-content">
          <p>
            Dual Audio refers to a version of a movie that offers two different audio tracks, typically one in the original
            language and the other dubbed in a secondary language. This allows viewers to choose their preferred language when
            watching the movie.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-bg-black">
        <input type="radio" name="my-accordion" id="faq-4" />
        <div className="collapse-title text-xl font-medium">
          How do movie ratings affect viewing choices?
        </div>
        <div className="collapse-content">
          <p>
            Movie ratings, such as PG, PG-13, R, or NC-17, provide guidance on the suitability of the film for different age
            groups. For example, PG-rated movies are generally suitable for all audiences, while R-rated films may contain
            mature content that is more appropriate for adults or older teens.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-bg-black">
        <input type="radio" name="my-accordion" id="faq-5" />
        <div className="collapse-title text-xl font-medium">
          What should I look for in a movie’s summary?
        </div>
        <div className="collapse-content">
          <p>
            A movie summary typically provides a brief description of the plot, key characters, and setting. It helps you decide
            whether you're interested in the film based on its storyline, theme, or genre. It's a quick way to understand the
            essence of the movie without giving away too many spoilers.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-bg-black">
        <input type="radio" name="my-accordion" id="faq-6" />
        <div className="collapse-title text-xl font-medium">
          Why are some movies longer than others?
        </div>
        <div className="collapse-content">
          <p>
            The length of a movie depends on its story, pacing, and production choices. Movies with complex plots, multiple
            subplots, or detailed character development tend to be longer, while films with a simpler storyline may be shorter.
            Directors and producers decide the runtime based on what best serves the story they want to tell.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
