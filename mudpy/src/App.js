import React from 'react';
import './App.css';
import login from "./Components/login";
import register from "./Components/register";
import dungeon from "./Components/dungeon";
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Route path="/api/registration/" component={register}/>
      <Route path="/api/login/" component={login}/>
      <Route path= "/api/dungeon/" component={dungeon}/>

    </div>
    
  );
}

export default App;
