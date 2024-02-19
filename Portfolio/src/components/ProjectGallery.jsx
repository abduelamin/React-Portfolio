import React from "react";
import "../styles/ProjectGallery.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Solarapp from "../assets/Solarapp.png";
import Teamprofile from "../assets/Teamprofile.png";
import Weatherapp from "../assets/Weatherapp.png";

const ProjectGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="work__container">
        {/* <!-- Project 1 --> */}
        <div className="work__project">
          <img
            src={Teamprofile}
            alt="Wax Motif website"
            className="work__img"
          />

          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">Team Card Generator</h3>
              <p className="work__project-description">
                Embark on a journey through the intricacies of corporate team
                management with my Team Generator App. Leveraging the power of
                Node.js, this server-side marvel employs the art of
                object-oriented programming and Inquirer to seamlessly create
                visually appealing cards for every member of your professional
                ensemble. Witness the fusion of technology and teamwork in
                action.
              </p>
              <br />
              {/* <NavLink to="/ProjectGallery/Project/TeamCardGenerator"> */}
              <button
                className="explore"
                onClick={() => {
                  navigate("/ProjectGallery/Project/TeamCardGenerator");
                }}
              >
                Explore
              </button>
              {/* </NavLink> */}
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
              <p className="work__project-description">
                Introducing the Weather App – a dynamic forecast powerhouse that
                transforms the mundane task of checking the weather into an
                immersive experience. Through seamless integration of APIs and
                JavaScript magic, this app not only forecasts the weather for
                any city but does so with flair. Step into a world where weather
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

{
  /* <div class="work__container">grid<!-- Project 1 --></div><h3 class="work__project-title">Wax Motif</h3><div class="work__img-wrapper work__image1"><img class="lazy loaded" src="/waxmoney.png" data-src="/waxmoney.png" alt="Wax Motif website">::after</div><div class="work__project work__content1">…</div> */
}
