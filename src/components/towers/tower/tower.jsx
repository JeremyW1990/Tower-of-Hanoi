import React from 'react';
import './tower.css';

import Disk from '../../disk/disk'

function Tower( props ) {
  return (
    <div 
      className="tower d-flex flex-column align-items-center justify-content-end" 
      onClick={()=> props.clicked(props.towerIndex)}>
        { props.disks.map((v,i) => 
        <Disk 
          key={v} 
          size={v} 
          lifted={props.lifted && (v === props.liftedDisk)}
        />)
        }
    </div>
  );
}

export default Tower;

