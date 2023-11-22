import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpcase = ()=>{
        //console.log("uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showalert("converted to upper case","success");
    }
    const handleLocase = ()=>{
        //console.log("uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText)
        props.showalert("converted to Lower case","success");
    }
    const handleColor = ()=>{
        //console.log("uppercase was clicked" + Text);
        let newText = ""
        setText(newText)
        props.showalert("Text cleared","success");
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value)
        
    }
    const handleCopy = () => {
        
        navigator.clipboard.writeText (Text);
        props.showalert("Text copied","success");
        }
    const handleExtraSpaces = () =>{
        let newText = Text.split(/[ ]+/);
        setText (newText.join(" "))
        }    
    const [Text, setText] = useState("");
  return (

    <>
    <div className={`container my-3  text-${props.mode==='light'?'dark':'light'}`}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" placeholder='enter text here' value={Text} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpcase}>Convert to Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLocase}>Convert to Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleColor}>Clear text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Cut Spaces</button>
    </div>
    <div className={`container my-3  text-${props.mode==='light'?'dark':'light'}`}>
        <h1>your text summary</h1>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to read</p>
        <h2>Preview:</h2>
        <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    
  )
}

