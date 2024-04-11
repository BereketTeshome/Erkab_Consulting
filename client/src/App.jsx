import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Overview from "./pages/Overview";
import Testimonials from "./pages/Testimonials";
import Teams from "./pages/Teams";
import Training from "./pages/Training";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/trainings" element={<Training />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
