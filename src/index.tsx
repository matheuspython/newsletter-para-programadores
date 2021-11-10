import React from 'react';
import ReactDOM from 'react-dom';
import { Rotas } from './Rotas'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <Rotas />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
