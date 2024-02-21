// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// let name = "Utkarsh"
function App() {
  const [mode, setMode] = useState(`light`);//Whether dark mode is enabaled or not

  const toggleMode=() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
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
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"mode={mode}/>
      {/* Using about instead of textform */}
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
