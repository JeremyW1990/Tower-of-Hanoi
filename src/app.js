import React from 'react';

import Game from './containers/game/game'

import './app.css';
import './common.css';

function App() {
  return (
    <div className="app container-fluid">
      <div className="row full-height">
        <div className="game-container col-9 full-height d-flex justify-content-center align-items-center">
          <div>
            <Game/>
          </div>
        </div>
        <div className="player-container col-3 full-height">
          player
        </div>
      </div>
    </div>
  );
}

export default App;
