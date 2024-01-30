import "./App.css";
import AboutUs from "./components/HomePage/AboutUs";
import Courses from "./components/HomePage/Courses";
import Footer from "./components/HomePage/Footer";
import NavAndHome from "./components/HomePage/NavAndHome";

function App() {
  return (
    <>
      <NavAndHome />
      <Courses />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
