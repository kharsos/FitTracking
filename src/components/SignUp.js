import { useState, Component, useEffect, react } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProfilePage from "./profile";
import "./style.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    fname: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
    BMI:""
  });
  const [errors, setErrors] = useState({});
  const [BMI,setBMI]=useState("")
  const handleSignUp = () => {
    const newErrors = {};
    if (!signup.fname.trim()) {
      newErrors.firstname = "first name is required";
    }
    if (!signup.email.trim()) {
      newErrors.email = "email name is required";
    }
    if (!signup.password.trim()) {
      newErrors.password = "password name is required";
    }
    if (signup.password.length < 8) {
      newErrors.password = "password most be more than 8 caracters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(signup.email)) {
      newErrors.email = "Email is not correct";
    }
    if (!signup.age.trim()) {
      newErrors.age= "age is required";
    }
    if (!signup.gender.trim()) {
      newErrors.gender = "gender is required";
    }
    if (!signup.activity.trim()) {
      newErrors.activity = "select an activity";
    }
    if (!signup.weight.trim()) {
      newErrors.weight= "weight  is required";
    }
    if (!signup.height.trim()) {
      newErrors.height = "height  is required";
    }
    // BMI
    if (signup.gender=== "male" && signup.activity === "1") {
      setBMI(
        1.2 *
        (66.5 +
          13.75 * parseFloat(signup.weight) +
          5.003 * parseFloat(signup.height) -
          6.755 * parseFloat(signup.age)))
    } else if (signup.gender=== "male" && signup.activity === "2") {
      setBMI(
        1.375 *
        (66.5 +
          13.75 * parseFloat(signup.weight) +
          5.003 * parseFloat(signup.height) -
          6.755 * parseFloat(signup.age)))
    } else if (signup.gender === "male" && signup.activity=== "3") {
      setBMI(
        1.55 *
        (66.5 +
          13.75 * parseFloat(signup.weight) +
          5.003 * parseFloat(signup.height) -
          6.755 * parseFloat(signup.age)))
    } else if (signup.gender === "male" && signup.activity === "4") {
      setBMI(
        1.725 *
        (66.5 +
          13.75 * parseFloat(signup.weight) +
          5.003 * parseFloat(signup.height) -
          6.755 * parseFloat(signup.age)))
    } else if (signup.gender === "male" && signup.activity === "5") {
      setBMI(
        1.9 *
        (66.5 +
          13.75 * parseFloat(signup.weight) +
          5.003 * parseFloat(signup.height) -
          6.755 * parseFloat(signup.age)))
    } else if (signup.gender === "female" && signup.activity=== "1") {
      setBMI(
        1.2 *
        (655 +
          9.563 * parseFloat(signup.weight) +
          1.85 * parseFloat(signup.height) -
          4.676 * parseFloat(signup.age)))
    } else if (signup.gender === "female" && signup.activity === "2") {
      setBMI(
        1.375 *
        (655 +
          9.563 * parseFloat(signup.weight) +
          1.85 * parseFloat(signup.height) -
          4.676 * parseFloat(signup.age)))
    } else if (signup.gender === "female" && signup.activity === "3") {
      setBMI(
        1.55 *
        (655 +
          9.563 * parseFloat(signup.weight) +
          1.85 * parseFloat(signup.height) -
          4.676 * parseFloat(signup.age)))
    } else if (signup.gender === "female" && signup.activity === "4") {
      setBMI(
        1.725 *
        (655 +
          9.563 * parseFloat(signup.weight) +
          1.85 * parseFloat(signup.height) -
          4.676 * parseFloat(signup.age)))
    } else {
      setBMI(
        1.9 *
        (655 +
          9.563 * parseFloat(signup.weight) +
          1.85 * parseFloat(signup.height) -
          4.676 * parseFloat(signup.age)))
    }

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("signUp", JSON.stringify(signup));
      localStorage.setItem("BMI", BMI);
      console.log(BMI)
      
      navigate("/Profil");
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <h1 className="create">Create Your Account</h1>
      <div className="Create">
        <form onSubmit={(e) => e.preventDefault()} className="signup">
            
          <label for="fname">Your First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="First Name"
            onChange={(e) => setSignup({ ...signup, fname: e.target.value })}
          ></input>
         
          {errors.firstname && <span>{errors.firstname}</span>}

          <label for="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          ></input>
          {errors.email && <span>{errors.email}</span>}

          <label for="password">Create a Password</label>
          <input
            type="password"
            id="password"
            placeholder="create password"
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          ></input>
          {errors.password && <span>{errors.password}</span>}

          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Ages 15-80"
            onChange={(e) => setSignup({ ...signup, age: e.target.value })}
          ></input>
          {errors.age && <span>{errors.age}</span>}

          <fieldset>
            <legend>Gender</legend>
            <label for="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => setSignup({ ...signup, gender: e.target.value })}
            ></input>

            <label for="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => setSignup({ ...signup, gender: e.target.value })}
            ></input>
          </fieldset>
          {errors.gender && <span>{errors.gender}</span>}
          <label for="weight">Weight</label>
          <input
            type="number"
            id="weight"
            placeholder="In kilograms"
            onChange={(e) => setSignup({ ...signup, weight: e.target.value })}
          ></input>
          {errors.weight && <span>{errors.weight}</span>}

          <label for="height">Height</label>
          <input
            type="number"
            id="height"
            placeholder="In centimeters"
            onChange={(e) => setSignup({ ...signup, height: e.target.value })}
          ></input>
            {errors.height && <span>{errors.height}</span>}
          <label for="activity">Activity</label>
          <select
            name="activity"
            id="list"
            onChange={(e) => setSignup({ ...signup, activity: e.target.value })}
          >
            <option selected value="1">
              Sedentary (little or no exercise)
            </option>
            <option value="2">
              Lightly active (light exercise/sports 1-3 days/week)
            </option>
            <option value="3">
              Moderately active (moderate exercise/sports 3-5 days/week)
            </option>
            <option value="4">
              Very active (hard exercise/sports 6-7 days a week)
            </option>
            <option value="5">
              Extra active (very hard exercise/sports & physical job or 2x
              training)
            </option>
          </select>
          {errors.activity && <span>{errors.activity}</span>}

          {/* <button onClick={handelEmpty} disabled={disabled}><Link to="/CreatAcount">Next</Link></button> */}
          {/* <button onClick={handelCalories}>Next</button> */}
          {/* {BMI} */}

          <button onClick={handleSignUp} className="join">
            Join
          </button>

          <p>
            Already created? <Link to="/SignIn">SignIn!</Link>
          </p>
        </form>
      </div>
    </>
  );
}
