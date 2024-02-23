import React, {useState} from 'react'

export default function TextForm(props) {
    // let disabled;
    const handleUpClick =()=> {
        // console.log("Uppercase was clicked"+text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick =()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick =()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the text","success");
    }

    const handleBoldClick =()=> {
        setIsBold(!isBold);
        props.showAlert("Converted to Bold","success");
    }

    const handleItalicClick =()=> {
        setIsItalic(!isItalic);
        props.showAlert("Converted to Italic","success");
    }

    const handleOnChange =(event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

    //Credits :A
    const handleCopy =()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    }
    //Credits : Coding Wala
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }

  const[text,setText] = useState('');
  const[isBold,setIsBold] = useState(false);
  const[isItalic,setIsItalic] = useState(false);
//   text = "new text";//Wrong way to change the state
//   setText("new text");//Correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text}  style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal',backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 mb-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 mb-4" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 mb-4" onClick={handleClearClick}>Clear Text</button>
        <button disabled = {text.length === 0} className={`btn btn-primary mx-1 mb-4 ${isBold ? 'active' : ''}`} onClick={handleBoldClick}>Bold</button>
        <button disabled = {text.length === 0} className={`btn btn-primary mx-1 mb-4 ${isItalic ? 'active' : ''}`} onClick={handleItalicClick}>Italic</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 mb-4" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 mb-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        {/* let words = 0; if()  pehle split krke uski len pr loop run krenge if text[i] = " " then word+= 0 else words += 1 ya fir trim bbhi kr sakte h*/}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{fontWeight: isBold ? 'bold':'normal', fontStyle:isItalic ? 'italic':'normal'}}>{text.length > 0 ? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

