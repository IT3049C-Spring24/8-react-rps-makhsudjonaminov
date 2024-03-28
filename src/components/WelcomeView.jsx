// src/components/WelcomeView.jsx
import React, { useState } from 'react';

const WelcomeView = ({ setUserName }) => {
  const [name, setName] = useState("");

  const handleStartGame = () => {
    setUserName(name);
  };

  return (
    <div id="welcome-screen">
      <form id="name-form">
        <div className="form-group">
          <label htmlFor="username">Type your name: </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter Name Here..."
            minLength="2"
            maxLength="15"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" id="start-game-button" type="button" onClick={handleStartGame}>
          Start Game!
        </button>
      </form>
    </div>
  );
};

export default WelcomeView;


// // src/components/WelcomeView.jsx
// import React from 'react';

// const WelcomeView = ({ setShowGame }) => {
//   return (
//     <div id="welcome-screen">
//       <form id="name-form">
//         <div className="form-group">
//           <label htmlFor="username">Type your name: </label>
//           <input
//             className="form-control"
//             type="text"
//             id="username"
//             name="username"
//             required
//             placeholder="Enter Name Here..."
//             minLength="2"
//             maxLength="15"
//           />
//         </div>
//         <button className="btn btn-primary" id="start-game-button" type="button" onClick={() => setShowGame(true)}>
//           Start Game!
//         </button>
//       </form>
//     </div>
//   );
// };

// export default WelcomeView;
