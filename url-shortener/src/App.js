import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UrlShortener from './pages/UrlShortener';
import Statistics from './pages/Statistics';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UrlShortener} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;