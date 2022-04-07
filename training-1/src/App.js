import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App(props) {



  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;