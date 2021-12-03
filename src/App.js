import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import MyCarousel from './components/MyCarousel'

import Index from './pages/Index'
import Admin from './pages/Admin'
import BodyShop from './pages/BodyShop'

function App () {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="contents">
            <Switch>

              <Route exact path="/">
                <MyCarousel />
                <Index />
              </Route>

              <Route path="/bodyShop">
                <BodyShop />
              </Route>

              <Route path="/admin">
                <Admin />
              </Route>

            </Switch>
          </div>

        </div>
      </Router>
    );
}

export default App;