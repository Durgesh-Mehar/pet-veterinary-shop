import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Navbar/Header'; 
import Footer from './components/Navbar/Footer';
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PetsList from "./components/Dashboard/PetsList";
import ServicesList from "./components/Dashboard/ServicesList";
import Home from "./components/Dashboard/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard/pets" element={<PetsList/>} />
        <Route path="/dashboard/services" element={<ServicesList/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
