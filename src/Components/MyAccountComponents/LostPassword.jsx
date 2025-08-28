import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'

const LostPassword = () => {

  const { navigate } = useContext(myContext)

  return (
    <>
      <Header />

      <div className='container pt-5'>
        <span onClick={() => navigate('/')} role='button' className='fw-medium'>Home</span>  
        <span onClick={() => navigate('/my-account')} className='fw-medium' role='button'> <i className='bi bi-chevron-right'></i>  My Account</span> <i className='bi bi-chevron-right'></i>
        <span className='text-secondary' role='button'> Lost Password</span>
        <p className='display-5 py-2 text-black'><b>My Account</b></p>
      </div>

      <Container>
        <Row>
          <div className="col-lg-4 col-md-2"></div>
          <div className="col-lg-4 col-12 mb-5">
            <p className='text-secondary my-4'>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <p className='m-0'>Username or Email</p>
            <input type="text" className='w-100 py-2'/>
            <button className='btn btn-dark bg-black rounded-1 px-4 py-2 my-4'>Reset Password</button>
          </div>
          <div className="col-lg-4"></div>
        </Row>
      </Container>
      
      <Footer />
    </>
  )
}

export default LostPassword