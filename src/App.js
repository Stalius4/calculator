

import './App.css';
import React,  {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {

const [count, setCount] = useState("")

  const numberBtn = [7, 8, 9, "/",4, 5, 6, "*",1, 2, 3, "-",0, ".", "+", "=","c" ] ;

  const clickHandler = button => {
    if (button === "="){
      setCount( evaluate(count))
      
    }else if(button ==="c"){
      setCount("")
    }else{setCount( count+ ""+button  )

    }
   
    };
  const calculatorBtn = numberBtn.map((button , index ) =>{    
     return (<button className ={button ==="c" ? "cBtn" : "btn"} key={index}  onClick={() => clickHandler(button)} >{button}</button>)
  })
  
  return (
    <Main>
         
       <div className="calculator-display">{count}</div>
       <div className="calculator-numbers" >{calculatorBtn}</div>

    </Main>


  );
}
// const Button = props => {
//   return <button onClick={props.click}>{props.label}</button>;
//  };

const Main = ({children}) =>{

  return <div className="App">{children}</div>
};

// const Display = () =>{

//   return <div className="calculator-display">{count}</div>
// };






export default App;



