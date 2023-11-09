import './buttons.css';
import { useState } from 'react';

const Buttons = ()=>{

    const [ result, setResult ] = useState<Number[]>([]);
    const [ currentOperator, setCurrentOperator] = useState<String>("")

    const handleState = (value : Number)=>{
        if(currentOperator === "+"){
            
        }
    }

    const handleOperator = (value : String)=>{
        setCurrentOperator(value)
    }

    return(
    <div className='box_calculator'>

      <div className='visor' >{result}</div>
        <div className='conteiner_buttons'>
          <button>%</button>
          <button>C</button>
          <button>Del</button>
          <button>/</button>
          <button >9</button>
          <button >8</button>
          <button >7</button>
          <button >x</button>
          <button>6</button>
          <button>5</button>
          <button>4</button>
          <button>+</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>-</button>
          <button>0</button>
          <button>.</button>
          <button className='igual'> = </button>
        </div>
    </div>
    
    )
}

export default Buttons;
