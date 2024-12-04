
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Home = () => {
    return (
        <div>
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
              <img src={mountain1} alt="Mountain Trekking" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mountain2} alt="Ocean Dives" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mountain3} alt="Forest Adventures" className="w-full h-64 md:h-96 lg:h-[800px] object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

        </div>
    );
};

export default Home;