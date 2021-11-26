import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Features from "./Components/Features/Features";
import Extensions from "./Components/Extension/Extensions";
import Questions from "./Components/Questions/Questions";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </Router>
      <Landing />
      <Features />
      <Extensions />
      <Questions />
      <Footer/>
    </div>
  );
}

export default App;
