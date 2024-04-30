const FeaturesSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
          <h1 className="mb-0">
            We Are Here to Grow Your Business Exponentially
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-cubes text-white"></i>
                </div>
                <h4>Best In Industry</h4>
                <p className="mb-0">
                  Pioneering excellence, our company stands as the best in the
                  industry, setting new benchmarks with our innovative solutions
                  and unwavering commitment to quality.
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-award text-white"></i>
                </div>
                <h4>Award Winning</h4>
                <p className="mb-0">
                  With a legacy of award-winning performance, we continue to
                  push the boundaries, earning accolades for our innovative
                  approach and commitment to quality.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4  wow zoomIn"
            data-wow-delay="0.9s"
            style={{ minHeight: "350px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.1s"
                src="img/feature.jpg"
                style={{ objectFit: "cover" }}
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-users-cog text-white"></i>
                </div>
                <h4>Professional Staff</h4>
                <p className="mb-0">
                  Committed to excellence, our professional staff consistently
                  deliver outstanding service, embodying our values and driving
                  our company forward.
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <h4>24/7 Support</h4>
                <p className="mb-0">
                  Providing 24/7 support, we are always there for our customers,
                  ensuring seamless service and immediate assistance at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
