import { useState, Component, useEffect, react } from "react";
import "./style.css";
import { Routes, Route, Link, json, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [signin, setSignin] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [next, setNext] = useState(false);
  const [storedData, setStoredData] = useState({});
  // const {setItem}=useLocaleStorage('value')
  useEffect(() => {
    const getData = () => {
      const data = localStorage.getItem("signUp");
      if (data) {
        const parsedata = JSON.parse(data);
        setStoredData(parsedata);
      }
    };
    getData();
  }, []);

  const handleSignIn = () => {
    const newErrors = {};
    if (!signin.email.trim()) {
      newErrors.email = "email name is required";
    }
    if (!signin.password.trim()) {
      newErrors.password = "password name is required";
    }
    if (signin.password.length < 8) {
      newErrors.password = "password most be more than 8 caracters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(signin.email)) {
      newErrors.email = "Email is not correct";
    }

    if (Object.keys(newErrors).length === 0) {
      // console.log(JSON.stringify(signin))
      // localStorage.setItem('signUp',JSON.stringify(signup))
      // setNext(!next)
      if (
        signin.email == storedData.email &&
        signin.password == storedData.password
      ) {
        navigate("/Profil");
      } else {
        alert("this user not found!!!");
      }
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div className="signin">
      <h1>Sign In</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label for="email"> Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => setSignin({ ...signin, email: e.target.value })}
        ></input>
        {errors.email && <span>{errors.email}</span>}

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setSignin({ ...signin, password: e.target.value })}
        ></input>
        {errors.password && <span>{errors.password}</span>}

        <button onClick={handleSignIn}>Sign In</button>
        {next ? <Link to="/Info">Next</Link> : ""}
        <p>
          Do not have Account? <Link to="/SignUp">Crete Account</Link>
        </p>
      </form>
    </div>
  );
}
