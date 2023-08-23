import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    props.setProgress(30);
    let newText = text.toUpperCase();
    setText(newText);
    props.setProgress(100);
    props.showAlert("Converted to Uppercase!");
  }
  const handleLoClick =()=>{
    props.setProgress(30);
    let newText = text.toLowerCase();
    setText(newText);
    props.setProgress(100);
    props.showAlert("Converted to Lowercase!");
  }
  const handleTrimText =()=>{
    props.setProgress(30);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.setProgress(100);
    props.showAlert("Text Trimmed!");
  }
  const handleCapitalize =()=>{
    props.setProgress(30);
    let newText = text.split(" ");
    for (var i = 0; i < newText.length; i++) {
       newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    props.setProgress(100);
    props.showAlert("Text Capitalized!");
  }
  const handleGenerateText =()=>{
    props.setProgress(30);
    let newText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc";
    setText(newText);
    props.setProgress(100);
    props.showAlert("Text Generated!");
  }
  const handleCopyClick =()=>{
    props.setProgress(30);
    navigator.clipboard.writeText(text);
    props.setProgress(100);
    props.showAlert("Copied to Clipboard!");
  }
  const handleClearClick =()=>{
    props.setProgress(30);
    let newText = '';
    setText(newText);
    props.setProgress(100);
    props.showAlert("Text Cleared!");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: ((props.mode==='dark')||(props.mode=='success')||(props.mode=='danger'))?'white':'black'}}>
        <h1 className="my-5 text-center"><span style={{color: '#0a19ff'}}>Text</span>Ninja - Online Text Analyzer and Text Converter</h1>
      <div className="mb-3">
        <h5>Enter your text below : </h5>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: ((props.mode==='dark')||(props.mode=='success')||(props.mode=='danger'))?'#0b383d':'white', color: ((props.mode==='dark')||(props.mode=='success')||(props.mode=='danger'))?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrimText}>Trim Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleGenerateText}>Generate Text</button>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: ((props.mode==='dark')||(props.mode=='success')||(props.mode=='danger'))?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.trim()==""?0:text.trim().split(/\s+/).length} words and {text.replace(/\s+/g,'').length} characters</p>
      <p>{0.008*(text.trim()==""?0:text.trim().split(/\s+/).length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
