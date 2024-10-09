import React, { useEffect } from "react";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGit,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to(".heroSection", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.to(".techStack", {
      opacity: 1,
      y: 0,
      duration: 5,
      delay: 1,
      ease: "power3.out",
    });
    gsap.to(".icon", {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 360,
      duration: 1,
      stagger: 0.2,
      delay: 1.5,
      ease: "back.out(1.7)",
    });
    gsap.to(".aboutMe", { opacity: 1, duration: 1, delay: 1.5 });
  }, []);

  return (
    <>
      <section className="heroSection" style={{ opacity: 0 }}>
        <h1>Full-STACK DEVELOPER</h1>
        <div className="introText">
          <p>
            A passionate <strong>Full-Stack Developer</strong> committed to
            transforming visionary concepts into impactful digital experiences.
            My expertise spans both front-end and back-end development, allowing
            me to design and implement web applications that not only enhance
            user interactions but also drive functionality. With a strong
            emphasis on <strong>UI/UX principles</strong>, I strive to create
            solutions that are not just aesthetically pleasing but also
            user-centric, exceeding expectations in the fast-paced digital
            landscape. I embrace challenges as opportunities to grow, constantly
            seeking to innovate and expand my technical repertoire.
          </p>
        </div>
      </section>
      <section
        className="techStack"
        style={{ opacity: 0, transform: "translateY(-50px)" }}
      >
        <div className="iconContainer">
          <FontAwesomeIcon icon={faHtml5} className="icon " />
          <FontAwesomeIcon icon={faCss3Alt} className="icon" />
          <FontAwesomeIcon icon={faJs} className="icon" />
          <FontAwesomeIcon icon={faReact} className="icon rotating-icon" />
          <FontAwesomeIcon icon={faNodeJs} className="icon" />
          <FontAwesomeIcon icon={faGit} className="icon" />
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </div>
      </section>
      <section className="aboutMe" style={{ opacity: 0 }}>
        <div className="textContainer">
          <p>
            🚀 Hello! I'm Abdullah Elamin, a dynamic Full-Stack Developer with a
            passion for crafting immersive digital solutions. My journey has
            equipped me with a robust skill set, including proficiency in HTML,
            CSS, JavaScript, React, Node.js, and PostgreSQL. I excel at creating
            intuitive user interfaces and mastering API development and database
            management. With a commitment to continuous learning, I view each
            project as a chance to push my boundaries.
            <br />
            <br />
            💡 My focus on UI/UX excellence inspires me to develop intuitive and
            engaging solutions that elevate user satisfaction. I embrace each
            challenge as a chance to learn and grow, exploring new technologies
            and methodologies that allow me to create innovative digital
            experiences. This mindset fuels my drive to deliver solutions that
            not only fulfill requirements but also create a lasting impact on
            users.
            <br />
            <br />
            🌐 Explore my portfolio, where creativity meets technical expertise.
            Let’s collaborate to build exceptional digital solutions that drive
            success!
          </p>
        </div>
        <div className="profileImageContainer">
          <img
            src={profileImage}
            alt="My profile picture"
            className="profileImage"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
