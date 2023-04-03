// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Carousel.scss'

import sportsFacilities from "../../images/CarsoulePhotos/sportsFacilities.png";

// export default function Carousel() {
//   const [nav1, setNav1] = useState();
//   const [nav2, setNav2] = useState();

//     return (
//     <>
//       {/* <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//       <h4>Second Slider</h4> */}
//       <Slider
//         // asNavFor={nav1}
//         // ref={(slider2) => setNav2(slider2)}
//         dots={true}
//         slidesToShow={1}
//         swipeToSlide={true}
//         focusOnSelect={true}
//         variableWidth={true}

//       >
//         <div>
//           <img src={sportsFacilities} className='' alt='Sports Facilities'/>
//         </div>
//         <div>
//         <img src={sportsFacilities} className='' alt='Sports Facilities' />
//         </div>
//         <div>
//         <img src={sportsFacilities} className='' alt='Sports Facilities' />

//         </div>
//         <div>
//         <img src={sportsFacilities} className='' alt='Sports Facilities' />

//         </div>
//         <div>
//         <img src={sportsFacilities} className='' alt='Sports Facilities' />

//         </div>
//         <div>

//         </div>
//       </Slider>
//     </>
//   );
// }

import React, { forwardRef, useContext, useImperativeHandle, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sportsFacilities}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     
    </>
  );
})

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);


//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <>
//       <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={sportsFacilities}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={sportsFacilities}
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={sportsFacilities}
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <div class="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target=""
//           aria-label="Slide 1"
//           aria-current="false"
//         ></button>
//         <button
//           type="button"
//           data-bs-target=""
//           aria-label="Slide 2"
//           aria-current="true"
//           class="active"
//         ></button>
//         <button
//           type="button"
//           data-bs-target=""
//           aria-label="Slide 3"
//           aria-current="false"
//         ></button>
//       </div>
//     </>
//   );
// }

export default ControlledCarousel;
