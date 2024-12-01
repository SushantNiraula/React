import {useState} from 'react';

function Button() { // Button component and remember function name always start with capital letter
    const [count, setCount]=useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Shown only when Surprise button is clicked. </h2>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <button onClick={()=>setCount(count== Number(0))}>Reset Count</button>
            <button onClick={()=>console.log("Surprise"
            )}>Surprise</button>
        </div>
    )
}
export default Button;