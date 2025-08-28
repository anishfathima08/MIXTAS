import React from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { carousel_data } from '../../assets/assets';

const Carousel = () => {

  const navigate = useNavigate()

  return (
    <>

      {/* Large Screen Carousel */}

      <Container fluid className='p-0 m-0 d-none d-lg-block d-md-block' style={{zIndex : '-1'}}>
        <div className='carousel mb-5'>
          <Swiper
          modules={[ Navigation, Autoplay ]}
          navigation
          loop ={true}
          speed={1000}
          autoplay={{
            delay: 2000
          }}
          style={{ position: 'relative', zIndex: 10 }}
          >
            {carousel_data.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='carousel-img d-flex align-items-center justify-content-start w-100' style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh'}}
                >
                  <div className='text-white position-relative pl-lg-5 ml-lg-5 pl-md-5' style={{ zIndex:2 }}>

                    <h4 className="my-3 text-black">NEW ARRIVALS</h4>

                    <h1 className="display-1 fw-bold text-black">
                      Stylish <br /> Comfort For <br /> Fall Nights
                    </h1>

                    <button className="btn btn-dark bg-black px-5 py-3 my-3" onClick={() => navigate('/shop')}>Shop Now</button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>           
        </div>
      </Container>

      {/* Small Screen Carousel */}

      <Container fluid className='p-0 m-0 d-block d-lg-none d-md-none' style={{zIndex : '-1'}}>
        <div className='carousel mb-5'>
          <Swiper
          modules={[ Pagination, Autoplay ]}
          pagination={{ clickable: true }}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 8000
          }}
          style={{ position: 'relative', zIndex: 10 }}
          >
            {carousel_data.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='carousel-img d-flex align-items-center justify-content-start w-100' style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '40vh'}}
                >
                  <div className='text-white position-relative p-3' style={{ zIndex:2 }}>
                    <h6 className="text-black">NEW ARRIVALS</h6>
                    <h1 className="display-5 fw-bold text-black">
                      Stylish Comfort <br /> For Fall Nights
                    </h1>
                    <button className="btn btn-sm btn-dark bg-black rounded-1" onClick={() => navigate('/shop')}>Shop Now</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>           
        </div>
      </Container>
      
    </>
  )}

export default Carousel