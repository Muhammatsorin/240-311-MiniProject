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
import Talo_Capo_Beach from "./pages/location/talo_capo_beach"
import Sky_Walk from "./pages/location/sky_walk"
import Panare_beach from "./pages/location/panare_beach"
import Yarang_Ancient from "./pages/location/yarang_ancient"
import Chang_Hai_Temple from "./pages/location/chang_hai_temple"
import Kae_kae_Beach from "./pages/location/kae_kae_beach"
import Somdet_Park from "./pages/location/somdet_park"
import Wasukri_Beach from "./pages/location/wasukri_beach"
import LaemTachie from "./pages/location/laem_tachie"

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
            <Route path="/talo_capo_beach" component={Talo_Capo_Beach} />
            <Route path="/sky_walk" component={Sky_Walk} />
            <Route path="/panare_beach" component={Panare_beach} />
            <Route path="/yarang_ancient" component={Yarang_Ancient} />
            <Route path="/chang_hai_temple" component={Chang_Hai_Temple} />
            <Route path="/kae_kae_beach" component={Kae_kae_Beach} />
            <Route path="/somdet_phra_srinagarindra_park" component={Somdet_Park} />
            <Route path="/wasukri_beach" component={Wasukri_Beach} />
            <Route path="/leam_tachie" component={LaemTachie} />
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
