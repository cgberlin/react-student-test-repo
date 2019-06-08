import React from 'react';


function Button(props) {
  return (
    <div 
        onClick={() => props.clicked()}
        style={{width: '50vw', height: '10rem', backgroundColor: 'red'}}
    >
      <p style={{color: 'white'}}>click me</p>
    </div>
  );
}

export default Button;
