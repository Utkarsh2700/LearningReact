import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=> {
        // console.log("Uppercase was clicked"+text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick =()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick =()=> {
        let newText = '';
        setText(newText);
    }

    const handleBoldClick =()=> {
        setIsBold(!isBold);
    }

    const handleItalicClick =()=> {
        setIsItalic(!isItalic);
    }

    const handleOnChange =(event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

  const[text,setText] = useState('');
  const[isBold,setIsBold] = useState(false);
  const[isItalic,setIsItalic] = useState(false);
//   text = "new text";//Wrong way to change the state
//   setText("new text");//Correct way to change the state
  return (
    <>
    <div className='containner'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text}  style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-primary mx-1 ${isBold ? 'active' : ''}`} onClick={handleBoldClick}>Bold</button>
        <button className={`btn btn-primary mx-1 ${isItalic ? 'active' : ''}`} onClick={handleItalicClick}>Italic</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{fontWeight: isBold ? 'bold':'normal', fontStyle:isItalic ? 'italic':'normal'}}>{text}</p>
    </div>
    </>
  )
}


// import React, { useState } from 'react';

// export default function TextForm(props) {
//     const [text, setText] = useState('');
//     const [isBold, setIsBold] = useState(false);
//     const [isItalic, setIsItalic] = useState(false);

//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText);
//     };

//     const handleLoClick = () => {
//         let newText = text.toLowerCase();
//         setText(newText);
//     };

//     const handleClearClick = () => {
//         setText('');
//     };

//     const handleBoldClick = () => {
//         setIsBold(!isBold);
//     };

//     const handleItalicClick = () => {
//         setIsItalic(!isItalic);
//     };

//     const handleOnChange = (event) => {
//         setText(event.target.value);
//     };

//     return (
//         <>
//             <div className='container'>
//                 <h1>{props.heading}</h1>
//                 <div className="mb-3">
//                     <textarea
//                         className="form-control"
//                         value={text}
//                         onChange={handleOnChange}
//                         style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }}
//                         id="myBox"
//                         rows="8"
//                     ></textarea>
//                 </div>
//                 <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
//                 <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
//                 <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
//                 <button className={`btn btn-primary mx-1 ${isBold ? 'active' : ''}`} onClick={handleBoldClick}>Bold</button>
//                 <button className={`btn btn-primary mx-1 ${isItalic ? 'active' : ''}`} onClick={handleItalicClick}>Italic</button>
//             </div>
//             <div className="container my-3">
//                 <h2>Your text summary</h2>
//                 <p>{text.split(" ").length} words and {text.length} characters</p>
//                 <p>{0.008 * text.split(" ").length} Minutes read</p>
//                 <h2>Preview</h2>
//                 <p style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }}>{text}</p>
//             </div>
//         </>
//     );
// }

