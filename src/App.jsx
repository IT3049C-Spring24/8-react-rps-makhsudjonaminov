// src/App.jsx
import {useState} from 'react';

import WelcomeView from './components/WelcomeView';
import GameView from './components/GameView';
import "./App.css"
function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="container">
      
      <WelcomeView userName={userName} setUserName={setUserName} />
      <GameView userName={userName} />
    
    </div>
  );
}
export default App



// // src/App.jsx
// import React, { useState } from 'react';
// import './App.css';
// import GameView from './components/GameView';
// import WelcomeView from './components/WelcomeView';

// function App() {
//   const [userName, setUserName] = useState("");

//   return (
//     <div className="container">
//       <h1 className="mainHeader">Rock Paper Scissors</h1>
//       <WelcomeView setUserName={setUserName} />
//       <GameView userName={userName} />
//     </div>
//   );
// }

// export default App;
