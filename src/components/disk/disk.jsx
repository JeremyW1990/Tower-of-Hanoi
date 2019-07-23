import React from 'react';
import './disk.css';


function Disk( props ) {
  
  let cssClass = `disc disc-${props.size}`
  if (props.lifted) { cssClass += ' lifted'}

  return (
    <div className={cssClass}>

    </div>
  );
}

export default Disk;
