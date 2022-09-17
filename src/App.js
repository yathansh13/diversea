import "./App.css";
import { Link } from "react-router-dom";
import graphic1 from "./Assets/graphic1.png";
import chat from "./Assets/chats.svg";
import dots from "./Assets/dots.svg";
import { useRef } from "react";
import lgbt from "./Assets/diverse.svg";
import bdots from "./Assets/bdots.svg";
import wdots from "./Assets/wdots.svg";
import gathering from "./Assets/laughter.svg";
import stars from "./Assets/stars.svg";
import Foorter from "./Components/Footer/Footer";

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="page">
      <div className="Home">
        <div className="Home_nav">
          <div className="Home_nav_logo">diversea. </div>
          <div className="Home_nav_links">
            <a className="Home_nav_link" href="#">
              Home
            </a>

            <a className="Home_nav_link" onClick={handleClick}>
              About
            </a>

            <a className="Home_nav_link" href="#">
              Sign up
            </a>
            <a className="Home_nav_button" href="#">
              Profile
            </a>
          </div>
        </div>
        <div className="Home_mid">
          <div className="Home_mid_right">
            <p className="Home_mid_header">Meet your best stranger.</p>
            <p className="Home_mid_desc">Strangers that know you better!</p>
            <div className="Home_mid_right_button">
              <Link style={{ textDecoration: "none" }} to="/Chat">
                <a className="Home_mid_button1"> Chats </a>
              </Link>
              <a className="Home_mid_button2"> Profile </a>
            </div>
          </div>

          <div className="Home_mid_left">
            <img className="Home_graphic" src={graphic1} />
          </div>
        </div>
      </div>
      <div className="friends">
        <p className="friends_head">Your Friends</p>
        <p className="friends_desc">
          After profile creation, our algorithm matches profile from diverse
          background on the basis of the information provided by the users and
          giving them a choice to initiate a converasation, They later also get
          the option to reveal their identities which is completely optional.
        </p>
        <div className="Friend_image_container">
          <img className="friends_dots" src={dots} />
          <img className="friends_dots2" src={dots} />

          <img className="friends_img" src={chat} />
        </div>
      </div>
      <div className="empathy" ref={ref}>
        <div className="empathy_left">
          <img className="empathy_img" src={lgbt} />
          <p className="diver">
            diver<span className="sea">sea</span>
          </p>
        </div>
        <div className="empathy_right">
          <p className="empathy_about">ABOUT US</p>
          <p className="empathy_title">
            Lack of empathy towards different cultures.
          </p>
          <p className="empathy_desc">
            We have instituted an anonymous moderated chat system to protect the
            right to privacy of our users and streamline better communication.
            Thus eliminating prejudice and encouraging open-mindedness towards
            people of a different race, religions, sex, etc.
          </p>
          <Link style={{ textDecoration: "none" }} to="/Chat">
            <a className="Home_mid_button1">Start chatting</a>
          </Link>
        </div>
      </div>
      <div className="yellow">
        <div className="yellow_left">
          <img className="yellow_dots" src={wdots} />
          <img className="yellow_dots2" src={bdots} />

          <img className="yellow_img" src={gathering} />
        </div>
        <div className="yellow_right">
          <p className="yellow_right_header">
            Perfect Place for meeting new people.
          </p>
          <p className="yellow_right_desc">
            Find of diverse profiles from all over the world.
          </p>
          <div className="yellow_right_button">
            <Link style={{ textDecoration: "none" }} to="/Chat">
              <a className="yellow_right_button1"> Chats </a>
            </Link>
            <a className="yellow_right_button2"> Profile </a>
          </div>
          <svg
            width="167"
            height="1"
            viewBox="0 0 167 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="167" y2="0.5" stroke="black" />
          </svg>
          <div className="review">
            <img src={stars} className="review_stars" />
            <p className="review_desc">
              <span className="bold">5,200 users</span> use diversea and they
              rate it as <span className="bold">5-stars</span>
            </p>
          </div>
        </div>
      </div>

      <Foorter />
    </div>
  );
}

export default App;
