import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { Payment } from "./pages/payment";
import { Success } from "./pages/success";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
