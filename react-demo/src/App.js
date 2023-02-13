import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
    return(
        <Router>
          <div className="App">
            <Navbar />
             <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
             </Switch>
          </div>
        </Router>
       
    )
}

export default App;