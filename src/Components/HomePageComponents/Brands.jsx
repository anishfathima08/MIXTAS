import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { brand_logos } from '../../assets/assets';

const Brands = () => {
  return (
    <>
        <div className='text-center py-4'>
            <h6 className='text-secondary'>TOP BRANDS</h6>
            <p className='display-5 text-black'><b>Popular Brands</b></p>
        </div>
        <Container className='pt-3 pb-5'>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay = {{
                    delay : 3000
                }}
                loop={true}
                spaceBetween={10}
                breakpoints={{
                    1200: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 4, 
                    },
                    320: {
                        slidesPerView: 3,
                    }
                }}
            >
                {brand_logos.map((slide) => (
                    <SwiperSlide key={slide.image} role='button'>
                        <img src={slide.image} alt="" className='w-75' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </>
  )
}

export default Brands