// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

// let name = "Utkarsh"
function App() {
  const [mode, setMode] = useState(`light`);//Whether dark mode is enabaled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // on clicking darkmode the title will change to 'TextUtils - Dark Mode'
      // document.title='TextUtils - Dark Mode'
      //don't need it as our title is seo friendly 
      
      // constantly changing the website title

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing '
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
          // on clicking lightmode the title will change to 'TextUtils - Light Mode' 
          // document.title='TextUtils - Light Mode'
          //don't need it as our title is seo friendly
    }
  }
  return (
    <>
      {/* <Navbar title= "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <Navbar title= "TextUtils"/> */}
    <Router>
      <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      <Switch>
        {/* 
        users --> Component 1
        users/home--> Component 2 
        react will always match and load component 1 if we do not use exact path as react does partial matching
         */}
          <Route exact path="/about">
            <About mode ={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"mode={mode}/>  
          </Route>
      </Switch>
      </div>
    </Router>

      {/* Using about instead of textform */}
      {/* <About/> */}
    </>
  );
}

export default App;
