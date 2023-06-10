import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal'

function App() {
  const[showProp,setShowProp]=useState(false);
  const handleShowProp=()=>{
    setShowProp(true);
  }
  return (
    <div>
       <button onClick={()=>{handleShowProp()}}>Show Modal</button>
       {
        showProp? <Modal setShowProp={setShowProp}/> :""
       }
    </div>
  );
}

export default App;
