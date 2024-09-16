import React, { useEffect, useState, useRef } from "react";
import Airforce from "../../assets/images/Airforce.png";
import AirForceRed from "../../assets/images/air-force-1.png";
import AirForceWhite from "../../assets/images/air-force-1-07-mens-shoes-jBrhbr (1).png";
import { Container, Row, Col } from "react-bootstrap";
import NikeLogo1 from "../../assets/images/nike_logo_2-removebg-preview.png";

const LandingPage = () => {
  const [img, setImg] = useState(Airforce);
  const [animate, setAnimate] = useState(false);
  const slideImg = [Airforce, AirForceRed, AirForceWhite];
  const intervalRef = useRef(null);

  useEffect(() => {
    let index = 1;

    const slideAnimation = () => {
      setAnimate(true);
      setImg(slideImg[index]);
      setTimeout(() => setAnimate(false), 500);
      index = (index + 1) % slideImg.length;
    };
    intervalRef.current = setInterval(slideAnimation, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const changeImg = (newImg) => {
    clearInterval(intervalRef.current);
    setAnimate(true);
    setImg(newImg);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  return (
    <section className="page">
      <Container fluid className="landing-page">
        <Row>
          <Col className="left-side">
            <Row>
              <img src={NikeLogo1} alt="logo" />
            </Row>
            <Row>
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur elittte adipisicing elit.
                Asperiores pariatur quia autem sint quae maxime, totam maiores
                enim nihil ius officiis, rerum eum, earum aspernatur aut laborum
                commodi iure! Animi.
              </p>
            </Row>
            <Row>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur elit elit adipisicing
                elit. Ex voluptate suscipit perferendis enim laudantium rerum.
                Cupiditate iusto beatae maxime
              </p>

              {/* <div className="icons"></div> */}
            </Row>
          </Col>
          <Col className="middle">
            <Row className="headline">
              <h1>Air-forec</h1>
              <h4>Explore the Nike Air Force 1 '07 Men's Shoes</h4>
              <p>Lorem ipsum dolor sit amet </p>
            </Row>

            <Row className={`image-container ${animate ? "slide" : ""}`}>
              <img src={img} />
            </Row>

            <Row>
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                culpa repellat recusandae rerum dicta est
              </p>
            </Row>
          </Col>

          <Col className="right-side">
            <Row>
              <h4>Lorem ipsum dolor sit amet </h4>
              <p>
                autem, dolor, unde temporibus animi voluptates autem, dolor,
                unde temporibus animi voluptates autem, dolor, unde temporibus
                animi voluptates autem, dolor, unde temporibus animi voluptates
                autem, dolor, unde temporibus animi voluptates
              </p>
            </Row>
            <Row>
              <h4>Lorem ipsum dolor sit amet </h4>
              <p>
                autem, dolor, unde temporibus animi voluptates autem, dolor,
                unde temporibus animi voluptates autem, dolor, unde temporibus
                animi voluptates autem, dolor, unde temporibus animi voluptates
                autem, dolor, unde temporibus animi voluptates
              </p>
            </Row>
            <Row>
              <button onClick={() => changeImg(Airforce)}></button>
              <button onClick={() => changeImg(AirForceRed)}></button>
              <button onClick={() => changeImg(AirForceWhite)}></button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingPage;
