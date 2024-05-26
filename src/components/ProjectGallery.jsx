import React from "react";
import "../styles/ProjectGallery.css";
import { NavLink, Outlet } from "react-router-dom";
import Solarapp from "../assets/Solarapp.png";
import Teamprofile from "../assets/Teamprofile.png";
import Weatherapp from "../assets/Weatherapp.png";
import cryptopulse from "../assets/cryptopulseapp.png";
import aibot from "../assets/aibot.png";
import cartSwipe from "../assets/cartswpe-Screenshot.png";

const ProjectGallery = () => {
  return (
    <>
      <div className="work__container">
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
              <NavLink to="/ProjectGallery/Project/CryptoPulse">
                <button className="explore">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <!-- Project 2 --> */}

        <div className="work__project">
          <img src={aibot} alt="Project 2" className="work__img" />{" "}
          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Study Buddy</h3>
              <p className="work__project-description">
                A revolutionary AI-powered chatbot tailored exclusively to cater
                to your web development queries and curiosities. Crafted
                meticulously from the ground up, StudyBuddy is more than just a
                digital assistant; it's your personal guide through the vast
                realm of web development knowledge.
              </p>
              <br />
              <NavLink to="/ProjectGallery/Project/StudyBuddy">
                <button className="explore">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* <!-- Project 3 --> */}

        <div className="work__project">
          <img src={cartSwipe} alt="Project 3" className="work__img" />
          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Cart Swipe</h3>
              <p className="work__project-description thirdProjectDesc">
                A fullstack e-commerce marvel, seamlessly blending React.js,
                Node.js, Express.JS and MongoDB to elevate online shopping to an
                immersive experience, it's where frontend finesse meets backend
                brilliance.
              </p>
              <br />
              <NavLink to="/ProjectGallery/Project/CartSwipe">
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
