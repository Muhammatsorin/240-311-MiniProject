import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/็็็home"
import Login from "./pages/login"
import Example from "./pages/test"
import { Firebaes } from "./components/Firebase/FirebaseAuth"

const App = () => {

  const [user, setUser] = useState({})

  const authListener = () => {
    Firebaes.onAuthStateChanged(user => {
      if (user)
        setUser(user)
      else
        setUser(null)
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  const pageRender = () => {
    if (user) {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Example} />
          </div>
        </BrowserRouter>
      )
    }
    else {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
          </div>
        </BrowserRouter>
      )
    }
  }

  return (
    pageRender()
  )

}

export default App;
