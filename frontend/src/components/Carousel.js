import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const imgURL = "https://picsum.photos/1600/400/?random"; // 가로 size에 화면 크기 기입

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 1s = 1000
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <div className="carousel">
      <StyledSlider {...settings}>
        <div>
          <img src={imgURL} alt="img" />
        </div>
        <div>
          <img src={imgURL} alt="img" />
        </div>
        <div>
          <img src={imgURL} alt="img" />
        </div>
        <div>
          <img src={imgURL} alt="img" />
        </div>
      </StyledSlider>
    </div>
  );
};
export default Carousel;

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 0.75;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
  }

  .slick-dots {
    bottom: 30px;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
`;
