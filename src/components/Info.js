import { useState,useEffect, Component, react } from "react";
import { Routes, Route, Link ,useNavigate} from "react-router-dom";
import Food from "./Food";

export default function Info() {
  const navigate=useNavigate()
  const [info, setInfo] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [BMI, setBMI] = useState("");
  localStorage.setItem("BMI",String(BMI))
  const [errors,setErrors]=useState({});
  // useEffect(()=>{
  //   const setData=()=>{
  //       localStorage.setItem("BMI",String(BMI))
  //   }
  //   setData();
  //   // alert(JSON.stringify(storedData))
// },[BMI])
  
  const handelCalories = () => {
    const newErrors={}
    if(!info.age.trim()){newErrors.firstname="age is required"}
    if(!info.gender.trim()){newErrors.email="gender is required"}
    if(!info.activity.trim()){newErrors.password="select a activity"}
    if(!info.weight.trim()){newErrors.password="weight name is required"}
    if(!info.height.trim()){newErrors.password="height name is required"}
  
    if (
      info.age === "" ||
      info.weight === "" ||
      info.height === "" ||
      80 < info.age||
      info.age < 15
    ) {
      alert("Please make sure the values you entered are correct");
    }  if (info.gender=== "male" && info.activity === "1") {
      setBMI(
        1.2 *
        (66.5 +
          13.75 * parseFloat(info.weight) +
          5.003 * parseFloat(info.height) -
          6.755 * parseFloat(info.age)))
    } else if (info.gender=== "male" && info.activity === "2") {
      setBMI(
        1.375 *
        (66.5 +
          13.75 * parseFloat(info.weight) +
          5.003 * parseFloat(info.height) -
          6.755 * parseFloat(info.age)))
    } else if (info.gender === "male" && info.activity=== "3") {
      setBMI(
        1.55 *
        (66.5 +
          13.75 * parseFloat(info.weight) +
          5.003 * parseFloat(info.height) -
          6.755 * parseFloat(info.age)))
    } else if (info.gender === "male" && info.activity === "4") {
      setBMI(
        1.725 *
        (66.5 +
          13.75 * parseFloat(info.weight) +
          5.003 * parseFloat(info.height) -
          6.755 * parseFloat(info.age)))
    } else if (info.gender === "male" && info.activity === "5") {
      setBMI(
        1.9 *
        (66.5 +
          13.75 * parseFloat(info.weight) +
          5.003 * parseFloat(info.height) -
          6.755 * parseFloat(info.age)))
    } else if (info.gender === "female" && info.activity=== "1") {
      setBMI(
        1.2 *
        (655 +
          9.563 * parseFloat(info.weight) +
          1.85 * parseFloat(info.height) -
          4.676 * parseFloat(info.age)))
    } else if (info.gender === "female" && info.activity === "2") {
      setBMI(
        1.375 *
        (655 +
          9.563 * parseFloat(info.weight) +
          1.85 * parseFloat(info.height) -
          4.676 * parseFloat(info.age)))
    } else if (info.gender === "female" && info.activity === "3") {
      setBMI(
        1.55 *
        (655 +
          9.563 * parseFloat(info.weight) +
          1.85 * parseFloat(info.height) -
          4.676 * parseFloat(info.age)))
    } else if (info.gender === "female" && info.activity === "4") {
      setBMI(
        1.725 *
        (655 +
          9.563 * parseFloat(info.weight) +
          1.85 * parseFloat(info.height) -
          4.676 * parseFloat(info.age)))
    } else {
      setBMI(
        1.9 *
        (655 +
          9.563 * parseFloat(info.weight) +
          1.85 * parseFloat(info.height) -
          4.676 * parseFloat(info.age)))
    }
    if(Object.keys(newErrors).length===0){
      
      navigate("/SingIn")
    }
   
    
  };

  return (
    <div class="container">
      <h1>BMI Informations</h1>
      <form id="calorie-form" onSubmit={(e) => e.preventDefault()}>
    
        <label for="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Ages 15-80"
          onChange={(e) => setInfo({ ...info, age: e.target.value })}
        ></input>

        <fieldset>
          <legend>Gender</legend>
          <label for="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => setInfo({ ...info, gender: e.target.value })}
          ></input>

          <label for="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setInfo({ ...info, gender: e.target.value })}
          ></input>
        </fieldset>
        <label for="weight">Weight</label>
        <input
          type="number"
          id="weight"
          placeholder="In kilograms"
          onChange={(e) => setInfo({ ...info, weight: e.target.value })}
        ></input>

        <label for="height">Height</label>
        <input
          type="number"
          id="height"
          placeholder="In centimeters"
          onChange={(e) => setInfo({ ...info, height: e.target.value })}
        ></input>

        <label for="activity">Activity</label>
        <select
          name="activity"
          id="list"
          onChange={(e) => setInfo({ ...info, activity: e.target.value })}
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

        {/* <button onClick={handelEmpty} disabled={disabled}><Link to="/CreatAcount">Next</Link></button> */}
        <button onClick={handelCalories}>Next</button>
        {BMI}
        
      </form>
    </div>
  );
}
