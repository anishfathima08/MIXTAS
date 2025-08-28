import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { assets } from "../../assets/assets";
import { myContext } from "../../Context/MyContextProvider";

const WishListBody = () => {
  const { navigate, wishlist, handleWishlistToggle } = useContext(myContext);

  return (
    <>
      <Container>
        <div className="py-5">
          <span onClick={() => navigate("/")} role="button" className="fw-medium">
            Home
          </span>
          <span className="text-secondary" role="button">
            {" "}
            / Wishlist
          </span>
          <p className="display-5 text-black pt-2">
            <b>Wishlist</b>
          </p>
        </div>

        <Container fluid className="px-2 px-lg-4 px-md-4">
          <Row>
            {wishlist.length > 0 ? (
              wishlist.map((value) => (
                <>
                  <div key={value.id} className="col-lg-7 col-md-11 col-10 py-3">
                    <div className="d-flex gap-lg-5 gap-md-5 gap-3">
                      <i className="bi bi-x-lg fs-5 mb-3" role="button" onClick={() => handleWishlistToggle(value)}></i>
                      <img src={value.img} alt="" height="100px" className="d-lg-block d-md-none d-none" />
                      <p className="text-uppercase m-0">{value.desc}</p>
                      <p className="text-secondary m-0 ms-auto">{value.price}</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-1 py-3">
                    <div className="d-inline d-lg-flex d-md-flex justify-content-between">
                      <p className="d-lg-block d-md-none d-none m-0">IN STOCK</p>
                      <i className="bi bi-bag fs-3"></i>
                    </div>
                  </div>
                  <div className="py-lg-5 py-md-5 py-3">
                    <p className="fs-4 fw-normal">Share on:</p>
                    <i className="bi bi-facebook bg-primary text-light p-1 m-1"></i>
                    <i className="bi bi-twitter bg-info text-light p-1 m-1"></i>
                    <i className="bi bi-pinterest bg-danger text-light p-1 m-1"></i>
                    <i className="bi bi-envelope bg-warning text-light p-1 m-1"></i>
                    <i className="bi bi-whatsapp bg-success text-light p-1 m-1"></i>
                  </div>
                </>
              ))
            ) : (
              <div className="text-center text-secondary pb-5">
                <img src={assets.close_icon} alt="" height={60} className="m-5" />
                <p>No products added to the wishlist</p>
              </div>
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default WishListBody;