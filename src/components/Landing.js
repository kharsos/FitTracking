import "./landing.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Routes, Route, Link, json, useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  const handelNavigatSignUp = () => {
    navigate("/SignUp");
  };

  const handelNavigatSignIn = () => {
    navigate("/SignIn");
  };
  return (
    <>
      <section class="showcase">
        <header>
          <h2 class="logo">FitTracker</h2>
          <div class="toggle" onclick={handelNavigatSignIn}>
            SignIn
          </div>
        </header>

        <div class="overlay"></div>
        <div class="text">
          <h2>Achieve your goals</h2>
          <h3>with FitTracker</h3>
          <p>
            Embrace the power of transformation; every small shift in your daily
            habits is a step towards crafting the extraordinary life you
            deserve. Change is not just a choice, but a courageous commitment to
            becoming the best version of yourself. Start today, rewrite your
            habits, and watch your life unfold in remarkable ways
          </p>
          <a href="#" onClick={handelNavigatSignUp}>
            Start Now
          </a>
        </div>
        <ul class="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png"></img>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
