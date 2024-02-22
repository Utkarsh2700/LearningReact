// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

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
      document.title='TextUtils - Dark Mode'
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
      document.title='TextUtils - Light Mode'
    }
  }
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Utkarsh
    //     </a>
    //   </header>
    // </div>
    // <div className="blank">Lovely With Siu</div>

    // <>

    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut. Et maxime error suscipit tenetur! Excepturi, magni totam repellat aspernatur placeat beatae exercitationem vitae veniam soluta voluptatem distinctio ipsam, fugiat iste nisi aperiam dicta!</p>
    // </div>
    // </>


    <>

      {/* <Navbar title= "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <Navbar title= "TextUtils"/> */}
      <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>
      {/* Using about instead of textform */}
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
