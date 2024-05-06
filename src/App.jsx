import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="menu" element={<Menu />} /> */}
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
