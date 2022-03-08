//React로부터 useState 함수 불러오기
import React, {useState} from 'react';
import Button from './Button';
import {Layout, btnLayout} from './Layout';
import Number from './Number';

function App() {
  //함수 호출
  const [state, setState] = useState(false);
  
  function checkState() {
    setState(!state);
  }

  return (
    <div>
      <Button onClick={checkState} text="True?"></Button>
      {state===true &&<div>True!</div>}
    </div>
  );
}

export default App;