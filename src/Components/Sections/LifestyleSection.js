import React, { useRef, useState } from 'react'
import ControlledCarousel from '../UI/ControlledCarousel'
import CentralPark from '../../images/CarsouleIcons/Central-Park.svg'
import CommercialAreas from '../../images/CarsouleIcons/Commercial-Areas.svg'
import Hotels from '../../images/CarsouleIcons/Hotels.svg'
import Kids from '../../images/CarsouleIcons/Kids.svg'
import Medical from '../../images/CarsouleIcons/Medical.svg'
import SportsFacilities from '../../images/CarsouleIcons/Sports-Facilities.svg'

import './LifestyleSection.scss';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LifestyleSection = () => {

  const [isActive, setIsActive] = useState("false");

  const carouselRef= useRef();
  const handleClick = (index) => {
    // todo set class for active css

    carouselRef.current.setIndexFromParent(index);
  }
  return (
    <>
      <Container fluid className='lifestyleSectionContainer'>
        <Row>
          <Col md={6} sm={12} className='leftSide'>
            <h1 className='lifestyleTitle'>
              Discover Lifestyle<br />
              <span>Amentities</span>
            </h1>
            <p className='subSentence'>Occupying a land area of 33,000 square meters, Makadi Heights' stunning clubhouse</p>
            <Row>
              <Col className='p-4'>
                <div className='text-center' onClick={() => {handleClick(0)}}>
                  <span className='iconTest'><img src={CommercialAreas}/></span>
                  <p className='iconTitle'>Commercial Areas</p>
                  <p className='iconSubText'>Downtown<br/>Makadi Heights Mall</p>
                </div>
              </Col>
              <Col className='p-4'>  
                <div className='text-center' onClick={() => {handleClick(1)}}>
                  <span className='iconTest'><img src={SportsFacilities}/></span>
                  <p className='iconTitle'>Sports Facilities</p>
                  <p className='iconSubText'>Sports Courts, Fitness Center <br/>Water Sports Activities</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='p-4'>
                <div className='text-center' onClick={() => {handleClick(2)}}>
                  <span className='iconTest'><img src={Kids}/></span>
                  <p className='iconTitle'>Kids Friendly Areas</p>
                  <p className='iconSubText'>Kids Aqua Park<br/>Kids Areas</p>
                </div>
              </Col>
              <Col className='p-4'>
              <div className='text-center' onClick={() => {handleClick(3)}}>
                <span className='iconTest'><img src={CentralPark}/></span>
                <p className='iconTitle'>Central Park</p>
                <p className='iconSubText'>Far far away, behind<br/>the word mountains</p>
              </div>
              </Col>
            </Row>    
                
            <Row>
              <Col className='p-4'>
              
              <div className='text-center' onClick={() => {handleClick(4)}}>
                <span className='iconTest'><img src={Hotels}/></span>
                <p className='iconTitle'>Hotels</p>
                <p className='iconSubText'>Far far away, behind<br/>the word mountains</p>
              </div>
              </Col>
              <Col className='p-4'>
              <div className='text-center' onClick={() => {handleClick(5)}}>
                <span className='iconTest'><img src={Medical}/></span>
                <p className='iconTitle'>Medical Facilities</p>
                <p className='iconSubText'>Far far away, behind<br/>the word mountains</p>
              </div>
            
              </Col>
             
            </Row>
          </Col>
          <Col lg={6}>
              <ControlledCarousel ref={carouselRef} className='carousel' />
          </Col>
        </Row>
      </Container>
    

    </>
  )
}

export default LifestyleSection