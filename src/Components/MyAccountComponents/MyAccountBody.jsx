import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'

const MyAccountBody = () => {

    const { navigate } = useContext(myContext)

    return (
        <>
            <Container fluid>
                
                <Container>
                    <div className='py-4'>
                        <span onClick={() => navigate('/')} role='button' className='fw-medium'>Home</span>  
                        <span className='text-secondary' role='button'> /  My Account</span>
                        <p className='display-5 py-2 text-black'><b>My Account</b></p>
                    </div>
                    <div className='pb-5'>
                        <Row>
                            <div className="col-lg-5">
                                <p className='display-6 fs-2 text-black'><b>Login</b></p>
                                <input className='w-100 py-2 px-3 mb-3' type="text" placeholder='Username or email address' />
                                <input className='w-100 py-2 px-3 mb-3' type="password" placeholder='Password' />
                                <input type="checkbox" name="" id=""/>
                                <label htmlFor="" className='mx-2'>Remember Me</label>
                                <button className='btn w-100 btn-dark bg-black rounded-1 my-4'>Log In</button>
                                <p onClick={() => navigate('/my-account/lost-password')} role='button'><u>Lost Your Password ?</u></p>
                            </div>

                            <div className="col-2"></div>
                            
                            <div className=" col-lg-5 mt-lg-0 mt-4 ">
                                <p className='display-6 fs-2 text-black'><b>Resgister</b></p>
                                <input className='w-100 py-2 px-3 mb-3' type="text" placeholder='Email address' />
                                <p className='text-secondary'>A password will be sent to your email address.</p>
                                <p className='text-secondary mb-4'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-dark'><u>privacy policy.</u></span></p>
                                <button className='btn btn-dark bg-black rounded-1 px-4'>Register</button>
                            </div>
                        </Row>
                    </div>
                </Container>
                
            </Container>
        </>
    )
}

export default MyAccountBody