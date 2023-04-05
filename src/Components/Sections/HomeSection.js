import React from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import CouplesImg from "../../images/Couples.png";
import "./HomeSection.scss";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SubButton from "../UI/SubButton";

//Animation variables
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0, x: 100 },
  visible: {
    y: 0,
    opacity: 1,
    x: 0,
  },
};

const HomeSection = () => {
  return (
    <>
      <Container fluid className="homeSectionContainer ">
        <Row className="">
          <Col>
            <Header />
          </Col>
        </Row>
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Row className="homeInfo">
            <Col lg={6} className="imageContainer">
              <motion.img
                variants={item}
                src={CouplesImg}
                className="couplesImg item"
                alt="Couples Photo"
              />
            </Col>
            <Col md={6}>
              <motion.h1 variants={item} className="pageTitle">
                The place <br />
                We call home
              </motion.h1>
              <motion.p variants={item} className="pageTitleSubPara">
                Makadi Heights is a town built over 3.4 million square meters
                planned for development, with an elevation reaching 78 meters
                above sea level guaranteeing magnificent panoramic sea views
                residential units. Envisioned as a comprehensive town.
              </motion.p>
              <motion.div variants={item}>
                <Row>
                  <Col>
                    <SubButton name="DOWNLOAD BROCHURE" />
                  </Col>
                  <Col>
                    <SubButton name="SHOW MASTER PLAN" />
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </>
  );
};

export default HomeSection;
