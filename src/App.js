import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { stickyHeader } from "./Utilities/stickyHeader";
/* import { ExternalJsCall } from "./Utitlies/LoadExternalJs"; */
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import CreateMenu from "./Components/CreateMenu";
import Survey from "./Components/Survey";
import Restaurant from "./Components/Restaurant";
import Register from "./Components/Register";
import CreateQR from "./Components/CreateQR";
import Signin from "./Components/Signin";

import Dashboard from "./Components/New/Dashboard";

import CreateSurvey from "./Components/New/CreateSurvey";

function App() {
  useEffect(() => {
    stickyHeader();
  }, []);
  const [activeTab, setActiveTab] = useState("HOME");
  const homeTabHandler = () => {
    setActiveTab("HOME");
  };
  const dashTabHandler = () => {
    setActiveTab("DASH");
  };
  return (
    <div className="main-body">
      <div className="horizontalMenucontainer">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create-qr" element={<CreateQR />} />
            <Route path="/mydash" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/create-survey" element={<CreateSurvey />} />
            <Route path="/create-menu" element={<CreateMenu />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
