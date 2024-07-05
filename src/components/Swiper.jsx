import carousel1 from '../assets/projects/marketplace-landing.webp';
import carousel2 from '../assets/projects/ecosolution.webp';
import carousel3 from '../assets/projects/flower.webp';
import carousel4 from '../assets/projects/goose-track.webp';
import carousel5 from '../assets/projects/icecream.webp';
import carousel6 from '../assets/projects/movies.webp';
import carousel7 from '../assets/projects/tweets.webp';
import carousel8 from '../assets/projects/webstudio.webp';
import carousel9 from '../assets/projects/events.webp';
import carousel10 from '../assets/projects/starwars.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectsSwiper = () => {
  return (
   
      <Swiper
          modules={[ Pagination, Navigation, EffectCoverflow]}
          pagination={true}
          navigation={true}
          loop={true}
          grabCursor={true}
          slidesPerView={2}
          effect={'coverflow'}
          centeredSlides={true}
          coverflowEffect={{rotate: 1, stretch: 100, depth: 150, modifier: 3}}
          >
            <SwiperSlide>
              <img src={carousel1} alt='marketplace' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel2} alt='ecosolution' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel3} alt='flower' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel4} alt='goose-track' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel5} alt='icecream' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel6} alt='movies' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel7} alt='tweets' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel8} alt='webstudio' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel9} alt='marketplace' loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel10} alt='marketplace' loading="lazy"/>
            </SwiperSlide>
          
          </Swiper>
  )
}

export default ProjectsSwiper;
