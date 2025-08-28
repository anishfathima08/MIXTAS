import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { Container, Row, Modal, Collapse } from 'react-bootstrap'
import { all_products_data } from '../../assets/assets'
import { myContext } from '../../Context/MyContextProvider'

const ShopBody = () => {

    const { navigate, showProductModal, setShowProductModal, handleModalToggle, currentProduct, hoveredIndex, setHoveredIndex, product_category, values, counts, price, color, size, tag, handleWishlistToggle, handleAddToCart, cart, wishlist, cartNotification } = useContext(myContext)

    return (
        <Container>

            <div className='text-center my-lg-5 my-4'>
                <h1 className='display-4 text-black'><b>Shop</b></h1> 
                <span onClick={() => navigate('/')} role='button' className='fw-medium'>Home</span>    
                <span className='text-secondary' role='button'> / Shop</span>
            </div>

            <Row>
                <div className="col-lg-3 col-md-none">

                    <div className="col-12">

                        {/* Product Categories */}

                        <div className='d-flex justify-content-between pt-3 px-3 border' role='button' onClick={ () => setProduct_category(!product_category)}>
                            <h6>Product Categories</h6>
                            <p>{product_category ? <i className="bi bi-chevron-down my-1"></i> : <i className="bi bi-chevron-up my-1"></i>}</p>
                        </div>

                        <Collapse in={product_category}>
                            <div id="example-collapse-text">
                                <div className='text-secondary border py-3'>
                                    {values.map((e,index)=>{
                                        return (
                                            <div className='d-flex justify-content-between px-3' key={index}>
                                                <p className='shop-filter'><i className="bi bi-chevron-right mr-2"></i>{e}</p>
                                                <p>({counts[index]})</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Collapse>

                    </div>

                    <div className="col-12 my-4">

                        {/* Price Categories */}

                        <div className='d-flex justify-content-between pt-3 px-3 border' role='button' onClick={ () => setPrice(!price)} aria-controls="example-collapse-text" aria-expanded={price}>
                            <h6>Price</h6>
                            <p>{price ? <i className="bi bi-chevron-down my-1"></i> : <i className="bi bi-chevron-up my-1"></i>}</p>
                        </div>

                        <Collapse in={price}>
                            <div id="example-collapse-text">
                                <div className='text-secondary border py-3'>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$50-$100</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$100-$150</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$150-$200</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$200-$250</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$250-$300</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>$1-$50</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                    </div>

                    <div className="col-12">

                        {/* Color Categories */}

                        <div className='d-flex justify-content-between pt-3 px-3 border' onClick={ () => setColor(!color)} aria-controls="example-collapse-text" aria-expanded={color}>
                            <h6>Color</h6>
                            <p>{color ? <i className="bi bi-chevron-down my-1"></i> : <i className="bi bi-chevron-up my-1"></i>}</p>
                        </div>

                        <Collapse in={color}>
                            <div id="example-collapse-text">
                                <div className='text-secondary border py-3'>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'><i className="bi bi-circle-fill mx-2 text-primary"></i>Blue</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'><i className="bi bi-circle-fill mx-2 text-secondary"></i>Gray</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'><i className="bi bi-circle-fill mx-2 text-success"></i>Green</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'><i className="bi bi-circle-fill mx-2 text-danger"></i>Red</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'><i className="bi bi-circle-fill mx-2 text-warning"></i>Yellow</p>
                                        <p>(46)</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                    </div>

                    <div className="col-12 my-4">

                        {/* Size Categories */}

                        <div className='d-flex justify-content-between pt-3 px-3 border' onClick={ () => setSize(!size)} aria-controls="example-collapse-text" aria-expanded={size}>
                            <h6>Size</h6>
                            <p>{size ? <i className="bi bi-chevron-down my-1"></i> : <i className="bi bi-chevron-up my-1"></i>}</p>
                        </div>

                        <Collapse in={size}>
                            <div id="example-collapse-text">
                                <div className='text-secondary border py-3'>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>Large</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>Medium</p>
                                        <p>(46)</p>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <p className='shop-filter'>Small</p>
                                        <p>(46)</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                    </div>

                    <div className="col-12 mb-4">

                        {/* Tag Categories */}

                        <div className='d-flex justify-content-between pt-3 px-3 border' onClick={ () => setTag(!tag)} aria-controls="example-collapse-text" aria-expanded={tag}>
                            <h6>Tags</h6>
                            <p>{tag ? <i className="bi bi-chevron-down my-1"></i> : <i className="bi bi-chevron-up my-1"></i>}</p>
                        </div>

                        <Collapse in={tag}>
                            <div id="example-collapse-text">
                                <div className='border p-2 tags'>
                                    <div className='d-flex'>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Clothing</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Etc</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Fashion</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M11</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M12</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M31</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M32</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M41</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M71</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M72</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>M81</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Men</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Product</p>
                                        <p className='bg-secondary bg-opacity-10 text-secondary rounded-1 px-2 m-1'>Women</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                    </div>

                </div>

                <div className='col-lg-9'>

                    <div className="d-flex justify-content-between px-3">

                        <div>
                            <p className='text-secondary d-none d-lg-inline d-md-inline'>Showing 1-12 of 45 results</p>
                        </div>

                        <div className="d-flex">

                            <div className="d-flex mt-2 mx-2 d-none d-lg-flex d-md-flex" role='button'>
                                <p className='mx-1'>Show</p>
                                <p className='mx-1 border-bottom border-black'>12</p>
                                <p className='mx-1'>15</p>
                                <p className='mx-1'>30</p>
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle variant="none" className='border' id="dropdown-basic" style={{ border: 'none', boxShadow: 'none' }}>
                                    Default sorting
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="" className='dropdown_Item'>Default sorting</Dropdown.Item>
                                    <Dropdown.Item href="" className='dropdown_Item'>Sort by popularity</Dropdown.Item>
                                    <Dropdown.Item href="" className='dropdown_Item'>Sort by average raring</Dropdown.Item>
                                    <Dropdown.Item href="" className='dropdown_Item'>Sort by latest</Dropdown.Item>
                                    <Dropdown.Item href="" className='dropdown_Item'>Sort by price: low to high</Dropdown.Item>
                                    <Dropdown.Item href="" className='dropdown_Item'>Sort by price: high to low</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div>
                                <i className="fa-solid fa-table-cells-large border mx-3 p-2 text-light bg-dark"></i>
                            </div>

                            <div>
                                <i className="fa-solid fa-list border p-2"></i>
                            </div>                        

                        </div>

                    </div>

                    <Row className='px-3'>
                        {all_products_data.map((new_arr, index) => (
                        new_arr.category === 'shop_products' ? (
                            <div className='col-lg-4 col-md-6 my-2 position-relative' key={new_arr.id}
                            onMouseEnter={() => setHoveredIndex(index)} 
                            onMouseLeave={() => setHoveredIndex(null)} role='button'>

                                <div onClick={() => navigate('/product/' + new_arr.id)}>
                                    <div className="position-relative">
                                        <img src={hoveredIndex === index ? new_arr.hover_img : new_arr.img} alt={new_arr.desc} className='w-100 my-2'/>
                                    </div>
                                    <p className='text-secondary m-0  text-uppercase'>{new_arr.product}</p>
                                    <p className='text-capitalize m-0'>{new_arr.desc}</p>
                                    <p className='text-secondary mt-1'>${new_arr.price}</p>
                                </div>

                                {hoveredIndex === index && (
                                    <div className="hover-icons position-absolute top-0 end-0 p-2" style={{ right: "10px" }}>
                                        <div className="icon-wrapper" style={{ animationDelay: "0.1s",margin : '20px 15px 10px 0px' }}>
                                            <i
                                                onClick={() => handleWishlistToggle(new_arr)}
                                                className={`fa-heart p-3 rounded-circle ${
                                                wishlist.find(item => item.id === new_arr.id)
                                                ? "fa-solid bg-black text-white" : "fa-regular bg-white text-dark"
                                                }`}
                                            />                                        
                                        </div>
                                        <div className="icon-wrapper" style={{ animationDelay: "0.2s",marginBottom: "10px" }}>
                                            <i onClick={() => handleModalToggle(new_arr)} className="fa-solid fa-magnifying-glass text-dark p-3 bg-white rounded-circle" size={30} />
                                        </div>
                                        <div className="icon-wrapper" style={{ animationDelay: "0.3s", marginBottom: "10px" }}>
                                            <i
                                                onClick={() => handleAddToCart(new_arr)}
                                                className={`fa-solid fa-bag-shopping p-3 rounded-circle ${cart.find(item => item.id === new_arr.id) ? "bg-black text-white" : "bg-white text-dark"}`}
                                            />                                        </div>
                                    </div>
                                )}

                            </div>
                        ) : '' ))}
                    </Row>

                </div>
            </Row>
            {currentProduct && (
                            <Modal show={showProductModal} onHide={handleModalToggle} centered size="xl">
                                
                                <Modal.Header closeButton></Modal.Header>
            
                                {cartNotification && (
                                    <div
                                        className={`my-2 w-100 text-white p-3 d-lg-flex d-md-flex justify-content-between align-items-center ${
                                        cartNotification.includes("removed") ? "bg-danger" : "bg-success"
                                        }`}
                                        style={{ zIndex: 1055 }}
                                    >
                                        <span>
                                        <i
                                            className={`bi ${
                                            cartNotification.includes("removed") ? "bi-cart-x" : "bi-cart-check"
                                            } fs-4`}
                                        ></i>{" "}
                                        {cartNotification}
                                        </span>
                                        <span
                                        className="border-bottom"
                                        role="button"
                                        onClick={() => {
                                            navigate("/cart");
                                            setShowProductModal(!showProductModal);
                                        }}
                                        >
                                        View Cart
                                        </span>
                                    </div>
                                )}
            
                                <Modal.Body>
                                    <Row>
                                        <div className="col-lg-6">
                                            <img src={currentProduct.img} alt="" className='w-100 mb-2'/>
                                        </div>
                                        <div className="col-lg-6">
                                              <p className='display-6 fw-normal'>{currentProduct.desc}</p>
                                            <p className='fs-3'>${currentProduct.price}</p>
                                            <p>A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>
                                            <p>Color : <span className='text-black fw-medium'>Black</span></p>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-black'></i>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-primary'></i>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-secondary'></i>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-success'></i>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-danger'></i>
                                            <i className='fs-4 pr-2 bi bi-square-fill text-warning'></i>
                                            <div>
                                                {
                                                    cart.some(item => item.id === currentProduct.id )
                                                    ? <button className="btn btn-danger px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(currentProduct)}>Remove From Cart</button>
                                                    : <button className="btn btn-dark bg-black px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(currentProduct)}>Add to Cart</button>
                                                }
                                            </div>
                                            <div className='d-flex align-items-center' role='button' onClick={() => handleWishlistToggle(currentProduct)}>
                                                <i
                                                    className={`bi fs-4 ${
                                                    wishlist.some(item => item.id === currentProduct.id)
                                                        ? "bi-heart-fill text-danger"   
                                                        : "bi-heart text-black"         
                                                    }`}
                                                ></i>
                                                <p className='mx-2 mb-0'>
                                                    {wishlist.some(item => item.id === currentProduct.id)
                                                    ? "Remove from wishlist"
                                                    : "Add to wishlist"}
                                                </p>
                                            </div>
                                        </div>
                                    </Row>
                                </Modal.Body>
                            </Modal>
                        )}
            
        </Container>
    )
}

export default ShopBody