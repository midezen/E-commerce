import "./Slider.scss";
import sliderPhoto1 from "../../img/sliderPhoto1.png";
import sliderPhoto2 from "../../img/sliderPhoto2.png";
import sliderPhoto3 from "../../img/sliderPhoto3.png";
import sliderPhoto4 from "../../img/sliderPhoto4.png";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? 3 : slideNumber - 1);
  };

  const nextSlide = () => {
    setSlideNumber(slideNumber === 3 ? 0 : slideNumber + 1);
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider1">
          <div
            className="color1"
            style={{ opacity: `${slideNumber === 0 ? "1" : "0"}` }}
          >
            <section>
              <h1>Fashion Up Your Look.</h1>
              <p>
                If you're looking for the latest and greatest in wears and
                fashion trends, <br /> you've come to the right place
              </p>
              <Link to="/products/" className="link">
                <button>
                  Shop Now <EastOutlined />
                </button>
              </Link>
            </section>
            <img src={sliderPhoto4} alt="" />
          </div>
        </div>
        <div className="slider1">
          <div
            className="color2"
            style={{ opacity: `${slideNumber === 1 ? "1" : "0"}` }}
          >
            <section>
              <h1>
                Dress up and stand out: <br />
                be Bold.
              </h1>
              <p>
                If you're looking for the latest and greatest in wears and
                fashion trends, <br /> you've come to the right place
              </p>
              <Link to="/products/" className="link">
                <button>
                  Shop Now <EastOutlined />
                </button>
              </Link>
            </section>

            <img src={sliderPhoto2} alt="" />
          </div>
        </div>
        <div className="slider1">
          <div
            className="color3"
            style={{ opacity: `${slideNumber === 2 ? "1" : "0"}` }}
          >
            <section>
              <h1>Be Yourself.</h1>
              <p>
                If you're looking for the latest and greatest in wears and
                fashion trends, <br />
                you've come to the right place
              </p>
              <Link to="/products/" className="link">
                <button>
                  Shop Now <EastOutlined />
                </button>
              </Link>
            </section>

            <img src={sliderPhoto3} alt="" />
          </div>
        </div>
        <div className="slider1">
          <div
            className="color4"
            style={{ opacity: `${slideNumber === 3 ? "1" : "0"}` }}
          >
            <section>
              <h1>Wear the Best.</h1>
              <p>
                If you're looking for the latest and greatest in wears and
                fashion trends,
                <br /> you've come to the right place
              </p>
              <Link to="/products/" className="link">
                <button>
                  Shop Now <EastOutlined />
                </button>
              </Link>
            </section>

            <img src={sliderPhoto1} alt="" />
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
