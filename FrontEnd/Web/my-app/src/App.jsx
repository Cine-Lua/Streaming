import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/Login/LoginUser";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payment/Payment";
import CongratulationPayment from "./pages/Payment/Congratulation";
import FailPayment from "./pages/Payment/Fail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/congratulation" element={<CongratulationPayment />} />
        <Route path="/payments/fail" element={<FailPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
