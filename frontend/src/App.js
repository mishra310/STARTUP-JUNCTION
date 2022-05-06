import React from 'react'
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//import Layout from '../containers/Layout'
import Home from './components/main/home';
//import Login from '../containers/Login'
//import RecoveryPassword from '../containers/RecoveryPassword'
import NotFound from "./components/main/404";
import About from "./components/main/about";
import Contact from "./components/main/contact";
import Header from "./components/main/header";
import Footer from "./components/main/footer";


function App() {
  const username = "Peter Parkr";
  const age = 34;
  const [darkTheme, setDarkTheme] = useState(false);
  
  return (
    
    <BrowserRouter>
    <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        <Routes>
        <Route element={<Home username={username}></Home>} path="home" />
            <Route element={<NotFound />} path="404" />
            <Route element={<About />} path="about" />
            <Route element={<Contact />} path="contact" />
            
            <Route element={<Navigate to="/Home"></Navigate>} path="" />
            <Route element={<Navigate to="/About"></Navigate>} path="" />
            <Route element={<Navigate to="/Contact"></Navigate>} path="" />
            <Route element={<Navigate to="/404"></Navigate>} path="*" />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  
  );

};

export default App;