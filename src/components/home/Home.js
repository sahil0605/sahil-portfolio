import React, { useEffect } from "react";
import leetcode from "./leetcode.webp";
import github from "./github-logo (1).png";
import resume from "./resume.png";
import "./Home.css";
import myPic from './pic.jpg'


function Home() {
  useEffect(() => {
    const introText = document.querySelector(".intro");

    const animateWords = () => {
      const words = introText.textContent.split(" ");

      introText.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      let wordIndex = 0;
      const wordElements = document.querySelectorAll(".word");

      const showNextWord = () => {
        if (wordIndex < wordElements.length) {
          wordElements[wordIndex].classList.add("show");
          wordIndex++;
        } else {
          // Reset the animation
          wordElements.forEach((wordElement, index) => {
            setTimeout(() => {
              wordElement.classList.remove("show");
            }, index * 100); // Adjust the delay as needed
          });
          wordIndex = 0;
        }
      };

      setInterval(showNextWord, 1000); // Adjust the interval as needed
    };

    // Run the animation initially
    animateWords();
  }, []);

  return (
    <div  id="home">
      <div className="photo">
        <img src={myPic}></img>
      </div>
      <div className="home">
      <p className="intro">Full Stack Developer ...</p>
      <div className="description">
        I am a Dedicated Full Stack Developer with expertise in MERN stack
        Developement and DSA .
        
      </div>
      <div className="links">
        <ul>
          <li>
            <a
              href="https://leetcode.com/sahil0605/"
              target="/"
              data-tooltip="LeetCode"
            >
              <img src={leetcode} alt="LeetCode" />
              <p>Leetcode</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sahil0605"
              target="/"
              data-tooltip="GitHub"
            >
              <img src={github} alt="GitHub" />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1RM1KFme2b1PINNnxnJtpApmUMAdSWH3g/view?usp=sharing"
              target="/"
              data-tooltip="Resume"
            >
              <img src={resume} alt="Resume" />
              <p>Resume</p>
            </a>
          </li>
        </ul>
      </div>
      </div>
     
    </div>
    
  );
}

export default Home;
