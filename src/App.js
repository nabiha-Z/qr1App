import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { stickyHeader } from "./Utilities/stickyHeader";
/* import { ExternalJsCall } from "./Utitlies/LoadExternalJs"; */
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

import Signin from "./Components/Signin";
import Menu from "./Components/New/Menu/Menu";
import Dashboard from "./Components/New/Dashboard";
import Survey from "./Components/New/Survey/Survey";

import CreateMenuItem from "./Components/New/Menu/CreateMenuItem";
import UploadMenu from "./Components/New/Menu/UploadMenu";
import ViewItems from "./Components/New/ViewItems";
import EditMenu from "./Components/New/Menu/EditMenu";

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
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/menu" element={<UploadMenu />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Menu />} />
              <Route path="/dashboard/menu" element={<Menu />} />
              <Route path="/dashboard/survey" element={<Survey />} />
              <Route path="/dashboard/upload-menu" element={<UploadMenu />} />

              <Route
                path="/dashboard/create-menu"
                element={<CreateMenuItem />}
              />
              <Route
                path="/dashboard/view-items"
                element={<ViewItems text="Restaurant" />}
              />

              <Route path="/dashboard/edit-items" element={<EditMenu />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
