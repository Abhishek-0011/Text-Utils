import React, { useState } from 'react';

function TextForm(props) {

    const handleLowClick = () => {
       let newText = text.toLowerCase()
       setText(newText)
       props.showAlert("Converted to lowercase!", "success");
    }
    const clearText = () => {
       let newText = '';
       setText(newText)
       props.showAlert("Text Cleared!", "success");
    }

    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" )
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleCopy = () => {
        //console.log("I am copy");
        
        navigator.clipboard.writeText(text);    
        props.showAlert("Copied to clipboard!", "success");
    }

    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container"  style={{color: props.mode=== 'dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label forName="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}}
                    onChange={handleOnChange}
                        id="myBox" rows="8"></textarea>
                </div> 
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length}Minutes to read</p>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text:"Nothing to preview"}
                </p>
            </div>
        </>
    )
}

export default TextForm;
