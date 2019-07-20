import React from 'react';
import './towers.css';

import Tower from './tower/tower'

function Towers() {
  return (
    <div className="towers d-flex justify-content-around">
        <Tower/>
        <Tower/>
        <Tower/>
    </div>
  );
}

export default Towers;
