import Aos from "aos";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

const Stoolsingle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div style={{ padding: "10px 40px" }}>
        <Row>
          <Col lg={12}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <img
                className="singlepage1"
                src="/images/O2oZuE7iRYtIyVa5zt9EcHCT9I.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px", marginBottom: "80px" }}>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h3>About this oak chair</h3>
            </div>
          </Col>
          <Col lg={8}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h5 style={{ marginLeft: "289px" }}>
                I strive to bring innovation and creativity to every project i
                undertake. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed dapibus urna porttitor nulla facilisis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Set dapibus urna
                porttitor nulla facilisis.
              </h5>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "40px" }}>
          <Col lg={6}>
            <img
              className="singleimg2"
              src="/images/qEBBclmP9Asq0SuFC67NVOKL5k.jpg"
              alt=""
            />
          </Col>
          <Col lg={6}>
            <img
              className="singleimg2"
              src="/images/fDT3aHN3bQKWqj5j7C6giuUPlI.jpg"
              alt=""
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "30px", marginBottom: "80px" }}>
          <Col lg={4}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h3>How I make my work</h3>
            </div>
          </Col>
          <Col lg={8}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h5 style={{ marginLeft: "289px" }}>
                I strive to bring innovation and creativity to every project i
                undertake. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed dapibus urna porttitor nulla facilisis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Set dapibus urna
                porttitor nulla facilisis.
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="img_div1" onClick={() => navigate("/singlepage")}>
              <img
                className="img1"
                src="/images/3Zd3LAMcc1ThgbqrwHZuasg2yvE.jpg"
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
          <Col lg={4}>
            <div className="img_div1">
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
          <Col lg={4}>
            <div className="img_div1">
              <img
                className="img2"
                src="/images/k3WygUfnfjC0pSonoyzKcT1c.jpg"
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
      </div>
    </>
  );
};

export default Stoolsingle;
