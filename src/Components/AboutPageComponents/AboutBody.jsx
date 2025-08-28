import React from 'react'
import { about_us_data, assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const AboutBody = () => {
  return (
    <>
      <div className='bg-black text-light text-center'>
        <Container className='p-lg-5 p-md-5 py-5'>
          <h1 className='m-lg-5 display-3 fw-medium'>Discover the Art of Dressing <i>where Every Stitch Tells a Story </i>and Every Outfit Paints a Picture</h1>
        </Container>
      </div>

      <Container className='my-5'>

        <Tabs defaultActiveKey="about" id="fill-tab-example" justify  className='py-2'>

          <Tab eventKey="about" title="About Mixtas">

            <Row className="align-items-center py-lg-4 my-5">
              <div className="col-12 col-lg-6">
                <img src={assets.about_us_img} alt="" className='w-100'/>
              </div>
              <div className="col-12 col-lg-5 ml-lg-5">
                <p className='text-dark display-5 fw-medium my-3'>Unveiling Your Unique Fashion Journey</p>
                <p className='text-secondary fs-5'>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing - it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>
              </div>
            </Row>

            <div className='my-lg-5 pb-4'>
              <p className='display-4 text-center fw-normal text-black py-4'>Meet The Our Team</p>

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
                    slidesPerView: 4, 
                    
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  320: {
                    slidesPerView: 1,
                  }
                }}
              >
                  {about_us_data.map((slide) => (
                  <SwiperSlide key={slide.img} role='button'>
                    <img src={slide.img} alt="" className='w-100' />
                    <div className='text-center my-3'>
                      <p className='fw-medium m-0 fs-5'>{slide.desc}</p>
                      <p className='text-secondary m-0'>{slide.role}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
          </Tab>

          <Tab eventKey="story" title="Our Story">

            <div className="text-secondary my-5">

              <p>In the heart of Mixtas, a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to Mixtas, where every stitch tells a story.</p>

              <p className='my-4'>Founded [Year], Mixtas emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.</p>

              <p>What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at Mixtas is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics.</p>

              <p className='my-4'>At Mixtas, we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.</p>

              <p>Beyond the racks of clothing, Mixtas is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.</p>

              <p className='my-4'>As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at Mixtas.”</p>

              <p>Feel free to customize the details to align with your store’s unique history and vision.</p>

            </div>

          </Tab>

          <Tab eventKey="mission" title="Our Mission">

            <div className='text-secondary my-5'>
        
              <p>At Mixtas, we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.</p>

              <ol>
                <li><span className='fw-medium'>Curate Exceptional Style: </span> We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.</li>
                <li className='my-3'><span className='fw-medium'>Quality Craftsmanship: </span> We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.</li>
                <li><span className='fw-medium'>Celebrate Diversity: </span> Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.</li>
                <li className='my-3'><span className='fw-medium'>Customer Empowerment: </span> We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.</li>
                <li><span className='fw-medium'>Sustainable Choices: </span> As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.</li>
                <li className='my-3'><span className='fw-medium'>Community Engagement: </span> Mixtas is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.</li>
                <li><span className='fw-medium'>Innovation and Adaptability: </span> In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.</li>
              </ol>

              <p className='my-4'>At Mixtas, our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”</p>

              <p>Feel free to modify the mission statement to align with the specific values and goals of your clothing store.</p>

            </div>

          </Tab>

          <Tab eventKey="connect" title="Connect with us">

            <div className='about-connect my-5'>
              <p className='display-6 fw-bold text-black'>Affilate Program</p>
              <ul className='text-secondary'>
                <li>Build your own online sporting goods store!</li>
                <li className='my-2'>If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.</li>
                <li><span className='text-black'>Click here to join</span> now and earn commissions of up to 6%</li>
              </ul>
            </div>

          </Tab>

        </Tabs>

      </Container>
    </>
  )
}

export default AboutBody