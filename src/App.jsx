import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import Home_Page from "./pages/Home_Page";
import Loader from "./components/loaderComponents/Loader";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundAndCancellationPolicy from "./pages/RefundAndCancellationPolicy";
import ShippingAndDeliveryPolicy from "./pages/ShippingAndDeliveryPolicy";


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 5000);
  }, []);

  return (
    <BrowserRouter>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home_Page />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
            <Route path="/shipping-and-delivery-policy" element={<ShippingAndDeliveryPolicy />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
