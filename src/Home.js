import React from "react";
import "../src/style/style.css";

import Navbar from "./components/navbar";
import myImage from './img/pic1.png'; 
import myImage2 from './img/pic2.png'; 
function Home() {
  return (
    <div className="mt-5">
      <Navbar />
      <div>
        <span className="first-title">Welcome to our Community!</span>
        <p className="def-parg">
          Our website is a dedicated platform for developers, programmers, and
          technology enthusiasts to ask questions, share knowledge, and find
          solutions. Whether you're a beginner or an experienced professional,
          this is the place to connect with a vibrant community of experts.
        </p>
        <img className="pic-1" src={myImage} alt=""/>
          <p className="second-title">
            Get answers to your burning questions from our community of
            passionate developers
          </p>

        <div className="box3">
          <p className="titlehome">Why choose our platform?</p>
          <p className="title1-box">Fast and reliable answers.</p>
          
          <p className="parg-box">
            Our community consists of experienced developers who are eager to
            help you find solutions to your coding challenges in a timely
            manner.
          </p>
          <p className="title2-box">Diverse knowledge base.</p>
          
          <p className="parg2-box">
            With thousands of active members, you'll find a wide range of
            expertise covering various programming languages, frameworks, and
            technologies.
          </p>
          <p className="title3-box">Collaborative learning environment.</p>

          <p className="parg3-box">
            Our platform fosters collaboration and encourages learning through
            discussions, code sharing, and the exchange of ideas among
            community members.
          </p>
          <img className="pic-2" src={myImage2} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;
