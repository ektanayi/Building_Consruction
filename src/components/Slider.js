import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Slider.css';

function Slider({slides}) {
  return (
    <Carousel>
        {slides.map((slide) => ( <Carousel.Item key={slide.image} interval={slide.interval}>
        <img
          className="d-block w-100"
          src={slide.image}
          alt="First slide"
          height="450px"
        />
        <Carousel.Caption>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <Button variant="warning">Learn More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>))}
     
    </Carousel>
  );
}

export default Slider;