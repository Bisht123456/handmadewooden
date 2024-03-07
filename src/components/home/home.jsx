import React, { useEffect } from "react";
import { Col, NavItem, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/footer";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <div className="main">
          <div className="home">
            <h1>Hello.</h1>
            <p>I'm Joe, maker of handcrafted wooden furniture products.</p>
          </div>
          <Row>
            <Col lg={6}>
              <div className="img_div1" onClick={() => navigate("/singlepage")}>
                <img
                  className="img1"
                  src="images/arUZC2C19DPLq0MvPJyBHSzKvk.jpg"
                  alt=""
                />
                <div className="pos-ab">
                  <img
                    className="addicon"
                    src="images/add-plus-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="handcrafted">
                    Chair -- Handcrafted in oak <MdArrowOutward />
                  </p>
                  <p className="dis-n">
                    View project <MdArrowOutward />
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="img_div1"
                onClick={() => navigate("/stoolsingle")}
              >
                <img
                  className="img2"
                  src="images/O2oZuE7iRYtIyVa5zt9EcHCT9I.jpg"
                  alt=""
                />
                <div className="pos-ab">
                  <img
                    className="addicon"
                    src="images/add-plus-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="handcrafted">
                    BAr Stool -- Unfinished beech <MdArrowOutward />
                  </p>
                  <p className="dis-n">
                    View project <MdArrowOutward />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "90px", marginBottom: "190px" }}>
            <Col lg={6}>
              <div className="img_div1">
                <img
                  className="img1"
                  src="images/O2oZuE7iRYtIyVa5zt9EcHCT9I.jpg"
                  alt=""
                />
                <div className="pos-ab">
                  <img
                    className="addicon"
                    src="images/add-plus-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="handcrafted">
                    Artist Hand Model -- Indian Cherry <MdArrowOutward />
                  </p>
                  <p className="dis-n">
                    View project <MdArrowOutward />
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img_div1">
                <img
                  className="img2"
                  src="images/k3WygUfnfjC0pSonoyzKcT1c.jpg"
                  alt=""
                />
                <div className="pos-ab">
                  <img
                    className="addicon"
                    src="images/add-plus-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="handcrafted">
                    Cuttlery -- Handmade Bamboo set <MdArrowOutward />
                  </p>
                  <p className="dis-n">
                    View project <MdArrowOutward />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Col lg={7}>
            <div data-aos="zoom-in" data-aos-duration="3000">
              <p className="moremep">
                In my work i am for a unique blend of style and functionality .
                From custom furniture pieces to one-of-kind home decor items, i
                create products that are designed to stand the test of time.
                Whether you're looking for a stunning centerpiece for your
                living room or a functional piece of outdoor furniture, I have
                the skill and expertise to bring your vision to life.
              </p>
              <div className="main-clas">
                <h4 onClick={() => navigate("/aboutme")}> MORE ABOUT ME</h4>
                <div className="con-tent"></div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Home;
