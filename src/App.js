import "./App.css";
import { Link } from "react-router-dom";
import graphic1 from "./Assets/graphic1.png";
import chat from "./Assets/chats.svg";
import dots from "./Assets/dots.svg";

import Foorter from "./Components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="Home">
        <div className="Home_nav">
          <div className="Home_nav_logo">diversea. </div>
          <div className="Home_nav_links">
            <a className="Home_nav_link" href="#">
              Home
            </a>

            <a className="Home_nav_link">About</a>

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

      <Foorter />
    </div>
  );
}

export default App;
