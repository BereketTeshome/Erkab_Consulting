import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Overview = lazy(() => import("./pages/Overview"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Teams = lazy(() => import("./pages/Teams"));
const Training = lazy(() => import("./pages/Training"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Pricing = lazy(() => import("./pages/Pricing"));

const BusinessOrganizationForm = lazy(() =>
  import("../forms/Business Organization")
);
const IndividualTraining = lazy(() => import("../forms/Individual Training"));
const BusinessDevelopmentService = lazy(() =>
  import("../forms/Business development service")
);

const News = lazy(() => import("./pages/News"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/trainings" element={<Training />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route
              path="/trainingIndividual"
              element={<IndividualTraining />}
            />
            <Route
              path="/businessOrganizations"
              element={<BusinessOrganizationForm />}
            />
            <Route path="/bds" element={<BusinessDevelopmentService />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
