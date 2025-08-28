import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'

const OrderTrackingBody = () => {

    const { navigate } = useContext(myContext)

    return (
        <>
            <Container fluid>
                <Row>
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className='text-center py-lg-5 my-lg-5 py-5'>
                            <p className='display-3 text-black'> <b>Order Tracking</b> </p> 
                            <span onClick={() => navigate('/')} className='fw-medium' role='button'>Home</span>  
                            <span className='text-secondary' role='button'> / Order Tracking</span>
                        </div>
                        <div>
                            <p className='text-secondary'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                            <label htmlFor="" >Order ID</label><br />
                            <input className='w-100 py-2 px-3' type="text" placeholder='Found in your order confirmation email.'/>

                            <label htmlFor="" className='mt-4'>Billing email</label><br />
                            <input className='w-100 py-2 px-3' type="text" placeholder='Email you used during checkout.'/>

                            <button className='btn btn-dark bg-black px-4 mt-4 mb-5 rounded-1'>Track</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </Row>
            </Container>
        </>
    )
}

export default OrderTrackingBody