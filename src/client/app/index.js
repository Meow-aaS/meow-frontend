import React from 'react'
import { render } from 'react-dom'
import { Router, Route,  IndexRoute } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Main from './components/Main.js';

render((
  <HashRouter>
    <Route path="/" component={Main}>

    </Route>

  </HashRouter>
), document.getElementById('root'))
