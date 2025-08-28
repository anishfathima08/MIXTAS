import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'

const ContactPageBody = () => {

    const { navigate } = useContext(myContext)

    return (
        <>
            <Container>

                <div className="contact-page">

                    <div className="text-center my-lg-5 my-md-4 py-4">
                        <h1 className="display-3 text-black"><b>Contact Us</b></h1>
                        <span onClick={() => navigate('/')} role="button" className='fw-medium'>Home</span>
                        <span className="text-secondary" role="button"> / Contact Us</span>
                    </div>

                    <Row className='py-5 text-center'>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className='mb-5'>
                                <i className='bg-black text-white rounded-circle px-4 py-3 fs-3 bi bi-geo-alt'></i>
                                <div className='mt-4'>
                                    <p className='text-black fw-medium fs-4 m-0'>Store Address</p>
                                    <p className='text-secondary m-0'>PO Box 16122 Collins Street West</p>
                                    <p className='text-secondary m-0'>Victoria 8007 Australia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className='mb-5'>
                                <i className='bg-black text-white rounded-circle px-4 py-3 fs-3 bi bi-telephone'></i>
                                <div className='mt-4'>
                                    <p className='text-black fw-medium fs-4 m-0'>Call Info</p>
                                    <p className='text-secondary m-0'>Open a chat or give us call at</p>
                                    <p className='text-secondary m-0'>+91 9876543210</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className='mb-5'>
                                <i className='bg-black text-white rounded-circle px-4 py-3 fs-3 bi bi-envelope'></i>
                                <div className='mt-4'>
                                    <p className='text-black fw-medium fs-4 m-0'>Email Support</p>
                                    <p className='text-secondary m-0'>sent mail to</p>
                                    <p className='text-black m-0'>support@mixtas.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className='mb-5'>
                                <i className='bg-black text-white rounded-circle px-4 py-3 fs-3 bi bi-chat-right'></i>
                                <div className='mt-4'>
                                    <p className='text-black fw-medium fs-4 m-0'>Live Support</p>
                                    <p className='text-secondary m-0'>Live chat service</p>
                                    <p className='text-black m-0'>https://www.livechat.com</p>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Container>

                        <Row className="mb-5">

                            <p className='display-5 text-black'><b>Get In Touch</b></p>

                            <div className="col-lg-6 col-md-6 col-12">
                                <input type="text" placeholder='Your Name' className='w-100 border-0 mt-4'/>
                                <hr />

                                <input type="mail" placeholder='Your Email' className='w-100 border-0 mt-4'/>
                                <hr />

                                <input type="text" placeholder='Subject' className='w-100 border-0 mt-4'/>
                                <hr />

                                <textarea name="" id="" className='mt-4 pb-5 w-100 border-bottom border-top-0 border-left-0 border-right-0' placeholder='Your Message (Optional)'></textarea>

                                <button className='btn btn-dark bg-black rounded-0 px-4 py-2 my-4'>Send Message</button>
                            </div>

                            <div className='col-lg-6 col-md-6 col-12'>
                                <iframe className='w-100 mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.86763387846!2d-102.23172336816789!3d17.96864265373551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84315cf4cfe1f573%3A0x4492898ce6d779de!2sMixtas!5e0!3m2!1sen!2sin!4v1733587478131!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </Row>

                    </Container>

                </div>

            </Container>
        </>
    )
}

export default ContactPageBody