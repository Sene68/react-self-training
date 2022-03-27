import React from 'react';
import Hello from './Hello';
import './App.css';


function App(props) {
  const subject = props.subject;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, 
    padding: '1rem' 
  }

  return (
    <>
      <Hello />
      <div style={style}>{subject}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;