import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LocationDetails from './components/LocationDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/location/:id' component={LocationDetails} />
      </Switch>
    </Router>
  );
}

export default App;