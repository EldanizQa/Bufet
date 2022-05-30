import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
const Sliders = () => {
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
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/Icons/images/1.jpg")} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/Icons/images/4.jpg")} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/Icons/images/3.jpg")} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={require("../../assets/Icons/images/2.jpg")} />
          </div>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Sliders;
