import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Friends from "./Pages/Friends";
import Help from "./Pages/Help";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/friends" element={<Friends />} />
          <Route path="/dashboard/help" element={<Help />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
