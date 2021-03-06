import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import NavBar from './components/NavBar'
import MyCarousel from './components/MyCarousel'
import Footer from './components/Footer'

import Index from './pages/Index'
import Admin from './pages/Admin'
import BodyShop from './pages/BodyShop'
import JoinUs from './pages/JoinUs'
import SignIn from './pages/SignIn'
import UserAccount from './pages/UserAccount'
import {AuthContext} from './context/AuthContext'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      user: null
    }
  }

  render(){
    return (
      <Router>
        <AuthContext.Provider value={{user: this.state.user, setUser:(user)=> this.setState({"user": user})}}>
        <div className="App">
          <NavBar />
          <div className="contents">
            <Switch>

              <Route exact path="/">
                <MyCarousel />
                <Index />
              </Route>

              <Route path="/bodyShop">
                 <RequireAuth />
                 <BodyShop/> 
              </Route>

              <Route path="/signIn" render={props => <SignIn {...props} />}>
              </Route>

              <Route path="/joinUs" render={props => <JoinUs {...props} />}>
              </Route>

              <Route path="/account">
                <UserAccount />
              </Route>

              <Route path="/admin">
                <Admin />
              </Route>

            </Switch>
          </div>
          <Footer />
        </div>
        </AuthContext.Provider>
      </Router>
    );
  }
}

class RequireAuth extends React.Component {
  render(){

    console.log(this.context)
    if(this.context.user == null){
      alert("You are not logged in")
      return null
    }

    return <button onClick={()=> fetch("http://localhost:8080/get", {headers: {"thinThere-token": this.context.user.token}}).then(response => response.text()).then(data => console.log(data))}>Login</button>
  }
}



RequireAuth.contextType = AuthContext

export default App;