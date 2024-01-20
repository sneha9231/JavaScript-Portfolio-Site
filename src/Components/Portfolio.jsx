/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/socials/kakashi.jpg";

const imageAltText = "kakashi WITH SHARINGAN";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My 1st game using javascript🎉",
    description:
      "I have created a game using javascript. It is a simple game when you have no internet access you jump the box by touching it. I have used HTML, CSS and Javascript to create this game.",
    url: "https://github.com/sneha9231/js_game",
  },
  {
    title: "Learning ML with Microsoft Learn",
    description:
      "Learnt some basics of ML with Microsoft Learn. I have learnt about the basics of ML and how to use it in real life. I have also learnt about the basics of python and how to use it in ML.",
    url: "https://github.com/sneha9231/emotion-based-music",
  },
  {
    title: "Contributed in Hacktoberfest 2023",
    description:
      "My first contribution in open source. I have contributed in Hacktoberfest 2023. I have contributed in devFind. I have added a new feature in devFind.",
    url: "https://github.com/sneha9231/devFind",
  },
  {
    title: "Made Chatbot using Azure Services",
    description:
      "Went to Jabalbur for Hackathon and built azure chatbot. I have used Azure services to create a chatbot. I have used Azure QnA maker, Azure Bot Service and Azure Web App Service to create a chatbot.",
    url: "https://github.com/sneha9231/chatbot",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
