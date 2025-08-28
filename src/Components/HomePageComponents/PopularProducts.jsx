import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Container, Row, Modal } from "react-bootstrap";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { all_products_data } from "../../assets/assets";
import { myContext } from "../../Context/MyContextProvider";

const PopularProducts = () => {
  const { navigate, cart, hoveredIndex, setHoveredIndex, handleModalToggle, currentProduct, showProductModal, setShowProductModal, cartNotification, handleAddToCart, wishlist, handleWishlistToggle } = useContext(myContext);

  return (
    <>
      <Container>
        <div className="text-center">
          <h6 className="text-secondary pt-lg-5">TOP PRODUCTS</h6>
          <p className="display-5 text-black">
            <b>Popular Products</b>
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          speed="1000"
          navigation
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 1,
            },
          }}>
          {all_products_data.map((pop_products, index) =>
            pop_products.category === "popular_products" ? (
              <SwiperSlide key={pop_products.img}>
                <div role="button" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <div onClick={() => navigate("/product/" + pop_products.id)}>
                    <div className="position-relative">
                      <img src={hoveredIndex === index ? pop_products.hover_img : pop_products.img} alt="" className="mt-4 mb-2 w-100" />
                    </div>
                    <p className="text-secondary m-0 text-uppercase">{pop_products.product}</p>
                    <p className="mt-1 mb-0 text-capitalize">{pop_products.desc}</p>
                    <p className="text-secondary mt-2 mb-0">${pop_products.price}</p>
                  </div>

                  {hoveredIndex === index && (
                    <div className="mt-3 hover-icons position-absolute top-0 end-0 p-2" style={{ right: "10px" }}>
                      <div className="icon-wrapper" style={{ margin: "20px 15px 10px 0px" }}>
                        <i
                          onClick={() => handleWishlistToggle(pop_products)}
                          className={`fa-heart p-3 rounded-circle ${wishlist.find((item) => item.id === pop_products.id) ? "fa-solid bg-black text-white" : "fa-regular bg-white text-dark"}`}
                        />
                      </div>
                      <div className="icon-wrapper" style={{ animationDelay: "0.2s", marginBottom: "10px" }}>
                        <i onClick={() => handleModalToggle(pop_products)} className="fa-solid fa-magnifying-glass text-dark p-3 bg-white rounded-circle" size={30} />
                      </div>
                      <div className="icon-wrapper" style={{ animationDelay: "0.3s", marginBottom: "10px" }}>
                        <i
                          onClick={() => handleAddToCart(pop_products)}
                          className={`fa-solid fa-bag-shopping p-3 rounded-circle ${cart.find((item) => item.id === pop_products.id) ? "bg-black text-white" : "bg-white text-dark"}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>

        <div className="text-center">
          <button
            className="btn btn-light border-dark popular-product-btn my-4 my-lg-5 my-md-5"
            onClick={() => {
              navigate("/shop");
            }}>
            Show more products
          </button>
        </div>
      </Container>

      {currentProduct && (
        <Modal show={showProductModal} onHide={handleModalToggle} centered size="xl">
          <Modal.Header closeButton></Modal.Header>

          {cartNotification && (
            <div
              className={`my-2 w-100 text-white p-3 d-lg-flex d-md-flex justify-content-between align-items-center ${cartNotification.includes("removed") ? "bg-danger" : "bg-success"}`}
              style={{ zIndex: 1055 }}>
              <span>
                <i className={`bi ${cartNotification.includes("removed") ? "bi-cart-x" : "bi-cart-check"} fs-4`}></i> {cartNotification}
              </span>
              <span
                className="border-bottom"
                role="button"
                onClick={() => {
                  navigate("/cart");
                  setShowProductModal(!showProductModal);
                }}>
                View Cart
              </span>
            </div>
          )}

          <Modal.Body>
            <Row>
              <div className="col-lg-6">
                <img src={currentProduct.img} alt="" className="w-100 mb-2" />
              </div>
              <div className="col-lg-6">
                <p className="display-6 fw-normal">{currentProduct.desc}</p>
                <p className="fs-3">${currentProduct.price}</p>
                <p>
                  A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most
                  important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a
                  purchase.
                </p>
                <p>
                  Color : <span className="text-black fw-medium">Black</span>
                </p>
                <i className="fs-4 pr-2 bi bi-square-fill text-black"></i>
                <i className="fs-4 pr-2 bi bi-square-fill text-primary"></i>
                <i className="fs-4 pr-2 bi bi-square-fill text-secondary"></i>
                <i className="fs-4 pr-2 bi bi-square-fill text-success"></i>
                <i className="fs-4 pr-2 bi bi-square-fill text-danger"></i>
                <i className="fs-4 pr-2 bi bi-square-fill text-warning"></i>
                <div>
                  {cart.some((item) => item.id === currentProduct.id) ? (
                    <button className="btn btn-danger px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(currentProduct)}>
                      Remove From Cart
                    </button>
                  ) : (
                    <button className="btn btn-dark bg-black px-lg-4 rounded-1 my-3 py-2" onClick={() => handleAddToCart(currentProduct)}>
                      Add to Cart
                    </button>
                  )}
                </div>
                <div className="d-flex" role="button">
                  <div className="d-flex align-items-center" role="button" onClick={() => handleWishlistToggle(currentProduct)}>
                    <i className={`bi fs-4 ${wishlist.some((item) => item.id === currentProduct.id) ? "bi-heart-fill text-danger" : "bi-heart text-black"}`}></i>
                    <p className="mx-2 mb-0">{wishlist.some((item) => item.id === currentProduct.id) ? "Remove from wishlist" : "Add to wishlist"}</p>
                  </div>
                </div>
              </div>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default PopularProducts;