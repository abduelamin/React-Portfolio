// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project"; // This will by dynamic params
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectGallery" element={<ProjectGallery />}>
          <Route path="/ProjectGallery/Project/:id" element={<Project />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
