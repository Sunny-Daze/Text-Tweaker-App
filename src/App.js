import React, {useState} from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
 const toggle = () => {
   if(mode === "light"){
     setmode("dark");
     document.body.style.backgroundColor = "#042743";
     showalert("Dark mode has been enabled!", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled!", "success")
   }
 }
  return (
    <>
      <Navbar title="String Sister" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
