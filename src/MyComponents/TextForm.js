import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to UpperCase..!!",'success');
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to LowerCase..!!",'success');
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared..!!",'success');
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to ClipBoard..!!",'success');
    }
    const handleSpace=()=>{
        let new_text=text.split(/[ ]+/);
        setText(new_text.join(" "));
        props.showAlert("Extra Space Removed..!!",'success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    let styleTextarea={
        backgroundColor: props.mode==='dark'?'#384671':'white',
        color: props.mode==='dark'?'white':'black'
    }
    let styleClass={
        color: props.mode==='dark'?'white':'black'
    }
    return (
        <>
        <div className="container my-3" style={styleClass} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={styleTextarea}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick= {handleUpClick} >Convert to UpperCase</button> 
            <button className="btn btn-primary mx-2  my-1" onClick= {handleLowClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-2  my-1" onClick= {handleCopy} >Copy Text </button>
            <button className="btn btn-primary mx-2  my-1" onClick= {handleSpace} >Remove Extra Spaces </button>
            <button className="btn btn-primary mx-2  my-1" onClick= {handleClearClick} >Clear Text </button>
        </div>
        <div className="container my-3" style={styleClass}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview here "}</p>
        </div>
        </>
    )
}
