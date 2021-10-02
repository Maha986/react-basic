import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
   const [mode,setMode]=useState("light");
   const changeMode=()=>{
     if(mode==="light")
     {
       setMode("dark");
       document.body.style='background:#042743;color:white;';
       showAlert("Dark Mode has been enabled","success");
     }
     else
     {
       setMode("light");
       document.body.style='background:white;color:black;';
       showAlert("Light Mode has been enabled","success");
     }
   }
   const [alert, setAlert] = useState(null)
   const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
   }
  return (
    //can only return one element so if want to use multiple element then use the jsx fragment
    <>
      {/* curly braces has javascript,
      we can write component as <Navbar/> too. components name are always capital letter */}
      <Router>
      <Navbar title="ReactApp" dropDown="Services" mode={mode} changeMode={changeMode} ></Navbar>
      <Alert alert={alert} mode={mode}></Alert>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}></About>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode}></TextForm>
          </Route>
        </Switch>
      
      </div>
      </Router>
    </>
  );
}

export default App;
