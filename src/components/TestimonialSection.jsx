import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightblue" }}
      onClick={onClick}
    />
  );
}

const TestimonialSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const testimonials = [
    {
      name: "Client Name 1",
      profession: "Profession 1",
      content:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imageSrc: "img/testimonial-1.jpg",
    },
    {
      name: "Client Name 2",
      profession: "Profession 2",
      content:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imageSrc: "img/testimonial-2.jpg",
    },
    {
      name: "Client Name 3",
      profession: "Profession 3",
      content:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imageSrc: "img/testimonial-3.jpg",
    },
    {
      name: "Client Name 4",
      profession: "Profession 4",
      content:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imageSrc: "img/testimonial-2.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">
            What Our Clients Say About Our Digital Services
          </h1>
        </div>
        <div
          className="testimonial-carousel wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src={testimonial.imageSrc}
                      style={{ width: "60px", height: "60px" }}
                      alt={`Client Testimonial ${index + 1}`}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">{testimonial.name}</h4>
                      <small className="text-uppercase">
                        {testimonial.profession}
                      </small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">{testimonial.content}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
