import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState("light");
  const showAlert = (message) => {
    toast.success(message);
  };
  const toggleMode = (cls) => {
    setProgress(30);
    if(cls == "light"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light theme has been enabled!");
    }
    else if(cls == "dark"){
      setMode("dark");
      document.body.style.backgroundColor = "#121025";
      showAlert("Dark theme has been enabled!");
    }
    else if(cls == "primary"){
      setMode("primary");
      document.body.style.backgroundColor = "#89a5fc";
      showAlert("Blue theme has been enabled!");
    }
    else if(cls == "success"){
      setMode("success");
      document.body.style.backgroundColor = "#103312";
      showAlert("Green theme has been enabled!");
    }
    else if(cls == "warning"){
      setMode("warning");
      document.body.style.backgroundColor = "#ecf999";
      showAlert("Yellow theme has been enabled!");
    }
    else if(cls == "danger"){
      setMode("danger");
      document.body.style.backgroundColor = "#3d0101";
      showAlert("Red theme has been enabled!");
    }
    setProgress(100);
  };
  const [progress, setProgress] = useState(0);
  
  return (
    <>
      <LoadingBar
        height={3}
        color='#cf2368'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar mode={mode} toggleMode={toggleMode} />
        <ToastContainer position="top-center" autoClose={1000}/>
        <div className="container my-3">
          <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  setProgress={setProgress}
                />
        </div>
    </>
  );
}

export default App;
