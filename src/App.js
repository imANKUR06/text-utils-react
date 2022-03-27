
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('warning');
  const [mess,setMess] = useState(null);

  const setalert = (message,type)=>{
    setMess({
      msg:message,
      type : type
    })
    setTimeout(() => {
      setMess(null)
    }, 3000);
  }

  const darkMode = ()=> {

  if(mode === 'warning')
  {
    setMode('dark');
    document.body.style.backgroundColor = '#212529'
    setalert('Dark Mode enabled','success');
  }else{
    setMode('warning');
    document.body.style.backgroundColor = 'white'
    setalert('Normal Mode enabled','success');
  }
  
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "Website Title" naam="@bout Us" dmode={mode} enable={darkMode} />
      {/* <Routes> */}
        {/* <Route path = '/about' element = {<About />} /> */}
        {/* <Route path = '/' element = {<TextForm heading = "Enter You Text" alert = {mess} />} /> */}
      {/* </Routes> */}
      <TextForm heading = "Enter You Text" alert = {mess} />
      <Alert alert = {mess} />
      
      {/* </Router> */}
      
      {/* <Navbar /> */}
    </>
  );
}

export default App;
