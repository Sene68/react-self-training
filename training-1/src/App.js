import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
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
    <Wrapper>
      <Hello name="react" color="red"/>
      <div style={style}>{subject}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;