import React from 'react'
import { render } from 'react-dom'
import { Router, Route ,Switch} from 'react-router'
import { HashRouter,IndexRoute, BrowseHistory} from 'react-router-dom'
import Main from './components/Main.js';
import Feed from './components/Feed.js';


render((
  <HashRouter>
    <Route path = '/' component = {Main}/>
  </HashRouter>
), document.getElementById('root'))
