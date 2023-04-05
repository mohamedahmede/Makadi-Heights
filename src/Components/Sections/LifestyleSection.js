import React, { useEffect, useRef, useState } from "react";
import ControlledCarousel from "../UI/ControlledCarousel";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

//Icons
import CentralPark from "../../images/CarsouleIcons/Central-Park.svg";
import CommercialAreas from "../../images/CarsouleIcons/Commercial-Areas.svg";
import Hotels from "../../images/CarsouleIcons/Hotels.svg";
import Kids from "../../images/CarsouleIcons/Kids.svg";
import Medical from "../../images/CarsouleIcons/Medical.svg";
import SportsFacilities from "../../images/CarsouleIcons/Sports-Facilities.svg";

import "./LifestyleSection.scss";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LifestyleSection = () => {
  //animation
  const animationRef = useRef(null);
  const isInView = useInView(animationRef);

  //if the slide Moved
  const [isMoved, setIsMoved] = useState(0);

  const carouselRef = useRef();
  const handleClick = (index) => {
    carouselRef.current.setIndexFromParent(index);
    setIsMoved(index);
  };

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <>
      <Container fluid className="lifestyleSectionContainer" ref={animationRef}>
        <Row>
          <Col lg={6} md={4} className="leftSide">
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h1 className="lifestyleTitle">
                Discover Lifestyle
                <br />
                <span>Amentities</span>
              </h1>
              <p className="subSentence">
                Occupying a land area of 33,000 square meters, Makadi Heights'
                stunning clubhouse
              </p>
              <Row>
                <Col className={`iconCol${isMoved === 0 ? " isActive" : ""}`}>
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(0);
                    }}
                  >
                    <span className="iconTest">
                      <img src={CommercialAreas} />
                    </span>
                    <p className="iconTitle">Commercial Areas</p>
                    <p className="iconSubText">
                      Downtown
                      <br />
                      Makadi Heights Mall
                    </p>
                  </div>
                </Col>
                <Col className={`iconCol${isMoved === 1 ? " isActive" : ""}`}>
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(1);
                    }}
                  >
                    <span className="iconTest">
                      <img src={SportsFacilities} />
                    </span>
                    <p className="iconTitle">Sports Facilities</p>
                    <p className="iconSubText">
                      Sports Courts, Fitness Center <br />
                      Water Sports Activities
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className={`iconCol${isMoved === 2 ? " isActive" : ""}`}>
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(2);
                    }}
                  >
                    <span className="iconTest">
                      <img src={Kids} />
                    </span>
                    <p className="iconTitle">Kids Friendly Areas</p>
                    <p className="iconSubText">
                      Kids Aqua Park
                      <br />
                      Kids Areas
                    </p>
                  </div>
                </Col>
                <Col className={`iconCol${isMoved === 3 ? " isActive" : ""}`}>
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(3);
                    }}
                  >
                    <span className="iconTest">
                      <img src={CentralPark} />
                    </span>
                    <p className="iconTitle">Central Park</p>
                    <p className="iconSubText">
                      Far far away, behind
                      <br />
                      the word mountains
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col
                  className={`iconCol lastRow${
                    isMoved === 4 ? " isActive" : ""
                  }`}
                >
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(4);
                    }}
                  >
                    <span className="iconTest">
                      <img src={Hotels} />
                    </span>
                    <p className="iconTitle">Hotels</p>
                    <p className="iconSubText">
                      Far far away, behind
                      <br />
                      the word mountains
                    </p>
                  </div>
                </Col>
                <Col
                  className={`iconCol lastRow${
                    isMoved === 5 ? " isActive" : ""
                  }`}
                >
                  <div
                    className="text-center"
                    onClick={() => {
                      handleClick(5);
                    }}
                  >
                    <span className="iconTest">
                      <img src={Medical} />
                    </span>
                    <p className="iconTitle">Medical Facilities</p>
                    <p className="iconSubText">
                      Far far away, behind
                      <br />
                      the word mountains
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} md={8}>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-600px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <ControlledCarousel
                ref={carouselRef}
                className="carousel"
                setIsMoved={setIsMoved}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LifestyleSection;
