import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${((props.mode==='light')||(props.mode=='primary')||(props.mode=='warning'))?'light':'dark'} navbar-${((props.mode==='light')||(props.mode=='primary')||(props.mode=='warning'))?'light':'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <span className="fw-bold"><span style={{color: '#0a19ff'}}>Text</span>Ninja</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://github.com/GouravDutta-01">
                View Github
              </a>
            </li>
          </ul>
          <div className="d-flex">
          <div className="bg-light mx-2" onClick={()=>{props.toggleMode("light")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid black'}}></div>
          <div className="bg-dark mx-2" onClick={()=>{props.toggleMode("dark")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid white'}}></div>
            <div className="bg-primary mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid black'}}></div>
            <div className="bg-success mx-2" onClick={()=>{props.toggleMode("success")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid white'}}></div>
            <div className="bg-warning mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid black'}}></div>
            <div className="bg-danger mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height: '30px',width: '30px', borderRadius: '50%', cursor: 'pointer', border: '2px solid white'}}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

