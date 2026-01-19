import React from "react";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import Location from "./pages/Location";
import Program from "./pages/Program";
import DressCodeCard from "./pages/DressCodeCard"; 
import DetailsPage from "./pages/DetailsPage"; 

import Confirm from "./pages/Confirm";
import PhotoSection from "./pages/PhotoSection";

import "./App.css";


function App() {
  return (
   
      <div className="app">
    

        <Home />
        <Invite />
        <Location />
        <Program />
        <DressCodeCard /> 
        <DetailsPage />
        <Confirm />
        <PhotoSection />
      </div>
 
  );
}

export default App;
