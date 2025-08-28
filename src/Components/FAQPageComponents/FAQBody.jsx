import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Card, Container, Row, useAccordionButton } from 'react-bootstrap';

const ToggleIcon = ({ children, eventKey, activeKey, callback }) => {
  
  const isOpen = activeKey === eventKey; 

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (callback) callback(eventKey);
  });

  return (
    <div onClick={decoratedOnClick} className="d-flex justify-content-between align-items-center" role="button">
      <span>{children}</span>
      <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"} fs-2`}></i>
    </div>
  );
};

const FAQBody = () => {

  const navigate = useNavigate();

  const [leftActiveKey, setLeftActiveKey] = useState("1");
  const [rightActiveKey, setRightActiveKey] = useState("6");

  const handleLeftSelect = (key) => {
    setLeftActiveKey(key === leftActiveKey ? null : key); 
  };

  const handleRightSelect = (key) => {
    setRightActiveKey(key === rightActiveKey ? null : key); 
  };

  return (
    <>
      <div className="text-center my-lg-5 my-md-4 py-4">
        <h1 className="display-1 text-black"><b>FAQs</b></h1>
        <span role="button" className='fw-medium' onClick={() => navigate('/')}>Home</span>  
        <span className="text-secondary" role="button"> / FAQs</span>
      </div>

      <Container>
        <Row className="mb-5">

          <div className="col-lg-6">
            <Accordion activeKey={leftActiveKey} onSelect={handleLeftSelect}>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="1" activeKey={leftActiveKey} callback={handleLeftSelect}>
                    <p className="m-0 fs-4 fw-medium">What is your return policy ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="2" activeKey={leftActiveKey} callback={handleLeftSelect}>
                    <p className="m-0 fs-4 fw-medium">How can I track my order ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email with a tracking number. You can use this number to track your order’s status on our Order Tracking page.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="3" activeKey={leftActiveKey} callback={handleLeftSelect}>
                    <p className="m-0 fs-4 fw-medium">What payment methods do you accept ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary"> We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="4" activeKey={leftActiveKey} callback={handleLeftSelect}>
                    <p className="m-0 fs-4 fw-medium">Do you offer international shipping ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="5" activeKey={leftActiveKey} callback={handleLeftSelect}>
                    <p className="m-0 fs-4 fw-medium">How can I contact your customer support ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>

          <div className="col-lg-6">
            <Accordion activeKey={rightActiveKey} onSelect={handleRightSelect}>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="6" activeKey={rightActiveKey} callback={handleRightSelect}>
                    <p className="m-0 fs-4 fw-medium">How do I care for my garments ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Care instructions can usually be found on the product’s care label or on the product page itself. We recommend following the provided guidelines to ensure the longevity and quality of your items.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="7" activeKey={rightActiveKey} callback={handleRightSelect}>
                    <p className="m-0 fs-4 fw-medium">Do you offer gift wrapping services ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="8" activeKey={rightActiveKey} callback={handleRightSelect}>
                    <p className="m-0 fs-4 fw-medium">Do you offer online ordering and shipping ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Yes, we offer online ordering with shipping options available. Contact us for more information.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="9" activeKey={rightActiveKey} callback={handleRightSelect}>
                    <p className="m-0 fs-4 fw-medium">Can I sign up for exclusive offers and updates ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Absolutely! Join our newsletter to receive exclusive offers, promotions, and updates on the latest fashion trends. You can sign up at the bottom of our homepage.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="border rounded-0 my-3">
                <Card.Header className="bg-transparent">
                  <ToggleIcon eventKey="10" activeKey={rightActiveKey} callback={handleRightSelect}>
                    <p className="m-0 fs-4 fw-medium">How do I create an account ?</p>
                  </ToggleIcon>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body className="bg-transparent border">
                    <p className="text-secondary">Creating an account is easy! Simply click on the “Sign Up” link at the top of the page and follow the prompts to enter your information. You’ll then have access to order history, wishlists, and faster checkout.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>

        </Row>
      </Container>
    </>
  );
};

export default FAQBody;