// import './App.css'
import Home from "./component/home";
import Login from "./component/login";
import SignUp from "./component/signup";
import {Route, Routes,  } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
      
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
      
      </Routes>
    </div>
  );
}

export default App;