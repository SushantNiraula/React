import { useState } from 'react'
import reactLogo from './assets/react.svg'


// function App() {
//   // let counting=15

//   // const addValue= ()=>{
//   //   counting=counting+1
//   //   console.log('counter is',counting)
    
//   // }
//   // we will use useState to make the counter value reactive
//   let [counter, setCounter]=useState(0) // counter is a variable initialized with 0 and setCounter is a function to update the value of counter
//   return (
//     <>
//       <h1> Hooks </h1>
//       <h2> Counter Value: {counter}</h2>
//       <button
//       onClick={setCounter(counter+1)}> Add value {counter}</button>
//       <br />
//       <button> Remove Value {counter}</button>
//       <p> footer {counter} </p>
//     </>
//   )
// }
function App(){
  let [counter,setCounter]=useState(0)

  const addValue=()=>{
    setCounter(counter+1)
    console.log('counter is ',counter+1)
  }
  const subValue=()=>{
    setCounter(counter-1)
    console.log('counter is ',counter-1)
  }

  return (
    <>
    <h1> Hooks </h1>
    <h2> Counter Value: {counter}</h2>
    <button onClick={addValue}> Add value {counter}</button>
    <button onClick={subValue}>Sub value {counter}</button>
    <button onClick={()=>setCounter(0)}> Reset Value {counter}</button>
    </>
  )
}

export default App
