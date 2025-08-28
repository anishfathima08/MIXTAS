import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { myContext } from "../../Context/MyContextProvider";
import { assets, new_in_store } from "../../assets/assets";

const CartPageBody = () => {
  const { navigate, cart, updateQuantity, removeFromCart, subtotal } = useContext(myContext);

  return (
    <div className="container my-5">
      <span onClick={() => navigate("/")} role="button" className="fw-medium">
        Home
      </span>
      <span className="text-secondary" role="button">
        {" "}
        / Cart
      </span>
      <h4 className="my-4">Cart</h4>

      {cart.length > 0 
      ?
        <Row>
        <Col md={8}>
          <div className="border">
            <div className="d-flex justify-content-between p-3 border-bottom bg-light fw-bold">
              <span>PRODUCT</span>
              <span>TOTAL</span>
            </div>

              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center p-3 border-bottom">
                  <div className="d-lg-flex d-md-flex align-items-start gap-3">
                    <img src={item.img} alt={item.desc} width={80} className="rounded" />
                    <div>
                      <p className="mb-1 fw-semibold">{item.desc}</p>
                      <p className="text-muted mb-1">${Number(item.price).toFixed(2)}</p>

                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-outline-dark btn-sm rounded-0" onClick={() => updateQuantity(item.id, "dec")}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="btn btn-outline-dark btn-sm rounded-0" onClick={() => updateQuantity(item.id, "inc")}>
                          +
                        </button>
                        <button className="btn btn-link text-danger text-decoration-none ms-3" onClick={() => removeFromCart(item.id)}>
                          Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="fw-semibold">${(Number(item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
          </div>
        </Col>

        {/* RIGHT SIDE: Cart Totals */}
        <Col md={4}>
          <div className="border p-3">
            <h6 className="fw-bold border-bottom pb-2">CART TOTALS</h6>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span>Add a coupon</span>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span>Subtotal</span>
              <span className="fw-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="fw-bold">Total</span>
              <span className="fw-bold">${subtotal.toFixed(2)}</span>
            </div>

            <button className="btn btn-warning rounded-0 w-100 my-2">PayPal</button>
            <div className="text-center my-2">OR</div>
            <button className="btn btn-dark rounded-0 bg-black w-100">Proceed to Checkout</button>
          </div>
        </Col>

        <p className='fs-3 fw-medium text-black text-center pt-5'>New in Store</p>
          {new_in_store.map((products, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-3 col-12 text-center my-4 mb-5" 
              onClick={() => navigate('/product/' + products.id)} role='button'>
                <img src={products.img} alt="" className='w-100' />
                <p className='m-0 text-black fw-medium fs-6 my-2'>{products.desc}</p>
                <p className='m-0 text-secondary'>{products.price}</p>
              </div>
            );
        })}   
      </Row>
      :
        <Row>
          <div className="col-12 py-1 text-center">
            <img src={assets.no_cart_emoji} alt="" height={95} className='my-3'/>
            <p className='text-black'>Your cart is currently empty !</p>
            <span>.</span><span className='px-5'>.</span><span>.</span>
          </div>

          <p className='fs-3 fw-medium text-black text-center pt-5'>New in Store</p>
            {new_in_store.map((products, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-12 text-center my-4 mb-5" 
                onClick={() => navigate('/product/' + products.id)} role='button'>
                  <img src={products.img} alt="" className='w-100' />
                  <p className='m-0 text-black fw-medium fs-6 my-2'>{products.desc}</p>
                  <p className='m-0 text-secondary'>{products.price}</p>
                </div>
              );
          })} 
        </Row>
      }
      
    </div>
  );
};

export default CartPageBody;