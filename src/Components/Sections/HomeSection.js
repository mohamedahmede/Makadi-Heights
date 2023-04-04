import React from 'react'

import Header from '../Header/Header'
import CouplesImg from '../../images/Couples.png';
import './HomeSection.scss'

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubButton from '../UI/SubButton';

const HomeSection = () => {
  return (
    <>
        <Container fluid className='homeSectionContainer '>
            <Row className=''>
            <Col >
            <Header />

            </Col>
            </Row>
            <Row className='homeInfo'>
                <Col lg={6} className="imageContainer">
                    <img src={CouplesImg} className='couplesImg' alt='Couples Photo'/>
                </Col>
                <Col md={6} >
                    <h1 className='pageTitle'>The place <br/>We call home</h1>
                    <p className='pageTitleSubPara'>Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. 
    Envisioned as a comprehensive town.</p>
                    <Row>
                        <Col>
                            <SubButton name='DOWNLOAD BROCHURE'/>
                        </Col>
                        <Col>
                            <SubButton name='SHOW MASTER PLAN'/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HomeSection