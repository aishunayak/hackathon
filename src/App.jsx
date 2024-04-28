import React from "react";
import sign from "../public/sign.png";
import Nav from "../src/components/nav";
import Anim from "../public/animation.mp4";
import Anim1 from "../src/assets/image0.png";


import TypewriterComponent from "./components/type";

const App = () => {
  return (
    <div>
      <div>
        <Nav />
        <main>
          <div className="flex">
            <div className="main hero">
              <div className="cnt">
                <div id="quote">
                  Share Your{" "}
                  <span className="main-txt">
                    {" "}
                    Feelings <br />{" "}
                  </span>{" "}
                  By
                  <span className="main-txt"> Actions</span>.
                </div>
                <div id="underquote">
                  Here,You can easily talk with your <br />
                  fellow's by sign language Translator.
                </div>
                <div className="login">
                  <button type="button" id="register">
                    Ready To Talk
                  </button>
                </div>
              </div>
              <div className="cnt">
                <div class="animation">
                  <img id="anim1" src={Anim1} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="box orange"></div>
            <div className="box voilet"></div>
            <div className="box yellow"></div>
            <div className="box green"></div>
            <div className="box blue"></div>
          </div>
          <div className="screen">
            <p className="heading">
              Make your life easy by using this SIGN TALK translator! Talk
              without any Hesitation.
            </p>
            <div className="mario">
              <video muted loop autoPlay src={Anim}></video>
            </div>
            <div className="text">
              <div class="wrapper">
                <div class="typing-demo">
                  Hii Friend,I m mario..! with you...!
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="footer">
          <img id="footimg" src={sign} />
          <p id="sologan">Made with ❤️ by CONSOLE COMMANDOS</p>
        </div>
        <div class="end"></div>
      </div>
    </div>
  );
};

export default App;
