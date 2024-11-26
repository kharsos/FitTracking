import React, {useState,useEffect, Component } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./profile.css";
import Food from "./Food";
import WorkoutTracker from './workout';
const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Edit = ({ onSubmit, children }) => (
  
  <div className="card">
    <form onSubmit={onSubmit}>
      {children}
    </form>
  </div>
);
function UserInfo(){
  const [storedData,setStoredData]=useState({})
  const[BMI,setBMI]=useState('')
  useEffect(() => {
    const getData = () => {
      const data = localStorage.getItem("signUp");
      const BMIS= localStorage.getItem("BMI");
      if (data) {
        const parsedata = JSON.parse(data);
        setStoredData(parsedata);
      }
      if (BMIS) {
        const parsedata = JSON.parse(BMIS);
        setBMI(parsedata);
      }
    };
    getData();
  }, []);
  
  
  return(
    <div>
    <h1>{storedData.fname}</h1>
    <h2>Your daily Macros:</h2>
    <h3>{BMI} Calories</h3>
    <h3>track:<Link to="/Food">Food</Link> <Link to="/WorkoutTracker">Workout</Link></h3>

    </div>
  )
}
export default class ProfilePage extends React.Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };
  render() {
    const { imagePreviewUrl } = this.state;
    return (
      <div>
        <Edit onSubmit={this.handleSubmit}>
          <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
          <UserInfo/>
        </Edit>
      </div>
    );
  }
}
