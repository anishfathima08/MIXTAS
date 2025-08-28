import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { myContext } from '../../Context/MyContextProvider';

const ProductBody = ({selectedProduct }) => {

    const  { navigate, cartNotification, handleAddToCart, cart, wishlist, handleWishlistToggle } = useContext(myContext)

    return (
        <>
            <Container>

                {cartNotification && (
                    <div className="my-2 w-100 bg-success text-white p-3 d-lg-flex justify-content-between align-items-center" style={{ zIndex: 1055 }}>
                        <span><i className="bi bi-cart-check fs-4"></i> {cartNotification}</span>
                        <br /><br />
                        <span className='border-bottom' role='button'  onClick={() => { 
                            navigate('/cart')
                        }}>View Cart</span>
                    </div>
                )}

                <div className='py-4' role='button'>
                    <span onClick={() => navigate('/')} className='fw-medium'>Home / </span>
                    <span onClick={() => navigate('/shop')} className='fw-medium'>Shop / </span>
                    <span className='text-secondary text-capitalize'>{selectedProduct?.desc}</span> 
                </div>

                <Row>

                    <div className="col-lg-6">
                        <img src={selectedProduct?.img} alt="" className='w-100' />

                    </div>

                    <div className="col-lg-6">

                        <p className='display-6 fw-medium text-capitalize'>{selectedProduct?.desc}</p>
                        <h1 className='text-secondary my-4'>${selectedProduct?.price}</h1>
                        <hr className='text-secondary my-4'/>
                        <p className='text-secondary pb-2'>A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>

                        <div>
                            {
                                cart.some(item => item.id === selectedProduct.id )
                                ? <button className="btn btn-danger px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(selectedProduct)}>Remove From Cart</button>
                                : <button className="btn btn-dark bg-black px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
                            }
                        </div>

                        <div className='d-flex my-3'>
                            <div className="d-flex" role="button">
                                <div className="d-flex align-items-center" role="button" onClick={() => handleWishlistToggle(selectedProduct)}>
                                    <i className={`bi fs-5 ${wishlist.some((item) => item.id === selectedProduct.id) ? "bi-heart-fill text-danger" : "bi-heart text-black"}`}></i>
                                    <p className="mx-2 mb-0">{wishlist.some((item) => item.id === selectedProduct.id) ? "Remove from wishlist" : "Add to wishlist"}</p>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex gap-5 text-secondary pt-1 px-4'>
                            <div>
                                <p>Categories</p>
                                <p>Tags</p>
                            </div>
                            <div>
                                <p>Hoodies,  Men</p>
                                <p>Clothing, etc, fashion, m12, men, products</p>
                            </div>
                        </div>

                        <div className='py-lg-4 pb-md-4' role='button'>
                            <div className='d-lg-inline d-md-inline'>
                                <i className='pr-2 bi bi-facebook'></i>
                                <span>Facebook</span>

                                <i className='pr-2 pl-4 bi bi-twitter-x'></i>
                                <span>Twitter</span>
                            </div>
                            <div className='d-lg-inline d-md-inline mt-3'>
                                <i className='pr-2 pl-lg-4 pl-md-4 bi bi-pinterest'></i>
                                <span>Pinterest</span>

                                <i className='pr-2 pl-4 bi bi-whatsapp'></i>
                                <span>Whatsapp</span>
                            </div>
                        </div>

                    </div>
                </Row>

            </Container>
        
        </>
    )
    
}

export default ProductBody