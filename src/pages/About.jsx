import AboutSection from "../components/AboutSection";
import Team from "../components/Team";

const About = () => {
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
              <h1 className="display-4 text-white animated zoomIn">About Us</h1>
              <a href="/" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="/about" className="h5 text-white">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      {/* <Team /> */}
    </>
  );
};
export default About;
