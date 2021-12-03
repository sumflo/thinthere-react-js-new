import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './pages/Index';
import Admin from './pages/Admin';
import Routes from './routes/Routes'
import Product from './components/Product';
import {Route} from 'react-router-dom'

function App () {
    return (
      <div>
        <Index />
        <Admin />
      </div>
    );
}


export default App;