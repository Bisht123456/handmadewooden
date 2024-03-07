import Aos from "aos";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

const Aboutme = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div style={{ padding: "10px 40px" }}>
        <Row>
          <Col lg={6}>
            <div className="abtmemain">
              <h1> I make what I love.</h1>
              <p>
                From an early age, i have always been fascinated by the beauty
                and versatility of wood. I spent countless hours in my father's
                workshop, honing my skills and exploring the limitless
                possibilities of this incredible material.
              </p>
              <p>
                My woodworking is more than just a job; it's a way of life. I
                take pride in sourcing only the highest quality materials, and
                work tirelessly to ensure that every piece i create is a true
                work of art.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              className="aboutmeimg1"
              src="/images/dbufDj3T963NraXDytYfYfbtX8.jpg"
              alt=""
            />
            <img
              className="aboutmeimg1"
              src="/images/aL2QnEwJhkUEl8dsJ6wwPevc5Y.jpg"
              alt=""
            />
            <img
              className="aboutmeimg1"
              src="/images/X4NquXM5yGU0SLR7PHxg3C0MeVI.jpg"
              alt=""
            />
            <img
              className="aboutmeimg1"
              src="/images/WQHW4jLuGSRdsL84YQBus5j7cg.jpg"
              alt=""
            />
            <img
              className="aboutmeimg1"
              src="/images/kAaFQsEb1eM3HdRj1PnjFLiCrmw.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <Row>
        <Col lg={12}>
          <div className="letsgo">
            <h1> Lets work together </h1>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Aboutme;
