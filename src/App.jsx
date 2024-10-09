import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project"; 
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import projectData from "./projectData.json";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProjectGallery" element={<ProjectGallery />}>
          <Route
            path="/ProjectGallery/Project/:id"
            element={<Project myProjects={projectData} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
