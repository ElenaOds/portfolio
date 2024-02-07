import carousel1 from '../assets/projects/marketplace-landing.jpg';
import carousel2 from '../assets/projects/ecosolution.jpg';
import carousel3 from '../assets/projects/flower.jpg';
import carousel4 from '../assets/projects/goose-track.jpg';
import carousel5 from '../assets/projects/icecream.jpg';
import carousel6 from '../assets/projects/movies.jpg';
import carousel7 from '../assets/projects/tweets.jpg';
import carousel8 from '../assets/projects/webstudio.jpg';

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
          
          </Swiper>
  )
}

export default ProjectsSwiper;
