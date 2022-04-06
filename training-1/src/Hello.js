import React from 'react';

function Hello(props) {
  return <div style={{color: props.color}}>{props.name}</div>
}

export default Hello;