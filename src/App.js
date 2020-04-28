import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/็็็home"
import Login from "./pages/login"
import Example from "./pages/test"
import { Firebaes } from "./components/Firebase/FirebaseAuth"
import Review from "./pages/review"
import Review_all from "./pages/review_all"
import Pattani_central_mosque from "./pages/location/pattani_central_mosque"
import Travel from "./pages/travel"
import Sai_khao from "./pages/location/sai_khao"
import Kruesae_Mosque from "./pages/location/krue_sae_mosque"
import Lim_ko_niao from "./pages/location/lim_ko_niao"

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
            <Route path="/review" component={Review} />
            <Route path="/review-all" component={Review_all} />
            <Route path="/pattani_central_mosque" component={Pattani_central_mosque} />
            <Route path="/sai_khao" component={Sai_khao} />
            <Route path="/kruesae_mosque" component={Kruesae_Mosque} />
            <Route path="/lim_ko_niao" component={Lim_ko_niao} />
            
            <Route path="/travel-all" component={Travel} />
            <Route path="/test" component={Example} />
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
