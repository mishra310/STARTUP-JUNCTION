import React from 'react'
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//import Layout from '../containers/Layout'
//import ManageUser from './components/admin/manageuser';
import Home from './components/main/home';
//import RecoveryPassword from '../containers/RecoveryPassword'
import NotFound from "./components/main/404";
import About from "./components/main/About";
//import Slider from "./components/main/slider";
import Contact from "./components/main/Contact";
import Header from "./components/main/header";
import Footer from "./components/main/footer";
import StartupLogin from './components/main/startuplogin';
import InvestorLogin from './components/main/investorlogin';
import Main from './components/main';
import Faq from './components/main/Faq';
//import Sidebar from './components/main/sidebar';
import StartupSignup from './components/main/startupsignup';
import InvestorSignup from './components/main/investorsignup';
import StartupList from './components/startup/StartupList';
import Dashboard from './components/admin/dashboard';

function App() {
  const age = 34;
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    
    <BrowserRouter>
    <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

        <Routes>
            <Route element={<Home />} path="home" />
            <Route element={<NotFound />} path="404" />
            <Route element={<About />} path="about" />
            <Route element={<Faq />} path="faq" />
            <Route element={<Contact />} path="contact" />
            <Route element={<InvestorSignup />} path="investorsignup" />
            <Route element={<StartupSignup />} path="startupsignup" />
            <Route element={<StartupLogin />} path="startuplogin" />
            <Route element={<StartupList />} path="startuplist" />
            <Route element={<InvestorLogin />} path="investorlogin" />
            <Route element={<Dashboard />} path="dashboard" />

            <Route element={<Navigate to="/Home"></Navigate>} path="" />
            <Route element={<Navigate to="/About"></Navigate>} path="" />
            <Route element={<Navigate to="/Faq"></Navigate>} path="" />
            <Route element={<Navigate to="/Contact"></Navigate>} path="" />
            <Route element={<Navigate to="/InvestorSignup"></Navigate>} path="" />
            <Route element={<Navigate to="/StartupSignup"></Navigate>} path="" />
            <Route element={<Navigate to="/StartupLogin"></Navigate>} path="" />
            <Route element={<Navigate to="/StartupList"></Navigate>} path="" />
            <Route element={<Navigate to="/InvestorLogin"></Navigate>} path="" />
            <Route element={<Navigate to="/404"></Navigate>} path="*" />
            <Route element={<Navigate to="/Dashboard"></Navigate>} path="" />
        </Routes>
        <Footer/>
        
              </BrowserRouter>
  );
};

export default App;