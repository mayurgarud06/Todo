import { useState } from 'react';
import './App.css';
import About from './MyComponents/About';
import Alert from './MyComponents/Alert';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  let showAlert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#061743";
      showAlert("Dark mode has been enabled..!!",'success');
      document.title="TextUtils-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled..!!",'success');
      document.title="TextUtils-LightMode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <div className="container my-3">
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
