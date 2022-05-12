import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import UseStateBasics from './component/UseStateBasics';
// import UseStateArray from './component/UseStateArray';
// import UseStateObject from './component/UseStateObject';
// import UseStateCounter from './component/UseStateCounter';
// import UseEffectBasics from './component/UseEffectBasics';
// import UseeffectClearnup from './component/UseeffectClearnup';
// import MultipleReturns from './component/MultipleReturns';
// import One from './component/IndiaGuy/One';
// import Sample from './component/IndiaGuy/Sample';
// import Samp from './component/IndiaGuy/Samp';
// import BlogList from './component/NINJA/BlogList';
import Home from './component/NINJA/Home';
import Navbar from './component/NINJA/Navbar';
import Create from './component/NINJA/Create';
import BlogDetails from './component/NINJA/BlogDetails';
import NotFound from './component/NINJA/NotFound';




function App() {

  return (
    <Router>
    <div className='App'>
      {/* <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
      <UseEffectBasics />
      <UseeffectClearnup />
      <MultipleReturns /> */}
      {/* <One />
      <Sample />
      <Samp /> */}
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
