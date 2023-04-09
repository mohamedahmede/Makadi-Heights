
import sportsFacilities from "../../images/CarsoulePhotos/sportsFacilities.png";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.scss"

const ControlledCarousel = forwardRef((props,ref)=>{
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

useImperativeHandle(ref,()=>({
  setIndexFromParent(parentIndex){
  setIndex(parentIndex);
  },
  getCurrentIndex(){
    return currentIndex;
  }
}));
  const handleSelect = (selectedIndex, e) => {
    // alert(selectedIndex);
    setIndex(selectedIndex);
  };

  const handleSlide = (index,e)=>{
    setCurrentIndex(index);
    props.setIsMoved(index);
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} onSlide={handleSlide} controls={false} indicators={false} interval={1000}>
        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="Second slide"
          />
 
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={sportsFacilities}
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>
    <div className="text-center">
    <button className={`carouselDots${(currentIndex === 0) ? " activeDot" : ""}`} onClick={() => setIndex(0)}></button>
    <button className={`carouselDots${(currentIndex === 1) ? " activeDot" : ""}`} onClick={() =>setIndex(1)}></button>
    <button className={`carouselDots${(currentIndex === 2) ? " activeDot" : ""}`} onClick={() =>setIndex(2)}></button>
    <button className={`carouselDots${(currentIndex === 3) ? " activeDot" : ""}`} onClick={() =>setIndex(3)}></button>
    <button className={`carouselDots${(currentIndex === 4) ? " activeDot" : ""}`} onClick={() =>setIndex(4)}></button>
    <button className={`carouselDots${(currentIndex === 5) ? " activeDot" : ""}`} onClick={() =>setIndex(5)}></button>

    </div>
      


     
    </>
  );
})



export default ControlledCarousel;
