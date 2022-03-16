//React로부터 useState 함수 불러오기
import React, {useState} from 'react';
import Button from './Button';
import Layout from '../components/shared/Layout';
import '../App.css';

function Assignment() {
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
    <Layout>
    <div id='container'>
      <div id="box" className={state ? 'green': 'red' } />
      <Button onClick={checkState} text="색 바꾸기!"></Button>
      {state ? <div>True에용</div> : <div>False에용</div>}
    </div>        
    </Layout>
  );
}

export default Assignment;