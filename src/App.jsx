import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import Home_Page from "./pages/Home_Page";
import Loader from "./components/loaderComponents/Loader";


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 5000);
  }, []);

  return (
    <Router>
      {!isLoaded ? (
       <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home_Page />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
