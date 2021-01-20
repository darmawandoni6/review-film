import React from "react";
import Slider from "react-slick";
import { Card } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummy1 from "../../../assets/images/Iron_Man_3_poster.jpg";
import dummy2 from "../../../assets/images/avenger-2.jpg";
import dummy3 from "../../../assets/images/avenger-3.jpg";
import dummy4 from "../../../assets/images/avenger.jpg";
import dummy5 from "../../../assets/images/batman.jpg";
import dummy6 from "../../../assets/images/narnia.jpg";

const randomPoster = () => {
  const rd = Math.floor(Math.random() * 6);
  switch (rd) {
    case 0:
      return dummy1;
    case 1:
      return dummy2;
    case 2:
      return dummy3;
    case 3:
      return dummy4;
    case 4:
      return dummy5;
    case 5:
      return dummy6;
    default:
      return dummy1;
  }
};

const TopTent = () => {
  return (
    <div className="border p-2 mb-2 bg">
      <h2> Top 10 Film</h2>
      <Slider {...settings} arrows={false}>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
        <Card>
          <div className="border" style={{ position: "relative" }}>
            <img src={randomPoster()} alt="" style={style.poster} />
            <div style={style.ket}>Dummy</div>
          </div>
        </Card>
      </Slider>
    </div>
  );
};

export default TopTent;

const style = {
  poster: {
    width: 220,
    height: 325,
  },
  ket: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0000002b",
    backgroundImage: "linear-gradient(transparent, #3c3c3b)",
    color: "white",
    padding: " 12px 24px",
    boxShadow: "0px -12px 27px -17px rgba(0,0,0,1)",
  },
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  // adaptiveHeight: true,
};
