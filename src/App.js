import './App.css';
import React,{useState} from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <HOC counter={Counter}/>
    </div>
  );
}

function HOC(props){
  return <h2><props.counter/></h2>
}


function Counter() {
  const[Count, setCount] = useState(0);
  return(
    <div>
    <h2>{Count}</h2>
    <button onClick={() => setCount(Count + 1)}>Click</button>
    </div>
  )
}

export default App;



