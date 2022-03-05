import './App.css';
import styles from './App.module.css';
//React로부터 useState 함수 불러오기
import React, {useState} from 'react';

function App() {
  //함수 호출
  const [number, setNumber] = useState(0);
  
  function Increase() {
    setNumber(number+1);
  }

  function Reset() {
    setNumber(number*0);
  }

  function Decrease() {
    setNumber(number-1);
  }

  return (
    <div className='container'>
      <div>값: <span className={styles.result}>{number}</span></div>
      <button onClick={Decrease}>-1</button>
      <button onClick={Reset}>reset</button>
      <button onClick={Increase}>+1</button>
    </div>
  );
}

export default App;
