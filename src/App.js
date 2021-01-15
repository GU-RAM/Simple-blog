import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppContextComponent } from './context/AppContext';
import Routes from './Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <AppContextComponent>
      <Router>
        <Header />
        <Routes />
      </Router>
    </AppContextComponent>
  );
}

export default App;
