import React,{useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import './darkMode.css';
import AddUser from './pages/AddUser';

function App(){
  const [theme,setTheme]=useState('light');
  const [image,setImage]=useState('./light-mode.png');

  const toggleTheme = () => {
    if(theme==='light'){
      setTheme('dark');
      setImage('./dark-mode.png');
    } else {
      setTheme('light');
      setImage('./light-mode.png');
    }
  };
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        <img src={`${image}`} class='rounded-circle' border={0} with={30} height={30} />
        </button>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/student" element={<AddStudent />} />
          <Route exact path="/student/{id}" element={<EditStudent/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
