import React from "react";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//import Layout from '../containers/Layout'
//import ManageUser from './components/admin/manageuser';
import Home from "./components/main/home";
//import RecoveryPassword from '../containers/RecoveryPassword'
import Dashboard from "./components/admin/dashboard";
import NotFound from "./components/main/404";
import About from "./components/main/about";
//import Slider from "./components/main/slider";
import Contact from "./components/main/Contact";
import Header from "./components/main/header";
import Footer from "./components/main/footer";
import StartupLogin from "./components/main/startuplogin";
import InvestorLogin from "./components/main/investorlogin";
import Main from "./components/main";
//import Investor from "./components/investor";
import Faq from "./components/main/Faq";
//import Sidebar from './components/main/sidebar';
import StartupSignup from "./components/main/startupsignup";
import InvestorSignup from "./components/main/investorsignup";
import StartupList from "./components/main/StartupList";
import InvestorList from "./components/main/InvestorList";
import Displayup from "./components/main/Displayup";
import User from "./components/user";
import Profile from "./components/user/profile";
import InvProfile from "./components/investor/invprofile";
import ManageUser from "./components/admin/manageuser";
import ManageInvestor from "./components/admin/manageinvestor";
import Admin from "./components/admin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="main">
          <Route element={<Home />} path="home" />
          <Route element={<About />} path="about" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Faq />} path="faq" />
          <Route element={<InvestorSignup />} path="investorsignup" />
          <Route element={<StartupSignup />} path="startupsignup" />
          <Route element={<StartupLogin />} path="startuplogin" />
          <Route element={<StartupList />} path="startuplist" />
          <Route element={<InvestorList />} path="investorlist" />
          <Route element={<InvestorLogin />} path="investorlogin" />
          <Route element={<Displayup />} path="displayup" />
        </Route>

        <Route element={<User />} path="user">
          <Route element={<Profile />} path="profile" />
        </Route>
        {/*<Route element={<Investor />} path="investor">
          <Route element={<InvProfile />} path="invprofile" />
        </Route>*/}

        <Route element={<Admin />} path="admin">
        <Route element={<Dashboard />} path="dashboard" />
          {/* <Route element={<Profile />} path="profile" /> */}
          <Route element={<ManageUser />} path="manageuser" />
          <Route element={<ManageInvestor />} path="manageinvestor" />
        </Route>
        <Route element={<NotFound />} path="404" />
        
        <Route element={<Navigate to="/main/home"></Navigate>} path="/" />
        <Route element={<Navigate to="/404"></Navigate>} path="*" />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
