import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Vendor = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToScroll: 3,
    slidesToShow: 8,
  };
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <Slider {...settings}>
            <div className="vendor-slide">
              <img src="img/vendor-1.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-2.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-3.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-4.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-5.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-6.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-7.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-8.jpg" alt="vendor" />
            </div>
            <div className="vendor-slide">
              <img src="img/vendor-9.jpg" alt="vendor" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Vendor;
