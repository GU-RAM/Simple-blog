import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppContextComponent } from './context/AppContext';
import Routes from './Routes';

function App() {
  return (
    <AppContextComponent>
      <Router>
        <Routes />
      </Router>
    </AppContextComponent>
  );
}

export default App;
