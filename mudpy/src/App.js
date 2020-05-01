import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dungeon from "./Components/Dungeon";
import { Route } from 'react-router';
import Map from "./Components/Map";
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <div className="App">
      <Route path="/api/registration/" component={Register}/>
      <Route path="/api/login/" component={Login}/>
      <Route path= "/api/dungeon/" component={Dashboard}/>
      
      
      

    </div>
    
  );
}

export default App;
