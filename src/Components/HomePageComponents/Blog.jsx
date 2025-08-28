import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { blog_data } from '../../assets/assets';

const Blog = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='py-5 bg-secondary bg-opacity-10'>
        <Container>
          <div className='text-center pb-5'>
            <h6 className='text-secondary mt-3'>LATEST POSTS</h6>
            <p className='display-5 text-black'><b>Blog & Insights</b></p>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            speed={1000}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 3, 
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              }
            }}
          >
            {blog_data.map((slide, index) => {
              return(
                <SwiperSlide key={index} onClick={() => navigate('/blog/' + slide.id)}role='button'>
                  <div className="blog-img">
                    <img src={slide.img} alt="" width='430'/>
                  </div>
                  <p className="my-2 text-secondary">By Admin {slide.date}</p>
                  <h4 className="mb-5">{slide.desc}</h4>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default Blog