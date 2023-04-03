import React, { useRef } from 'react'
import ControlledCarousel from '../UI/ControlledCarousel'
import Group from '../../images/CarsouleIcons/Group.svg'

import './LifestyleSection.scss';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LifestyleSection = () => {

  const carouselRef= useRef();
  const handleClick = (index) => {
    // todo set class for active css

    carouselRef.current.setIndexFromParent(index);
  }
  return (
    <>
      <Container fluid className='lifestyleSectionContainer'>
        <Row>
          <Col>
            <h1>
              Discover Lifestyle <span>Amentities</span>
            </h1>
            <p>Occupying a land area of 33,000 square meters, Makadi Heights' stunning clubhouse</p>
            <Row>
              <Col>
                <div className='text-center' onClick={() => {handleClick(0)}}>
                  <span className='iconTest'><img src={Group}/></span>
                  <h3>Test1</h3>
                  <p>Downtown<br/>Makadi Heights Mall</p>
                </div>
                <div className='text-center' onClick={() => {handleClick(1)}}>
                  <span className='iconTest'><img src={Group}/></span>
                  <h3>Test2</h3>
                  <p>Downtown<br/>Makadi Heights Mall</p>
                </div>
                <div className='text-center' onClick={() => {handleClick(2)}}>
                  <span className='iconTest'><img src={Group}/></span>
                  <h3>Test3</h3>
                  <p>Downtown<br/>Makadi Heights Mall</p>
                </div>
              </Col>
              <Col>
              <div className='text-center' onClick={() => {handleClick(3)}}>
                <span className='iconTest'><img src={Group}/></span>
                <h3>Test4</h3>
                <p>Downtown<br/>Makadi Heights Mall</p>
              </div>
              <div className='text-center' onClick={() => {handleClick(4)}}>
                <span className='iconTest'><img src={Group}/></span>
                <h3>Test5</h3>
                <p>Downtown<br/>Makadi Heights Mall</p>
              </div>
              <div className='text-center' onClick={() => {handleClick(5)}}>
                <span className='iconTest'><img src={Group}/></span>
                <h3>Test6</h3>
                <p>Downtown<br/>Makadi Heights Mall</p>
              </div>
            
              </Col>
             
            </Row>
          </Col>
          <Col >
              <ControlledCarousel ref={carouselRef} className='position-relative' />
          </Col>
        </Row>
      </Container>
    

    </>
  )
}

export default LifestyleSection