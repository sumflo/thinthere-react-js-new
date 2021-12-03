import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import Index from './pages/Index';
import Admin from './pages/Admin';
import Routes from './routes/Routes'
import Product from './components/Product';
import {Route} from 'react-router-dom'
import MyCarousel from './components/MyCarousel';

function App () {
    return (
      <div>
        <NavBar />
        <MyCarousel />
        <Index />
        <Admin />
      </div>
    );
}

export default App;