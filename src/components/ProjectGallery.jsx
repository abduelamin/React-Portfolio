import React from "react";
import "../styles/ProjectGallery.css";
import { NavLink, Outlet } from "react-router-dom";
import cryptopulse from "../assets/cryptopulseapp.png";
import aibot from "../assets/aibot.png";
import cartSwipe from "../assets/cartswpe-Screenshot.png";
import dreamnest from "../assets/dreamnest.png";
import invai from "../assets/InvAI.png";

const projects = {
  InvAI: {
    title: "Inv-AI",
    deployedLink: "https://inv-ai.vercel.app/",
    githubLink: "https://github.com/abduelamin/InvAI",
    image: invai,
    description:
      "Inv-AI is a pharma inventory management app powered by AI. It helps companies track inventory and uses predictive analytics to forecast stock expiration based on recent usage. The platform also generates weekly reports that provide insights into inventory additions, removals, forecasts, and future needs. Built as a full-stack app with Next.js, Tailwind CSS, and OpenAI, Inv-AI offers a modern and efficient solution for inventory tracking and management.",
  },
  DreamNestTravel: {
    title: "Dream Nest Travel",
    deployedLink: "https://dream-travel-five.vercel.app/",
    githubLink: "https://github.com/abduelamin/DreamTravel",
    image: dreamnest,
    description:
      "Dream Nest Travel is a full-stack rental platform built with React, Node.js, Express, PostgreSQL, and Tailwind CSS. Users can create profiles, list properties, make bookings, and manage their wishlist. AWS services are used for image uploads and storage, providing a seamless experience for hosts and travelers alike.",
  },
  CartSwipe: {
    title: "Cart Swipe",
    deployedLink: "https://cartswipe.netlify.app/",
    githubLink: "https://github.com/abduelamin/CartSwipe",
    image: cartSwipe,
    description:
      "Introducing CartSwipe – an immersive e-commerce platform that elevates online shopping to an engaging experience. Seamlessly integrating React.js, React Hook Form, and JWT authentication, CartSwipe ensures smooth user interactions while showcasing the dynamic synergy of frontend and backend technologies.",
  },
  CryptoPulse: {
    title: "Crypto Pulse",
    deployedLink: "https://cryptopulseapp.netlify.app/",
    githubLink: "https://github.com/abduelamin/CryptoPulse",
    image: cryptopulse,
    description:
      "Discover real-time cryptocurrency prices with our app. Track top movers, explore the top 20 coins by market cap, and dive into detailed coin info and charts. Stay informed and make smart decisions in the dynamic world of digital currencies.",
  },
  StudyBuddy: {
    title: "Study Buddy",
    deployedLink: "https://studybuddy-ai.netlify.app/",
    githubLink: "https://github.com/abduelamin/Study-Buddy",
    image: aibot,
    description:
      "Introducing StudyBuddy– a revolutionary AI-powered chatbot tailored exclusively to cater to your web development queries and curiosities. Crafted meticulously from the ground up, StudyBuddy is more than just a digital assistant; it's your personal guide through the vast realm of web development knowledge.",
  },
};

const ProjectGallery = () => {
  return (
    <div className="work__container">
      {Object.entries(projects).map(([key, project]) => (
        <div className="work__project" key={key}>
          <img src={project.image} alt={project.title} className="work__img" />
          <div className="work__overlay">
            <div className="work__text">
              <h3 className="work__project-title">{project.title}</h3>
              <p className="work__project-description">{project.description}</p>
              <div className="project__links">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
