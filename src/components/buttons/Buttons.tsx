import './buttons.css';
import { useState } from 'react';

const Buttons = ()=>{

    const [ vizor, setVizor ] = useState<String>("0");


    const handleVizor = (value : string)=>{
        if(vizor === "0"){
            return setVizor(value)
        }
        setVizor(vizor + value)
    }

    const handleReset = ()=>{
        setVizor("0")
    }

    const handleDelete = ()=>{
        let state = vizor.slice(0,-1)
        if(state === ""){
           return setVizor("0") 
        }
        setVizor(state)
    }


    return(
    <div className='box_calculator'>

      <div className='visor'>{vizor}</div>
        <div className='conteiner_buttons'>
          <button>%</button>
          <button onClick={handleReset}>C</button>
          <button onClick={handleDelete} >Del</button>
          <button onClick={()=> handleVizor("/")} >/</button>
          <button onClick={()=> handleVizor("9")} >9</button>
          <button onClick={()=> handleVizor("8")} >8</button>
          <button onClick={()=> handleVizor("7")} >7</button>
          <button onClick={()=> handleVizor("x")} >x</button>
          <button onClick={()=> handleVizor("6")} >6</button>
          <button onClick={()=> handleVizor("5")} >5</button>
          <button onClick={()=> handleVizor("4")} >4</button>
          <button onClick={()=> handleVizor("+")} >+</button>
          <button onClick={()=> handleVizor("3")} >3</button>
          <button onClick={()=> handleVizor("2")} >2</button>
          <button onClick={()=> handleVizor("1")} >1</button>
          <button onClick={()=> handleVizor("-")} >-</button>
          <button onClick={()=> handleVizor("0")} >0</button>
          <button onClick={()=> handleVizor(".")} >.</button>
          <button className='igual' onClick={()=> handleVizor("=")} > = </button>
        </div>
    </div>
    
    )
}

export default Buttons;
