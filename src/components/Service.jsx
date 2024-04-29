const Service = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">
            Custom IT Solutions for Your Successful Business
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-shield-alt text-white"></i>
              </div>
              <h4 className="mb-3">Web Application</h4>
              <p className="m-0">
                A web application is a computer program that uses web browsers
                and web technology to perform tasks over the Internet. They can
                be used for a variety of purposes, such as webmail, online
                retail sales, and online banking.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white"></i>
              </div>
              <h4 className="mb-3">Data Analytics</h4>
              <p className="m-0">
                Data Analytics is the process of examining data sets to draw
                conclusions about the information they contain. It is widely
                used for making decisions and predictions based on data.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white"></i>
              </div>
              <h4 className="mb-3">Website Development</h4>
              <p className="m-0">
                Website Development involves creating, building, and maintaining
                websites using various programming languages. It encompasses
                aspects like web design, web publishing, and database
                management.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-android text-white"></i>
              </div>
              <h4 className="mb-3">Apps Development</h4>
              <p className="m-0">
                App Development involves creating software that operates on
                mobile devices using various programming languages. It includes
                defining, designing, building, and launching a successful mobile
                product.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-search text-white"></i>
              </div>
              <h4 className="mb-3">Salesforce</h4>
              <p className="m-0">
                Salesforce is a cloud-based customer relationship management
                (CRM) platform that helps businesses connect with their
                customers. It streamlines and automates daily processes across
                various teams with its suite of applications.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us For Quote</h3>
              <p className="text-white mb-3">
                Ready to Transform Your Business? Request a Free IT Quote!
              </p>
              <h2 className="text-white mb-0">+91 6303 186 008</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
