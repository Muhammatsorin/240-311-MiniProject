import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./pages/็็็Home"
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  )
}

export default App;
