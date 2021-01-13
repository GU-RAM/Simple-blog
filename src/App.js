// import React, { useReducer } from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
// import { AppContextComponent } from './context/AppContext';
// // import Routes from './Routes';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   function increment() {
//     dispatch({ type: 'increment' });
//   }

//   function decrement() {
//     dispatch({ type: 'decrement' });
//   }

//   return (
//     <AppContextComponent>
//       {/* <Counter /> */}
//       <button onClick={decrement}>-</button>
//       <p>{state.count}</p>
//       <button onClick={increment}>+</button>
//     </AppContextComponent>
//   );
// }

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
