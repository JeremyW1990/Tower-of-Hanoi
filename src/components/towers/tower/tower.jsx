import React from 'react';
import './tower.css';

function Tower( props ) {
  return (
    <div className="tower" onClick={()=> props.clicked(props.towerIndex)}>
    </div>
  );
}

export default Tower;
