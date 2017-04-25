import React from 'react'
import { render } from 'react-dom'
import { Router, Route ,Switch} from 'react-router'
import { HashRouter,IndexRoute, BrowserRouter} from 'react-router-dom'
import Main from './components/Main.js';
import Feed from './components/Feed.js';


render((
  <BrowserRouter>
    <Route path = '/' component = {Main}/>
  </BrowserRouter>
), document.getElementById('root'))
