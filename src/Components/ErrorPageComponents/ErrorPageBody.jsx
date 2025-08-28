import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider'

const ErrorPageBody = () => {

    const { navigate } = useContext(myContext)

    return (
        <>
            <Container>
                <Row className='py-5 my-4'>
                    <div className="col-lg-4 col-md-2"></div>
                    <div className="col-lg-4 col-md-8 text-black text-center">
                        <p className='display-4 fw-normal' style={{letterSpacing: '5px'}}>ERROR 404</p>
                        <p className='fs-4 fw-normal'>OPPS!</p>
                        <p>The page you’re looking for isn’t available. Try to search again or use the go back button below.</p>
                        <button className='btn btn-dark bg-black rounded-1 my-4 px-4 py-2' onClick={() => navigate('/')}>Back To Home</button>
                    </div>
                    <div className="col-lg-4 col-md-2"></div>
                </Row>
            </Container>
        </>
    )
    
}

export default ErrorPageBody