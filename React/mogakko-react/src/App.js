//React로부터 useState 함수 불러오기
import React, {useState} from 'react';
import Button from './Button';
import './App.css';
import {Layout, btnLayout} from './Layout';
import Number from './Number';

function App() {
  //함수 호출
  const [state, setState] = useState(false);
  const [color, setColor] = useState("green");
  
  function checkState() {
    setState(!state);
    
    if (state) {
      setColor = 'green';
    }
    else {
      setColor = 'red';
    }
  }

  return (
    <div id='container'>
      <div id="box" className={state ? 'green': 'red' } />
      <Button onClick={checkState} text="색 바꾸기!"></Button>
      {state ? <div>True에용</div> : <div>False에용</div>}
    </div>
  );
}

export default App;