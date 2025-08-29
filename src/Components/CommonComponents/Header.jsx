import React, { useContext } from "react";
import { Container, Dropdown, Nav, Navbar, Badge, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { myContext } from "../../Context/MyContextProvider";
import { assets } from "../../assets/assets";

const Header = () => {
  const {
    navigate,
    sideNavShow,
    handlesideNavClose,
    handlesideNavShow,
    showDropDown,
    handleCloseDropDown,
    handleShowDropDown,
    showLogin,
    handleCloseLogin,
    handleShowLogin,
    showSearch,
    handleShowSearch,
    handleCloseSearch,
    showRegister,
    handleShowRegister,
    handleCloseRegister,
    query,
    setQuery,
    filteredProducts,
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    showCart,
    handleShowCart,
    handleCloseCart,
    totalItems,
    wishlist
  } = useContext(myContext);


  return (
    <>
      <Container>
        <div className="d-none d-lg-flex d-md-flex justify-content-between align-items-center pt-1 pb-2">
          <div>
            <p className="m-0">Free shipping on US orders $100+ & Free exchanges</p>
          </div>

          <div className="d-flex top-dropdown">
            <Dropdown>
              <Dropdown.Toggle className="border-0" variant="none" style={{ border: "none", boxShadow: "none" }}>
                <div className="d-flex gap-2">
                  <p className="m-0">English</p>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="dropdown-menus w-75 text-black py-0 my-2" href="">
                  French
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-menus w-75 text-black py-0 my-2" href="">
                  German
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-menus w-75 text-black py-0 my-2" href="">
                  Spanish
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="border-0" variant="none" style={{ border: "none", boxShadow: "none" }}>
                <div className="d-flex gap-2">
                  <p className="m-0">USD</p>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="dropdown-menus w-75 text-black py-0 my-2" href="">
                  EURO
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-menus w-75 text-black py-0 my-2" href="">
                  AUD
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>

      <hr className="m-0 h-25" />
      <div className="container-fluid position-sticky top-0 bg-white shadow-sm" style={{ zIndex: "100" }}>
        <Container>
          <div className="product-nav d-flex justify-content-between align-items-center py-lg-3 py-md-2 py-3">
            <div className="d-lg-none mr-md-5">
              <i className="bi bi-list fs-1 mr-2" role="button" onClick={handlesideNavShow}></i>
            </div>

            <div>
              <img src={assets.logo} role="button" alt="" className=" sm-logo m-0" onClick={() => navigate("/")} />
            </div>

            <Navbar className="d-none d-lg-flex fs-6">
              <Nav.Link onClick={() => navigate("/")} href="" className="px-3">
                HOME
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/shop")} href="" className="px-3">
                SHOP
              </Nav.Link>

              <NavDropdown title="PAGES" id="basic-nav-dropdown" className="px-3 dropdown-name">
                <NavDropdown.Item href="" onClick={() => navigate("/faq")}>
                  FAQs
                </NavDropdown.Item>
                <NavDropdown.Item href="" onClick={() => navigate("/about")}>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="" onClick={() => navigate("/my-account")}>
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Item href="" onClick={() => navigate("/order-tracking")}>
                  Order Tracking
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="" onClick={() => navigate("/blog/1")} className="px-3">
                BLOG
              </Nav.Link>
              <Nav.Link href="" onClick={() => navigate("/contact")} className="px-3">
                CONTACT US
              </Nav.Link>
            </Navbar>

            <div className="d-flex align-items-center fs-5">
              <i className="bi bi-search px-lg-3 px-md-3" role="button" onClick={handleShowSearch}></i>
              <i className="bi bi-person fs-4  d-none d-lg-flex d-md-flex" role="button" onClick={handleShowLogin}></i>
              <div className="position-relative px-3">
                <i className="bi bi-heart" onClick={() => navigate("/wishlist")} role="button"></i>
                {wishlist.length == 0 ? "" : <Badge className="bg-black position-absolute top-0 translate-middle rounded-circle fw-normal">{wishlist.length}</Badge>}
              </div>
              <div className="position-relative">
                <i className="bi bi-bag" role="button" onClick={handleShowCart}></i>
                {cart.length == 0 ? "" : <Badge className="bg-black position-absolute top-0 translate-middle rounded-circle fw-normal">{totalItems}</Badge>}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* SIDE NAV BAR */}

      <Offcanvas show={sideNavShow} onHide={handlesideNavClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar className="d-block px-3">
            <Nav.Link onClick={() => navigate("/")} className="py-2 border-top">
              HOME
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/shop")} className="py-2 border-top">
              SHOP
            </Nav.Link>

            <div className="d-flex justify-content-between align-items-center border-top" onClick={handleShowDropDown}>
              <Nav.Link className="py-2">PAGES</Nav.Link>
              <i className="bi bi-chevron-right"></i>
            </div>

            <Offcanvas show={showDropDown} onHide={handleCloseDropDown} placement="start">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-flex  border-top gap-2 pt-2" onClick={handleCloseDropDown}>
                  <i className="bi bi-chevron-left"></i>
                  <p className="m-0">PAGES</p>
                </div>
                <Navbar className="d-block ">
                  <Nav.Link onClick={() => navigate("/faqs")} className="py-2 px-4 border-top">
                    FAQs
                  </Nav.Link>

                  <Nav.Link onClick={() => navigate("/about-us")} className="py-2 px-4 border-top">
                    ABOUT US
                  </Nav.Link>

                  <Nav.Link onClick={() => navigate("/my-account")} className="py-2 px-4 border-top">
                    MY ACCOUNT
                  </Nav.Link>

                  <Nav.Link onClick={() => navigate("/order-tracking")} className="py-2 px-4 border-top border-bottom">
                    ORDER TRACKING
                  </Nav.Link>
                </Navbar>
              </Offcanvas.Body>
            </Offcanvas>

            <Nav.Link onClick={() => navigate("/blog/1")} className="py-2 border-top">
              BLOG
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/contact-us")} className="py-2 border-top border-bottom">
              CONTACT US
            </Nav.Link>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>

      {/* SEARCH PRODUCT CANVAS */}

      <Offcanvas show={showSearch} onHide={handleCloseSearch} placement="top" className="h-100">
        <Offcanvas.Header closeButton className="mx-lg-5 mt-lg-5 mb-lg-3 fs-4" />
        <Offcanvas.Body>
          <Container>
            <Row>
              <div className="col-lg-2"></div>
              <div className="col-lg-8 px-lg-5 text-secondary">
                <div className="d-flex justify-content-between fs-3">
                  <input
                    type="text"
                    placeholder="Product Search"
                    className="border-0 search-box w-100"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <i className="bi bi-search" role="button"></i>
                </div>
                <hr className="my-lg-4" />

                {filteredProducts?.length > 0 && <p>Search Results</p>}

                <Row>
                  {filteredProducts?.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="col-lg-4 col-md-6 mb-4"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <img src={product.img} alt={product.desc} className="w-100" />
                        <div className="px-2 my-2">
                          <p>{product.product}</p>
                          <p>{product.desc}</p>
                          <p className="text-black">${product.price}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    query.trim() && <p className="text-center w-100">No products found</p>
                  )}
                </Row>
              </div>
              <div className="col-lg-2"></div>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>

      {/* LOGIN CANVAS */}

      <Offcanvas show={showLogin} onHide={handleCloseLogin} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>LOGIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="py-2">
            <input className="w-100 px-3 py-2 my-2" type="text" placeholder="Username or email address" />
            <input className="w-100 px-3 py-2 my-2" type="password" placeholder="Password" />
          </div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className="mx-2">
            Remember Me
          </label>
          <br />
          <button className="btn btn-dark btn-block rounded-1 my-3 bg-black">Log In</button>
          <p role="button" onClick={() => navigate("/my-account/lost-password")}>
            <u>Lost Your Password ?</u>
          </p>
          <div className="text-center py-3">
            <p className="text-secondary">
              Not a Member ?{" "}
              <u className="text-black" onClick={handleShowRegister} role="button">
                Register
              </u>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* REGISTER CANVAS */}

      <Offcanvas show={showRegister} onHide={handleCloseRegister} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>RESGISTER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-secondary">
            <input className="w-100 px-3 py-2 my-2" type="text" placeholder="Email address" />
            <p>A password will be sent to your email address.</p>
            <p>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
              <span className="text-black">
                <u>privacy policy.</u>
              </span>
            </p>
            <button className="btn btn-dark btn-block rounded-1 my-3 bg-black">Register</button>
          </div>

          <div className="text-center py-3">
            <p className="text-secondary">
              Already a Member ?{" "}
              <u className="text-dark" role="button" onClick={handleCloseRegister}>
                Login
              </u>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* CART CANVAS */}

      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton className="pt-4">
          <Offcanvas.Title>
            SHOPPING CART <Badge className="bg-dark fs-6 text-white rounded-circle">{totalItems}</Badge>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column p-0">
          <div className="flex-grow-1 overflow-auto px-3">
            <hr className="m-0" />

            {cart.length > 0 ? (
              cart.map((item) => (
                <Row className="my-3" key={item.id}>
                  <div className="col-5">
                    <img src={item.img} className="img-fluid rounded me-3 w-100" alt="Product" />
                  </div>
                  <div className="col-5">
                    <p className="m-0">{item.desc}</p>
                    <p className="my-1 fw-medium">${item.price}</p>
                    <span className="fs-5 px-2 pb-1 border" role="button" onClick={() => updateQuantity(item.id, "dec")}>
                      -
                    </span>
                    <span className="fs-5 px-2">{item.quantity}</span>
                    <span className="fs-5 px-2 pb-1 border" role="button" onClick={() => updateQuantity(item.id, "inc")}>
                      +
                    </span>
                  </div>
                  <div className="col-2">
                    <i className="bi bi-x-circle" role="button" onClick={() => removeFromCart(item.id)}></i>
                  </div>
                </Row>
              ))
            ) : (
              <div>
                <hr className="m-0" />
                <div className="text-center pt-5 mt-5">
                  <i className="bi bi-bag fs-2 bg-secondary bg-opacity-25 text-black px-4 py-3 p-3 rounded-circle"></i>
                  <p className="text-secondary my-5">No Products in the Cart</p>
                </div>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-top p-3">
              <div className="d-flex justify-content-between mb-3">
                <p className="fw-bold">Subtotal :</p>
                <p className="text-secondary">${subtotal}</p>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-hover border border-dark text-black w-50 rounded-0"
                  onClick={() => {
                    navigate("/cart");
                    handleCloseCart(true)
                  }}>
                  View Cart
                </button>
                <button className="btn btn-dark bg-black w-50 rounded-0">Checkout</button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
};

export default Header;
