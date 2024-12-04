
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import movie1 from '../assets/movie1.png'
import movie2 from '../assets/movie2.png'
import movie3 from '../assets/movie3.png'
import { useEffect, useState } from 'react';





const Home = () => {

const [movies,setMovies]= useState([])

useEffect(()=>{
    fetch('movies.json')
    .then(res=>res.json())
    .then(data=> setMovies(data))
  
})
// "id": 6,
// "poster": "https://i.ibb.co.com/59sjmz7/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg",
// "title": "Pulp Fiction",
// "genre": "Crime, Drama",
// "duration": "154 min",
// "releaseYear": "1994",
// "rating": 8.9,
// "detailsUrl": "/movies/pulp-fiction"

    return (
        <div className='w-11/12 mx-auto my-10'>
           <section className="banner mx-auto">
        <div className="flex items-center justify-center">

          {/* Autoplay */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
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
<section className='py-10'>
    <h2 className='text-4xl text-center'>Featured Movies</h2>
   {
movies.map(movie=> <div className='' key={movies.id}>
<div className='grid grid-cols-1 md:grid-cols-3'>
<div><img className='w-[200px] h-full' src={movie.poster} alt="" /></div>
<div>
<p>Title:{movie.title}</p>
<p>Genre:{movie.genre}</p>
<p>Duration:{movie.duration}</p>
<p>ReleaseYear:{movie.releaseYear}</p>
<p>Rating:{movie.rating}</p>
</div>


</div>

</div> )
   }
</section>
        </div>
    );
};

export default Home;