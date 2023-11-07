import './buttons.css';
import { useState } from 'react';

const Buttons = ()=>{

    const [ result, setResult ] = useState<string | number>();

    const handleState = (value : (String | number))=>{
        setResult(value)
    }

    return(
    <div className='box_calculator'>

      <div className='visor' >{result}</div>
        <div className='conteiner_buttons'>
          <button>%</button>
          <button>C</button>
          <button>Del</button>
          <button>/</button>
          <button onClick={()=> handleState(9)} >9</button>
          <button onClick={()=> handleState(8)} >8</button>
          <button onClick={()=> handleState(7)} >7</button>
          <button onClick={()=> handleState("x")} >x</button>
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
