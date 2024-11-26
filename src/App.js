import './App.css';
import { useState,useEffect } from 'react';
import axios, * as others from "https://cdn.skypack.dev/axios@0.21.1";
// import SignUp from './components/SignUp';
// import Info from './components/Info';
// import SignIn from './components/SignIn';
// import Landing from './components/Landing';
// import Food from './components/Food';
// import ProfilePage from './components/profile';
// import WorkoutTracker from './components/workout';
import C1 from './components/composant1';
import C2 from './components/composant2';
import { Routes, Route, Link,Switch } from "react-router-dom";

function App() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=>{setUsers(res.data)})
    .catch(error => {
        console.error('Error fetching users:', error)});
},[]);
  return (

    <div className="App">
   
     <Routes>
      <Route path='/' element={<C1/>} />
      <Route path='/c2' element={<C2 users={users} />} />
        {/* <Route path="/" element={<Landing/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Profil" element={<ProfilePage />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/WorkoutTracker" element={<WorkoutTracker/>} /> */}

    </Routes> 
    </div>
  );
}

export default App;
