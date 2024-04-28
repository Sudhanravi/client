import { Link } from "react-router-dom";
import Service from "../components/Service";
// import Testimonial from "../components/TestimonialSection";
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

const Services = () => {
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

  const tools = [
    {
      name: "DevOps",
      content:
        "DevOps is more than just a set of tools; it is a culture and a mindset that focuses on collaboration, automation, and continuous improvement. At BigOhTech, we specialize in helping businesses adopt DevOps practices to accelerate their digital transformation journey.",
    },
    {
      name: "Acumatica",
      content:
        "Acumatica is the premier cloud-based ERP system and one of the fastest-growing ERP solutions. It offers modules designed to optimize your business' performance by fitting to your unique business needs or adjusting as it changes",
    },
    {
      name: "Salesforce CRM",
      content:
        "Salesforce helps businesses keep track of customer interactions and sales data. It can manage leads, contacts, opportunities, and cases. Salesforce also offers several features to help businesses automate their sales and marketing processes, such as email marketing, lead capture, and lead scoring",
    },
    {
      name: "Dotnet",
      content:
        "NET is a free, cross-platform, open-source developer platform. .NET has languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.",
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      <div className="carousel-inner" style={{ marginBottom: "90px" }}>
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6">
              <img
                className="w-100 max-width-100"
                src="img/carousel-1.jpg"
                alt="Image 1"
              />
            </div>
            <div className="col-md-6">
              <img
                className="w-100 max-width-100"
                src="img/carousel-2.jpg"
                alt="Image 2"
              />
            </div>
          </div>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h1 class="display-4 text-white animated zoomIn">Services</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/services" className="h5 text-white">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Service />
      {/* <Testimonial /> */}

      {/* Tools we are using */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">TOOLS</h5>
            <h1 className="mb-0">Tools we are providing</h1>
          </div>
          <div
            className="testimonial-carousel wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <Slider {...settings}>
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="testimonial-item bg-light my-4" >
                    <div className="d-flex border-bottom pt-5 pb-4 justify-content-center">
                      <div className="ps-4">
                        <h4 className="text-primary mb-1">{tool.name}</h4>
                      </div>
                    </div>
                    <div className="pt-4 pb-5 px-5">{tool.content}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
