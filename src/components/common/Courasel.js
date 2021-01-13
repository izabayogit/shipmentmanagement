import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1600494573555-a5ead7b7ee23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
          <p className="aside-p">{props.paragraph}</p>
            <h3 className="aside-h1">{props.h1}</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <p className="aside-p">{props.paragraph}</p>
            <h3 className="aside-h2">{props.h2}</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }

  export default ControlledCarousel;
