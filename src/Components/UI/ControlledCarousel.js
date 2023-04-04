
import sportsFacilities from "../../images/CarsoulePhotos/sportsFacilities.png";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.scss"

const ControlledCarousel = forwardRef((props,ref)=>{
  const [index, setIndex] = useState(0);

useImperativeHandle(ref,()=>({
  setIndexFromParent(parentIndex){
    // todo active for dots 
    setIndex(parentIndex);
  }
}));
  const handleSelect = (selectedIndex, e) => {
    // alert(selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Second slide"
          />
 
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>

     
    </>
  );
})



export default ControlledCarousel;
