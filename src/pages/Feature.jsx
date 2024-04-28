import { Link } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";

const Feature = () => {
  return (
    <>
        {/* Navbar Start */}
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
              <h1 class="display-4 text-white animated zoomIn">Features</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/feature" className="h5 text-white">
                Features
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      <FeaturesSection />
    </>
  );
};
export default Feature;