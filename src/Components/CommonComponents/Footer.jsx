import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'

const Footer = () => {

  const { navigate } = useContext(myContext)

  return (
    <>
      <div className='footer text-light p-3 bg-black' role='button'>
        <Container>
          <Row>
            <div className="col-lg-3 col-md-6 mt-3 mb-4">
              <h1 className="card-title" onClick={() => {navigate('/')}}>Mixtas</h1>
              <p className='py-2'>Whether you're a trendsetter, a <br/> minimalist, or an adventurer at <br/> heart, Mixtas has something for <br/> everyone. Our diverse range of <br/> styles caters to various personas. </p>

              <div className="footer-icons">
                <i className="mr-2 border rounded-circle bi bi-facebook"></i>
                <i className="mr-2 border rounded-circle bi bi-twitter-x"></i>
                <i className="mr-2 border rounded-circle bi bi-instagram"></i>
                <i className="mr-2 border rounded-circle bi bi-pinterest"></i>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mt-3">
              <h5 className='mb-3'>About Us</h5>
              <p>Our Story</p>
              <p>Mission & Values</p>
              <p>Meet the Team</p>
              <p>Sustainable Efforts</p>
              <p>Brand Partnerships</p>
              <p>Influencer Collaborations</p>
            </div>

            <div className="col-lg-2 col-md-6 mt-3">     
              <h5 className='mb-3'>Accessibility</h5>       
              <p>Accessibility Statement</p>
              <p>Site Map</p>
              <p>Web Accessibility Options</p>
              <p>ADA Compliance</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>

            <div className="col-lg-2 col-md-6 mt-3">
              <h5 className='mb-3'>Join Our Communinty</h5>
              <p>VIP Membership</p>
              <p>Loyality Program</p>
              <p>Customer Reviews</p>
              <p>Style Forums</p>
              <p>Job Openings</p>
              <p>Culture and Values</p>
            </div>

            <div className="col-lg-3 my-3">
              <h2>Let's get in touch</h2>
              <p>Sign up for our newsletter and <br/> receive 10% off your</p>
              <input className='col-md-12 border-0 rounded py-2 pl-2 pr-5' type="email" placeholder='Enter your email address...' /> 
            </div>
          </Row>
        </Container>

        <hr className='text-light'/>

        <Container>
          <div className="d-lg-flex d-md-flex justify-content-between pt-2">
            <p>&copy; 2024 Mixtas All rights reserved. Desgined by Anish Fathima</p>
            <img src={assets.footer_logos} alt="" height={30} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer