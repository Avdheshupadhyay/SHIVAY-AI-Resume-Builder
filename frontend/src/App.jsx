
import React from 'react';
import './App.css';
import Dashboard from "./component/DashBoard";
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUp';
import PersonalInfo from './component/PersonalInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Professional_Exp from './component/Professional_Exp'; 
import Education from './component/Education';
import AboutUs from './component/AboutUs'
import Skills from './component/Skills';
import ResumePreview from "./component/ResumePreview";
function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Login" element={<LoginPage />} />
         <Route path="/SignUp" element={<SignUpPage />} />
         <Route path='/PersonalInfo' element={<PersonalInfo/>} />
         <Route path='/Professional_Exp' element={<Professional_Exp/>} />
         <Route path='/Education' element={<Education/>} />
         <Route path='/Skills' element={<Skills/>} />
         <Route path='/AboutUs' element={<AboutUs/>} />
         <Route path="/Preview" element={<ResumePreview />} />
       </Routes>
     </Router>
   
  );
}

export default App;
