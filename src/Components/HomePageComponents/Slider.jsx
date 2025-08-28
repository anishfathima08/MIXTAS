import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { slider_data } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { myContext } from '../../Context/MyContextProvider'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const Slider = () => {

  const { navigate } = useContext(myContext)

  return (
    <>
      <Container  data-aos="fade-up" data-aos-duration="1000">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          speed={1000}
          spaceBetween={10}
          autoplay={{
            delay: 3000
          }}
          breakpoints={{
            1200: {
              slidesPerView: 5, 
              
            },
            768: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            }
          }}
        >
          {slider_data.map((slide) => (
            <SwiperSlide key={slide.image} role='button'>
              <div className="d-flex flex-column my-1">
                <img src={slide.image} alt="" className='w-100' onClick={() => navigate('/shop')}/>
                <div className="d-flex justify-content-between align-items-center my-3  fs-4">
                  <p className="m-0">{slide.product}</p>
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}
  
export default Slider