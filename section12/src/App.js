import React,{useState, useCallback} from 'react';
import Button from "./components/UI/Button/Button";

import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [listTitle, setListTitle] = useState('내 리스트');

  const changeTitleHandler = useCallback(() => {
    setListTitle('새로운 타이틀');
  })
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoList title={listTitle} items={5, 3, 1, 10, 9}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
