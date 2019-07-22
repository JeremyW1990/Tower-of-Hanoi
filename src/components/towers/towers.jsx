import React from 'react';
import './towers.css';

import Tower from './tower/tower'

function Towers( props ) {
  return (
    <div className="towers d-flex justify-content-around">
      { 
        /* 
         Make 3 towers.
         Tower Index will be 1 , 2 ,3
        */
        Array(3).fill().map((v,i) =>  
          <Tower key={i} clicked={props.clicked} towerIndex = {i} /> )
      }
    </div>
  );
}

export default Towers;
