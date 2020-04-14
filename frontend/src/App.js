import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import WrapperApp from './components/WrapperApp';
import Dashboard from './pages/DashboardPage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <WrapperApp main={<Dashboard />} title="Главная" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
