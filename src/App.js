import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./pages/็็็home"
import Login from "./pages/login"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/record" component={Home} />
      <Route path="/table" component={Home} />
      <Route path="/show" component={Home} />
      <Route path="/profile" component={Home} />
    </div>
  )
}

export default App;
