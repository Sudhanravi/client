const AboutSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">
                The Best IT Solution With 7 Years of Experience
              </h1>
            </div>
            <p className="mb-4">
              Welcome to Dynamic, your trusted partner in cutting-edge software
              solutions. At Dynamic , we're passionate about harnessing the
              power of technology to solve complex problems and drive
              innovation. With a focus on creativity, collaboration, and
              excellence, we strive to empower businesses and individuals to
              thrive in the digital age.
            </p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Award Winning
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Professional
                  Staff
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>24/7 Support
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Fair Prices
                </h5>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+91 6303 186 008</h4>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i class="fa-solid fa-envelope text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Mail to ask any question</h5>
                <h4 className="text-primary mb-0">dynamicfixinfo@gmail.com</h4>
              </div>
            </div>
            <a
              href="/quote"
              className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
              data-wow-delay="0.9s"
            >
              Request A Quote
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
