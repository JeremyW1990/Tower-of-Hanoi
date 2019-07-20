import React from 'react';

import './app.css';
import './common.css';

import Foundation from './components/game/foundation/foundation'
import Towers from './components/game/towers/towers'



function App() {
  return (
    <div className="app container-fluid">
      <div className="row full-height">
        <div className="game-container col-9 full-height d-flex justify-content-center align-items-center">
          <div>
            <Towers/>
            <Foundation/>
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
