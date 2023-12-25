import React from "react";
import "./Project.css";
import insta from "./insta.avif";
import lan from "./language-communication-message-written.jpg";
import food from "./food.webp";
import news from "./2661573.jpg";
import code from "./code.jpg";
import yoga from "./one-hiking-lifestyle-summer-yoga.jpg";
import git from "./github-logo (1).png";
function Project() {
  return (
    <div id="projects">
      <h1 className="pro">Projects</h1>
      <div className="project">
        <div className="p">
          <div className="overlay">
            <h3>Quizlingo</h3>
            <p>A Language Learning App</p>
            <p>Interactive quizes and Leaderboard</p>
            <div className="demo">
              <a href="https://github.com/sahil0605/learn-app" target="_blank">
                <img src={git}></img>
              </a>
              <a
                href="https://www.youtube.com/watch?v=3VsrVEKIeSw"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
          <img src={lan} alt="Project 1" />
        </div>
        <div className="p">
          <div className="overlay">
            <h3>Code-Play</h3>
            <p>A Coding Playground.</p>
            <p>Learn HTML, CSS and Javascript.</p>
            <div className="demo">
              <a
                href="https://github.com/sahil0605/code-playground"
                target="_blank"
              >
                <img src={git}></img>
              </a>
              <a
                href="https://6535f0ee42df0668251574d7--lambent-hotteok-f8d1a9.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
          <img src={code} alt="Project 1" />
        </div>
        <div className="p">
          <div className="overlay">
            <h3>Yogi</h3>
            <p>A Yoga class booking web-page</p>
            <p>You can take any yoga class and change after a month</p>
            <div className="demo">
              <a href="https://github.com/sahil0605/flex-money" target="_blank">
                <img src={git}></img>
              </a>
              <a href="https://www.youtube.com/watch?v=YvZQu4n1mt0" target="_blank">
                Demo
              </a>
            </div>
          </div>
          <img src={yoga} alt="Project 1" />
        </div>
        <div className="p">
          <div className="overlay">
            <h3>News Web</h3>
            <p>A News wep-page with global news.</p>
            <p>Fetched news using API.</p>
            <div className="demo">
              <a href="https://github.com/sahil0605/global-glimpse" target="_blank">
                <img src={git}></img>
              </a>
              <a href="https://www.youtube.com/watch?v=gh8DOqx_We0" target="_blank">
                Demo
              </a>
            </div>
          </div>
          <img src={news} alt="Project 1" />
        </div>
        <div className="p">
          <div className="overlay">
            <h3>Instagram-Clone</h3>
            <p>A clone of Instagram.</p>
            <p>You can perform follow/unfollow , like/dislike and many more.</p>
            <div className="demo">
              <a href="https://github.com/sahil0605/clone-insta-frontend" target="_blank">
                <img src={git}></img>
              </a>
              <a href="#" target="_blank">
                Demo
              </a>
            </div>
          </div>
          <img src={insta} alt="Project 1" />
        </div>
        <div className="p">
          <div className="overlay">
            <h3>Food-Web</h3>
            <p>A food web-page.</p>
            <p>You can order food instantly.</p>
            <div className="demo">
              <a href="https://github.com/sahil0605/food-ordering-web" target="_blank">
                <img src={git}></img>
              </a>
              <a href="https://food-on-door.onrender.com/" target="_blank">
                Demo
              </a>
            </div>
          </div>
          <img src={food} alt="Project 1" />
        </div>
      </div>
    </div>
  );
}

export default Project;
