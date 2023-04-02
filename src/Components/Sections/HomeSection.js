import React from 'react'

import Header from '../Header/Header'
import CouplesImg from '../../images/Couples.png';
import './HomeSection.scss'

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeSection = () => {
  return (
    <>
        <Container fluid className='HomeSectionContainer '>
            <Row className=''>
            <Col >
            <Header />

            </Col>
            </Row>
            <Row className='homeInfo position-absolute'>
                <Col>
                    <img src={CouplesImg} className='couplesImg' alt='Couples Photo'/>
                </Col>
                <Col>
                    <h1>The place <br/>We call home</h1>
                    <p>Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. 
    Envisioned as a comprehensive town.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HomeSection