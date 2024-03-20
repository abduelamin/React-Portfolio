import React from "react";
import "../styles/ProjectGallery.css";
import { NavLink, Outlet } from "react-router-dom";
import Solarapp from "../assets/Solarapp.png";
import Teamprofile from "../assets/Teamprofile.png";
import Weatherapp from "../assets/Weatherapp.png";
import cryptopulse from "../assets/cryptopulseapp.png";

const ProjectGallery = () => {
  return (
    <>
      <div className="work__container">
        {/* <!-- Project 1 --> */}
        <div className="work__project">
          <img
            src={cryptopulse}
            alt="Wax Motif website"
            className="work__img"
          />

          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Crypto Pulse</h3>
              <p className="work__project-description">
                Discover real-time cryptocurrency prices with our app. Track top
                movers, explore the top 20 coins by market cap, and dive into
                detailed coin info and charts. Stay informed and make smart
                decisions in the dynamic world of digital currencies.
              </p>
              <br />
              <NavLink to="/ProjectGallery/Project/TeamCardGenerator">
                <button className="explore">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <!-- Project 2 --> */}

        <div className="work__project">
          <img src={Solarapp} alt="Project 2" className="work__img" />{" "}
          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Sunny Solar</h3>
              <p className="work__project-description">
                Unveiling the Solar App – an end-to-end masterpiece meticulously
                crafted to empower homeowners in their transition to renewable
                energy. This app goes beyond aesthetics. It's a beacon of
                knowledge for homeowners, unraveling the mysteries of solar
                potential, making informed decisions about harnessing clean
                energy. Not just an app, but a solution to a real-world problem
                in the era of renewable energy transition.
              </p>
              <br />
              <NavLink to="/ProjectGallery/Project/SunnySolar">
                <button className="explore">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <!-- Project 3 --> */}

        <div className="work__project">
          <img src={Weatherapp} alt="Project 3" className="work__img" />
          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Weather App</h3>
              <p className="work__project-description thirdProjectDesc">
                Introducing the Weather App – Step into a world where weather
                updates are not just information but an interactive journey into
                the atmospheric dynamics, turning routine checks into delightful
                experiences.
              </p>
              <br />
              <NavLink to="/ProjectGallery/Project/Weatherapp">
                <button className="explore">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProjectGallery;
