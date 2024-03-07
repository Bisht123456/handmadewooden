import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div
        style={{
          padding: "20px 50px",
          borderTop: "1px solid #fff",
          marginTop: "100px",
        }}
      >
        <Row>
          <h1>RAHUL</h1>
          <Col lg={3}>
            <h4>1 The street</h4>
            <h4>A Town</h4>
            <h4>A Region</h4>
            <h4>ABC !@#</h4>
          </Col>
          <Col lg={3} className="txt-dec">
            <h4>mail@emial.com</h4>
            <h5>+91 987654321</h5>
          </Col>
          <Col lg={3} className="txt-dec">
            <h4>Work</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Buy Template</h4>
          </Col>
          <Col lg={3} className="txt-dec">
            <h4> Etsy</h4>
            <h4> Twitter</h4>
            <h4> Instagram</h4>
            <h4> Facebook</h4>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
