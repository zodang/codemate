//React로부터 useState 함수 불러오기
import React, {useState} from 'react';
import Button from './Button';
import {Layout, btnLayout} from './Layout';
import Number from './Number';

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
    <Layout>
      <Number num={number} text='1' />
      <Number num={number} text='2' />
      <Number num={number} text='3' />
      <Number num={number} text='4' />
      <Number num={number} text='5' />
      <Number num={number} text='6' />
      <Number num={number} text='7' />
      <Number num={number} text='8' />
      <Number num={number} text='9' />
      <btnLayout>
      <Button onClick={Decrease} text='-1' />
      <Button onClick={Reset} text='reset' />
      <Button onClick={Increase} text='+1' />
      </btnLayout>
    </Layout>
  );
}

export default App;