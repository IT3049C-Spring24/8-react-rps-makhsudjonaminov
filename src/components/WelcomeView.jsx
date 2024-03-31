import { useState } from "react";

const WelcomeView = ({userName, setUserName}) => {
  return (
    <div id="welcome-screen">
      <form id="name-form">
        <div className="form-group">
          <label htmlFor="username">Type your name: </label>
          <input
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
            className="form-control"
            type="text"
            id="username"
            name="username"
            required placeholder="Enter Name Here..." minLength="2"
            maxLength="15" />
        </div>
        <button className="btn btn-primary" id="start-game-button" type="button">
          Start Game!
        </button>
      </form>
    </div>
  );
};
export default WelcomeView;

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
