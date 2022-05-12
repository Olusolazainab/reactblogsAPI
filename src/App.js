import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogList from './component/NINJA/BlogList';
import Home from './component/NINJA/Home';
import Navbar from './component/NINJA/Navbar';
import Create from './component/NINJA/Create';
import BlogDetails from './component/NINJA/BlogDetails';
import NotFound from './component/NINJA/NotFound'

function App() {

  return (
    <Router>
    <div className='App'>
       <Navbar />
        < div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route path="/create">
              <Create />
            </Route>
             <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
       </div>
      </div>
      </Router>
  )
}

export default App;
