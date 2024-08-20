//router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

//pages
import About from "./pages/About.jsx";
import Home from "./pages/Home";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Detail from "./pages/Detail.jsx";
import Price from "./pages/Price.jsx";
import Feature from "./pages/Feature.jsx";
import Team from "./pages/Team.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Quote from "./pages/Quote.jsx";
import Contact from "./pages/Contact.jsx";

//components
import Spinner from "./components/Spinner.jsx";
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar.jsx";
import FullScreenSearch from "./components/FullScreenSearch.jsx";
import Vendor from "./components/Vendor.jsx";
import Footer from "./components/Footer.jsx";
import BackToUp from "./components/BackToUp.jsx";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <FullScreenSearch />
      {/* <Vendor /> */}
      <Footer />
      <BackToUp />
      {/* <Spinner /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
