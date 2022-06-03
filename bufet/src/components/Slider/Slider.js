import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
// import Azerbaijan from "../Azerbaijan/Azerbaijan";
const Sliders = (props) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.removeEventListener("resize", handleResize, false);
    window.addEventListener("resize", handleResize, false);
  }, []);
  let slidesToShow = 3;
  if (dimensions.width <= 1000) {
    slidesToShow = 2;
  }
  if (dimensions.width <= 600) {
    slidesToShow = 1;
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
  };
  return (
    <Slider className="slider" {...settings}>
      {props.slider.map((el, index) => (
        <div className="card-wrapper" key={index}>
          <div className="card">
            <div className="card-image">
              <img src={el.src} />
            </div>
            <div className="details">
              <h2> {el.title} </h2>
              <span className="job-title">{el.description}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
