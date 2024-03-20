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
        <h1>FRONT-END WEB DEVELOPER</h1>
        <div className="introText">
          <p>
            A passionate Junior <strong>FrontendWeb Developer</strong> ,
            dedicated to translating imaginative concepts into interactive
            digital realities. As a <strong>UI/UX enthusiast</strong>, I
            specialise in crafting pixel-perfect{" "}
            <strong>Websites/Applications</strong> to truly elevate the user
            experience in the ever-evolving digital space.
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
            🚀 Greetings! I'm <strong>Abdullah Elamin</strong>, a dynamic and
            versatile Frontend Web Developer, seamlessly blending precision with
            finesse in crafting digital wonders. With a solid foundation forged
            in the rigorous landscape of pharmaceuticals, my unwavering
            commitment to quality standards sets a resounding benchmark for
            perfection. But my journey doesn't stop there; fueled by an
            insatiable passion for continuous learning, every line of code
            becomes a canvas for innovation and achieving greatness.
            <br />
            <br />
            💡 As a skilled architect of the digital realm, my technical
            expertise spans HTML, CSS, JavaScript, and React, allowing me to
            breathe life into captivating and interactive user experiences. But
            what sets me apart is more than just code – it's a mindset. I thrive
            on challenges and embrace every project as an opportunity to push
            boundaries and redefine standards.
            <br />
            <br />
            🌐 Explore my portfolio, and you'll discover a fusion of innovation,
            collaborative leadership, and a relentless pursuit of excellence.
            Join me on this exhilarating journey where expertise meets
            innovation, and together, we'll create digital experiences that
            transcend expectations.
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
