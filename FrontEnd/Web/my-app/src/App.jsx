import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/Login/LoginUser";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Home from "./pages/Home/Home"; // ou onde está sua Home

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
